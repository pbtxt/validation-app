const express = require('express');
const router = express.Router();
const pool = require('../../app');
var nodemailer = require('nodemailer');
const { codigo } = require('../../mail')
const { auth } = require('../../keys')

var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: auth
});


router.get('/auth', (req, res)=>{
    res.render('auth/signin')
})

router.post('/auth', async (req, res)=>{
    const {fullname, email } = req.body
    var mensaje = `Hola! ${fullname} El codigo de autenticación para ingresar a Validation App es: ${codigo} `;
    var mailOptions = {
        from: 'validationapp@zohomail.com',
        to: email,
        subject: 'Validation App - Registro',
        text: mensaje
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
    // await pool.query('INSERT INTO users SET ?', [newUser]);
    res.render('login/auth');
})


module.exports = router;