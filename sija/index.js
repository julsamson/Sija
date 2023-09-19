let express = require('express');
let app = express();



app.set('view engine', 'ejs');
app.use(express.static('dist'))
app.use(express.static('node_modules'))

app.get('/', (req, res)=>{
    res.render('pages/nav')
})

app.get('/home', (req, res)=> {
    res.render('pages/home');
})

app.get('/about', (req, res)=> {
    res.render('pages/about');
})

app.get('/contacts', (req, res)=>{
    res.render('pages/contacts');
})

app.listen(3000);