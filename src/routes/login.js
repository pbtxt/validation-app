const express = require('express');
const router = express.Router();
const { codigo } = require('../../mail')

router.get('/login', (req, res)=>{
    res.render('login/auth')
})

router.post('/login', async (req, res)=>{
    const {password} = req.body
    console.log(password)
    if(password==codigo){
        res.render('home/homepage');
    } else {
        req.flash('success', 'Codigo incorrecto');
        res.render('login/auth');
    }
})


module.exports = router;