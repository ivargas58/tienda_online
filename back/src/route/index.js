const express = require('express')
const router = express.Router()
const Productos = require('../controller/index')


router.get('/productos', Productos.getAll)


module.exports = router