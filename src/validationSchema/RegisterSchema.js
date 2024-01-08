import { check } from "express-validator";

export const RegisterSchema=[
   // check('name').trim().isAlpha().withMessage("Name should be alphabets only"),
    check('name').trim().matches(/^[A-Za-z\s]+$/).withMessage("Name should contain alphabets and spaces only"),

    check('username','username is required').exists().isAlphanumeric().withMessage("username sould be alphanumeric character only").trim().isLength({min:6,max:32}),

   check('password','password is required').exists().isLength({min:6,max:100}).trim(),

   check('email','email is required').exists().isEmail(),

]
