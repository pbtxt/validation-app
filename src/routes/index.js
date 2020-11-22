const express = require('express')
router = express.Router()

router.get('/', (req, res)=>{
    res.send('inicio de la app')
})

module.exports = router