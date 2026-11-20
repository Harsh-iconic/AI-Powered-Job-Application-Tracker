const test=require('node:test');
const assert=require('node:assert/strict');
const sanitizeFilename=require('../utils/sanitizeFilename');

test('removes Windows directory components from uploaded filenames',()=>{
  assert.equal(sanitizeFilename('C:\\Users\\Harsh\\resume.pdf'),'resume.pdf');
});
test('removes Unix directory components from uploaded filenames',()=>{
  assert.equal(sanitizeFilename('/tmp/uploads/resume.pdf'),'resume.pdf');
});
test('uses a safe fallback for empty filenames',()=>{
  assert.equal(sanitizeFilename('   '),'resume.pdf');
});
test('limits stored filenames to 255 characters',()=>{
  assert.equal(sanitizeFilename('a'.repeat(300)+'.pdf').length,255);
});
