const express = require('express');

const app = express();

app.listen(2019);

app.get('/hi', (req,res) => {

    res.send("hello,My name is yamuna !");

});

let names = ["jh", "chris", "rhys", "dale", "bob"];

app.get("/getAll", (req,res) => res.send(names));

app.get("/get/:id", (req, res) => res.send(names[req.params.id]));

app.get("/getName/:name", (req,res) => {
    let usr = req.params.name;
    res.send(names.includes(usr));
});

app.get("/delete/:id", (req, res) => res.send(names.splice(req.param.id,2)));

app.use(express.json());

app.post("/create", (req, res) => {

    const name = req.body.name;
    names.push(name);
    res.status(201).send('${name} added successfully');

});

app.post("/replace/:index", (req, res) => {

    const name = req.query.name;
    const index= req.params.index;
    const old= names[index];
    names[index]=name;

    res.status(202).send('${old} successfully replaced with ${name}');
});

//middle ware

app.use((req, res, next) => {
 const logEntry= `host: ${req.host}
 ip: ${req.ip}
 method: ${req.method}
 path: ${req.path}
 time: ${new Date()}`;
 console.log(logEntry);
 next();


});

app.get('/', (req, res) => {

    res.send("hello World");
});


const server =app.listen(() => {

 console.log('server started succesfully on port $ {server.address().port}');

})
