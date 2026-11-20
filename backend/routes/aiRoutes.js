const r=require('express').Router(),c=require('../controllers/aiController'),{protect}=require('../middleware/auth'),{body}=require('express-validator'),validate=require('../middleware/validate');r.use(protect);
const resumeId=body('resumeId').isMongoId().withMessage('A valid resume ID is required');
const jobId=body('jobId').isMongoId().withMessage('A valid job ID is required');
r.post('/resume/analyze',resumeId,validate,c.analyze);
r.post('/job/match',[resumeId,jobId],validate,c.match);
r.post('/interview/generate',jobId,validate,c.interview);
r.get('/history',c.history);r.get('/interviews',c.interviewHistory);r.patch('/interviews/:id',[require('express-validator').param('id').isMongoId(),require('express-validator').body('scheduledAt').optional({nullable:true,checkFalsy:true}).isISO8601().withMessage('Scheduled date must be valid'),require('express-validator').body('notes').optional().isString().isLength({max:5000}).withMessage('Notes must be 5000 characters or fewer')],validate,c.updateInterview);r.delete('/interviews/:id',require('express-validator').param('id').isMongoId(),validate,c.deleteInterview);module.exports=r;