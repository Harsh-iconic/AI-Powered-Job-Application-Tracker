const r=require('express').Router(),c=require('../controllers/authController'),{protect}=require('../middleware/auth'),{body}=require('express-validator'),validate=require('../middleware/validate');
const registerRules=[body('name').trim().isString().notEmpty().withMessage('Name is required').isLength({max:80}).withMessage('Name must be 80 characters or fewer'),body('email').trim().isEmail().withMessage('Enter a valid email').normalizeEmail(),body('password').isString().isLength({min:8,max:72}).withMessage('Password must be between 8 and 72 characters')];
const loginRules=[body('email').trim().isEmail().withMessage('Enter a valid email').normalizeEmail(),body('password').isString().notEmpty().withMessage('Password is required')];
r.post('/register',registerRules,validate,c.register);
r.post('/login',loginRules,validate,c.login);
r.get('/me',protect,c.me);
r.post('/logout',protect,c.logout);
r.put('/profile',protect,body('name').optional().trim().isString().isLength({min:1,max:80}),body('avatar').optional().isString().isLength({max:500}),validate,c.profile);
module.exports=r;
