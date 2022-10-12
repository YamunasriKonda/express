const express = require("express")
const router = require("express").Router();

let names = ["add", "chris", "rhys", "dale", "bob"];

router.get("/getAll", (req, res, next) => res.send(names));

router.get("/get/:id", (req, res, next) => res.send(names[req.params.id]));

router.get("/getName/:name", (req, res) => {
    let usr = req.params.name;
    res.send(names.includes(usr));
});

router.get("/delete/:id", (req, res) => res.send(names.splice(req.param.id, 2)));

router.use(express.json());

router.post("/create", (req, res) => {

    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`);

});

router.post("/replace/:index", (req, res) => {

    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;

    res.status(202).send(`${old} successfully replaced with ${name}`);
});


module.exports = router;