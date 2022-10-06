const express = require('express');

const app = express();

app.listen(4123);

app.get('/hi', (req,res) => {

    res.send("hello,My name is yamuna !");

});

const server =app.listen(() => {

 console.log('server started succesfully on port $ {server.address().port}');

})
