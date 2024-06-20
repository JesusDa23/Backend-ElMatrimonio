const {Router} = require('express')
const { register, login, renewToken } = require('../controllers/auth.controller')
const router = Router()

//http://localhost:4000/api/auth

router.post('/register', register)
router.post('/login', login)
router.get('/renew-Token', renewToken )


router.get('/renuew/token')

module.exports = router