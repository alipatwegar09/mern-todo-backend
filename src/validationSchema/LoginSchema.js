import { check } from "express-validator";
export const LoginSchema=[
    check('username','uername is required').exists().isAlphanumeric().withMessage("username sould be alphanumeric character only").trim().isLength({min:6,max:32}),

   check('password','password is required').exists().isLength({min:6,max:100}).trim(),

]
