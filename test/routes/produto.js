var app = require("../../config/express")();
var request = require("supertest")(app);

describe("#ProdutoController",function () {
    it("Deve devolver uma lista de produtos no formato json",function (done) {
        request.get("/produtos").set("Accept","application/json")
        .expect("Content-Type",/json/)
        .expect(200,done);
    });
    it("Deve devolver uma lista de produtos no formato html",function (done) {
        request.get("/produtos").set("Accept","text/html")
        .expect("Content-Type",/html/)
        .expect(200,done);
    });
});