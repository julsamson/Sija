let express = require('express');
let app = express();



app.set('view engine', 'ejs');
app.use(express.static('dist'))
app.use(express.static('public'))
app.use(express.static('images'))
app.use(express.static('node_modules'))

app.get('/', (req, res)=>{
    res.render('pages/home')
})

app.get('/services', (req, res)=> {
    res.render('pages/services');
})

app.get('/about', (req, res)=> {
    res.render('pages/about');
})

app.get('/contacts', (req, res)=>{
    res.render('pages/contacts');
})

app.listen(3000);