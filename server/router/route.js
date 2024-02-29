import { Router } from "express";
const router = Router();

/**import all controllers */
import * as controller from '../controller/appController.js'

/**Post */
router.route('/register').post(controller.register); //register user
//router.route('registerMail').post(); //send the email
router.route('/authenticate').post((req,res) => res.end()); //authenticate user
router.route('/login').post(controller.login); // login in app

/**GET */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/user/:generateOTP').get(controller.generateOTP) // generate random OTP
router.route('/user/:verifyOTP').get(controller.verifyOTP) // verify generated OTP
router.route('/user/:createResetSession').get(controller.createResetSession) //rest all the variables

/**PUT */
router.route('/updateuser').put(controller.updateuser) // update the user profile
router.route('resetPassword').put(controller.resetPassword) // use to reset passoword

export default router