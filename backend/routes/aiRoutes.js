const r=require('express').Router(),c=require('../controllers/aiController'),{protect}=require('../middleware/auth'),{body}=require('express-validator'),validate=require('../middleware/validate');r.use(protect);
const resumeId=body('resumeId').isMongoId().withMessage('A valid resume ID is required');
const jobId=body('jobId').isMongoId().withMessage('A valid job ID is required');
r.post('/resume/analyze',resumeId,validate,c.analyze);
r.post('/job/match',[resumeId,jobId],validate,c.match);
r.post('/interview/generate',jobId,validate,c.interview);
r.get('/history',c.history);r.get('/interviews',c.interviewHistory);module.exports=r;