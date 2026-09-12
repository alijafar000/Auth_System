import express from 'express'
import { changePassword, forgotPassword, logoutUser, userLogin, userRegister, verification, verifyOtp } from '../controller/userController.js'
import { isAuthenticate } from '../middleware/isAuthenticate.js'
import { userSchema, validateUser } from '../validator/userValidation.js'

const router = express.Router()

router.post('/register', validateUser(userSchema), userRegister)
router.post('/verify', verification)
router.post('/login', userLogin)
router.post('/logout', isAuthenticate, logoutUser)
router.post('/forgot-password', forgotPassword)
router.post('/verify-otp/:email', verifyOtp)
router.post('/change-password/:email', changePassword)


export default router;