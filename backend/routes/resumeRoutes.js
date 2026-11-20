const r=require('express').Router(),multer=require('multer'),c=require('../controllers/resumeController'),{protect}=require('../middleware/auth'),{param}=require('express-validator'),validate=require('../middleware/validate');
const upload=multer({storage:multer.memoryStorage(),limits:{fileSize:5*1024*1024},fileFilter:(req,file,cb)=>{const isPdf=file.mimetype==='application/pdf'&&file.originalname.toLowerCase().endsWith('.pdf');if(!isPdf){const error=new Error('Only PDF resume files are allowed');error.statusCode=400;return cb(error);}cb(null,true);}});
r.use(protect);
r.post('/upload',upload.single('resume'),c.upload);
r.get('/',c.list);
r.delete('/:id',param('id').isMongoId().withMessage('Invalid resume ID'),validate,c.remove);
module.exports=r;
