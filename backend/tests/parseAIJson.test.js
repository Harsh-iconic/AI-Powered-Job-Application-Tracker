const test=require('node:test');const assert=require('node:assert/strict');const parseAIJson=require('../utils/parseAIJson');
test('parses a JSON object response',()=>{assert.deepEqual(parseAIJson('{"score":82,"skills":["React"]}'),{score:82,skills:['React']});});
test('rejects empty AI output with an actionable message',()=>{assert.throws(()=>parseAIJson('  '),/empty response/);});
test('rejects arrays and primitive JSON values',()=>{for(const value of ['[]','null','42','"text"'])assert.throws(()=>parseAIJson(value),/invalid JSON/);});
test('rejects malformed JSON',()=>{assert.throws(()=>parseAIJson('{not-json}'),/invalid JSON/);});
