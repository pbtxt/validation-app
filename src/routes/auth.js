const express = require('express')
const router = express.Router();
const pool = require('../../app')


router.get('/auth', (req, res)=>{
    res.render('auth/signin')
})

router.post('/auth', async (req, res)=>{
    const {fullname, username, password } = req.body
    const newUser = {
        fullname,
        username,
        password
    } 
    await pool.query('INSERT INTO users SET ?', [newUser]);
    res.render('auth/login');
})

router.get('/auth/login', (req, res)=>{
    res.render('auth/login')
})

router.post('/auth/login', async (req, res)=>{
    console.log(req.body)
    // const user = await pool.query('SELECT * from users WHERE username='[])
})

module.exports = router;