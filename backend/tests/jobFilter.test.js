const test=require('node:test');
const assert=require('node:assert/strict');
const {buildJobFilter}=require('../utils/jobFilter');
test('always scopes application queries to the authenticated user',()=>{assert.deepEqual(buildJobFilter({},'user-1'),{user:'user-1'});});
test('applies supported status and employment type filters',()=>{assert.deepEqual(buildJobFilter({status:'Interview',employmentType:'Internship'},'user-1'),{user:'user-1',status:'Interview',employmentType:'Internship'});});
test('ignores unsupported filter values',()=>{assert.deepEqual(buildJobFilter({status:'Admin',employmentType:'Unknown'},'user-1'),{user:'user-1'});});
test('escapes search input and searches only supported fields',()=>{const filter=buildJobFilter({search:'Dev.*'},'user-1');assert.deepEqual(filter.$or,[{company:{$regex:'Dev\\.\\*',$options:'i'}},{position:{$regex:'Dev\\.\\*',$options:'i'}},{location:{$regex:'Dev\\.\\*',$options:'i'}}]);});
test('limits search input length',()=>{const filter=buildJobFilter({search:'x'.repeat(200)},'user-1');assert.equal(filter.$or[0].company.$regex.length,80);});
