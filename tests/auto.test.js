const chai = require("chai");

const chaiHttp = require("chai-Http");

chai.use(chaiHttp);

const server = require("../index");

describe("Name tests", () => {

    it("should create a Name", () => {

        const newName = {

            "name": "Phani",
        }

        chai.request(server).post("/replace/:index").send(newName).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newName);
            
        });
    })
})