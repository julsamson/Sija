let express = require('express');
let app = express();
let nodemailer = require('nodemailer');
let bodyParser = require('body-parser');
const { constrainedMemory } = require('process');
let PORT = process.env.PORT || 3000;


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

app.get('/', (req, res) => {
    res.render('pages/home', { pages: pages })
})

app.get('/services', (req, res) => {
    res.render('pages/services', { pages: pages });
})

app.get('/about', (req, res) => {
    res.render('pages/about', { pages: pages });
})

app.get('/contacts', (req, res) => {
    res.render('pages/contacts', { pages: pages });
})


//send an email

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    server: 'gmail',
    auth: {   
        user: 'jaymsab170@gmail.com',
        pass: 'mxabiaz01',
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from : email,
        to : 'jaymsab170@gmail.com',
        subject : 'New Contact Form Submission',
        text : `Name: ${name}\n Email: ${email}\n Phone: ${phone}\n Message: ${message}`,
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.error(error);
            res.send(500).send('Error sending email');
        }
        else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
});