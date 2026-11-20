const test=require('node:test');const assert=require('node:assert/strict');const escapeRegex=require('../utils/escapeRegex');
test('leaves ordinary search text unchanged',()=>{assert.equal(escapeRegex('frontend developer'),'frontend developer');});
test('escapes regex metacharacters so search stays literal',()=>{const input='C++ (React) [Node.js]';const escaped=escapeRegex(input);assert.equal(new RegExp(escaped).test(input),true);assert.equal(new RegExp(escaped).test('C++ React Node.js'),false);});
test('converts values to strings safely',()=>{assert.equal(escapeRegex(2026),'2026');});
test('does not interpret a user wildcard as a pattern',()=>{const escaped=escapeRegex('dev*ops');assert.equal(new RegExp(escaped).test('dev*ops'),true);assert.equal(new RegExp(escaped).test('devops'),false);});
test('escapes every regular expression metacharacter',()=>{const value='.*+?^${}()|[]\\\\';const escaped=escapeRegex(value);assert.equal(new RegExp(escaped).test(value),true);assert.equal(new RegExp(escaped).test('ordinary text'),false);});
