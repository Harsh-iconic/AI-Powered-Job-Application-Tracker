const test=require('node:test');const assert=require('node:assert/strict');const packageJson=require('../../package.json');
test('does not define a recursive npm install lifecycle script',()=>{assert.equal(packageJson.scripts.install,undefined);assert.equal(typeof packageJson.scripts['setup:all'],'string');});
test('keeps the root development command configured',()=>{assert.match(packageJson.scripts.dev,/concurrently/);});
