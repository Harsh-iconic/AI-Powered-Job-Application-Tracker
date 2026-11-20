const test=require('node:test');const assert=require('node:assert/strict');const isSessionCurrent=require('../utils/isSessionCurrent');
test('accepts a token with the current session version',()=>assert.equal(isSessionCurrent(3,3),true));
test('rejects a token issued before a password change',()=>assert.equal(isSessionCurrent(2,3),false));
test('treats legacy missing token versions as zero',()=>assert.equal(isSessionCurrent(undefined,0),true));
test('rejects legacy tokens after the version is incremented',()=>assert.equal(isSessionCurrent(undefined,1),false));
