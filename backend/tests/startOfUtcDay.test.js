const test=require('node:test');const assert=require('node:assert/strict');const startOfUtcDay=require('../utils/startOfUtcDay');
test('returns midnight UTC for the supplied day',()=>{const result=startOfUtcDay(new Date('2026-11-20T15:45:30.000Z'));assert.equal(result.toISOString(),'2026-11-20T00:00:00.000Z');});
test('does not mutate the input date',()=>{const input=new Date('2026-11-20T15:45:30.000Z');const before=input.getTime();startOfUtcDay(input);assert.equal(input.getTime(),before);});
test('handles dates close to a UTC day boundary',()=>{assert.equal(startOfUtcDay(new Date('2026-11-20T00:00:01.000Z')).toISOString(),'2026-11-20T00:00:00.000Z');});
