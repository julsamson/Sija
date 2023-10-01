let express = require('express');
let app = express();



app.set('view engine', 'ejs');
app.use(express.static('dist'))
app.use(express.static('public'))
app.use(express.static('images'))
app.use(express.static('node_modules'))

pages = [
    { page: "HOME", link: "/" },
    { page: "SERVICES", link: "/services" },
    { page: "ABOUT US", link: "/about" },
    { page: "CONTACTS", link: "/contacts" },
]

app.get('/', (req, res)=>{
    res.render('pages/home', {pages: pages})
})

app.get('/services', (req, res)=> {
    res.render('pages/services', {pages: pages});
})

app.get('/about', (req, res)=> {
    res.render('pages/about', {pages: pages});
})

app.get('/contacts', (req, res)=>{
    res.render('pages/contacts', {pages: pages});
})

app.listen(3000);