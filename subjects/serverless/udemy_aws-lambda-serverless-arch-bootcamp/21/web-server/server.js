const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
// after setting the use of the static folder, the post still
// works, but the GET methods below seem to be turned off.
// 
// that is kind of cool.  you could have a whole website in a subfolder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.send('The default /');
});

app.get('/i/am/a/long/path', (req, res)=>{
    res.send('GET /i/am/a/long/path');
});

app.post('/hello', (req, res)=>{
    let body = req.body;
    body.message = "Hello " + body.name;

    res.json(body);
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000.');
});