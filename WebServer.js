const express = require('express');
const app = express();

const server = app.listen(3000, ()=> {
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views'); // __dirname : 현재 디렉토리를 의미
app.set('view engine', 'ejs'); // ejs : html환경에서 js를 사용할 수 있게 해줌 (jsp와 비슷함)
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/about', function(req, res){
    res.send('about page');
});