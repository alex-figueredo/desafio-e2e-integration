const request = require("supertest");
const ApiUrl = "https://drj335kkci.execute-api.sa-east-1.amazonaws.com/dev/v1";

describe("Testes Cadastro de Usuarios via API", () => {
  it("Cadastro com sucesso -- OK 200", () => {
    const EMAIL = "teste@"+new Date().getTime()+".com.br"
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "Teste Suecesso",
        "password": "12345678",
        "email": EMAIL,
        "loginType": "email" 
    })
      .expect(200)
      .then(response => {
        expect(response.body.user.fullName).toEqual("Teste Suecesso");
        expect(response.body.user.email).toEqual(EMAIL);
        expect(response.body.user.loginType).toEqual(["email"]);
      });
  });

  it("fullName -- Nome em branco -- OK 400", () => {
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "",
        "password": "123456",
        "email": "teste@"+new Date().getTime()+".com.br",
        "loginType": "email" 
    })
      .expect(400)
      .then(response => {
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toEqual("FULLNAME_REQUIRED");
        expect(response.body.error.message).toEqual("\"fullName\" é obrigatório");
        expect(response.body.error.type).toEqual("ApiError");
      });
  });

  it("fullName -- Nome apenas sem sobrenome - NOK 200", () => {
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "NomeSimples",
        "password": "123456",
        "email": "teste@"+new Date().getTime()+".com.br",
        "loginType": "email" 
    })
      .expect(400)
      .then(response => {
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toEqual("FULLNAME_REQUIRED");
        expect(response.body.error.message).toEqual("\"fullName\" é obrigatório");
        expect(response.body.error.type).toEqual("ApiError");
      });
  });

  it("password -- Senha em branco cadastra e devolve ERRO - NOK 500", () => {
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "Teste teste",
        "password": "",
        "email": "teste@"+new Date().getTime()+".com.br",
        "loginType": "email" 
    })
      .expect(400)
      .then(response => {
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toEqual("PASSWORD");
        expect(response.body.error.message).toEqual("\"password\" é obrigatório");
        expect(response.body.error.type).toEqual("ApiError");
      });
  });

  it("password -- Senha nao enviada cadastra e devolve ERRO - NOK 500", () => {
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "Teste teste",
        "email": "teste@"+new Date().getTime()+".com.br",
        "loginType": "email" 
    })
      .expect(400)
      .then(response => {
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toEqual("PASSWORD");
        expect(response.body.error.message).toEqual("\"password\" é obrigatório");
        expect(response.body.error.type).toEqual("ApiError");
      });
  });

  it("password -- Senha sem os criterios minimos 8 caracteres - NOK 200", () => {
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "Teste teste",
        "password": "12",
        "email": "teste@"+new Date().getTime()+".com.br",
        "loginType": "email" 
    })
      .expect(400)
      .then(response => {
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toEqual("PASSWORD");
        expect(response.body.error.message).toEqual("A senha deve ter pelo menos 8 caracteres");
        expect(response.body.error.type).toEqual("ApiError");
      });
  });

  it("email -- Usuario ja cadastrado - OK 400", () => {
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "Nome completo",
        "password": "123456",
        "email": "teste@tect.com.br",
        "loginType": "email" 
    })
      .expect(400)
      .then(response => {
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toEqual("EMAIL_REGISTERED");
        expect(response.body.error.message).toEqual("E-mail já cadastrado");
        expect(response.body.error.type).toEqual("ApiError");
      });
  });

  it("email -- Email invalido - OK 400", () => {
    return request(ApiUrl)
      .post("/users")
      .send({
        "fullName": "Nome completo",
        "password": "123456",
        "email": "teste.bossa.com.br",
        "loginType": "email" 
    })
      .expect(400)
      .then(response => {
        expect(response.body.error.status).toEqual(400);
        expect(response.body.error.code).toEqual("INVALID_EMAIL");
        expect(response.body.error.message).toEqual("O e-mail é inválido");
        expect(response.body.error.type).toEqual("ApiError");
      });
  });

    it("loginType -- Tipo do Login em branco cadastra porem API consta como obrigatorio - NOK 200", () => {
      return request(ApiUrl)
        .post("/users")
        .send({
          "fullName": "Teste teste",
          "password": "222888888",
          "email": "teste@"+new Date().getTime()+".com.br",
          "loginType": "" 
      })
        .expect(400)
        .then(response => {
          expect(response.body.error.status).toEqual(400);
          expect(response.body.error.code).toEqual("LOGIN_TYPE");
          expect(response.body.error.message).toEqual("\"loginType\" é obrigatório");
          expect(response.body.error.type).toEqual("ApiError");
        });
    });

    it("loginType -- Tipo do Login diferente de 'email' esta voltando 500 e cadastra porem de acordo com a doc somente email é valido - NOK 500", () => {
      return request(ApiUrl)
        .post("/users")
        .send({
          "fullName": "Teste teste",
          "password": "222888888",
          "email": "teste@"+new Date().getTime()+".com.br",
          "loginType": "emaaol" 
      })
        .expect(400)
        .then(response => {
          expect(response.body.error.status).toEqual(400);
          expect(response.body.error.code).toEqual("LOGIN_TYPE");
          expect(response.body.error.message).toEqual("\"loginType\" é obrigatório");
          expect(response.body.error.type).toEqual("ApiError");
        });
    });
    it("loginType -- Tipo do Login nao enviado e na doc é obrigatorio - NOK 200", () => {
      return request(ApiUrl)
        .post("/users")
        .send({
          "fullName": "Teste teste",
          "password": "222888888",
          "email": "teste@"+new Date().getTime()+".com.br"
      })
        .expect(400)
        .then(response => {
          expect(response.body.error.status).toEqual(400);
          expect(response.body.error.code).toEqual("LOGIN_TYPE");
          expect(response.body.error.message).toEqual("\"loginType\" é obrigatório");
          expect(response.body.error.type).toEqual("ApiError");
        });
    });
});