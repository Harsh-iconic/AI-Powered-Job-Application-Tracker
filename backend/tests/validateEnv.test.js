const test=require('node:test');const assert=require('node:assert/strict');const validateEnv=require('../config/validateEnv');
const keys=['MONGO_URI','JWT_SECRET','CLIENT_URL','NODE_ENV'];function withEnv(values,fn){const previous=Object.fromEntries(keys.map(key=>[key,process.env[key]]));for(const key of keys){if(values[key]===undefined)delete process.env[key];else process.env[key]=values[key];}try{fn();}finally{for(const key of keys){if(previous[key]===undefined)delete process.env[key];else process.env[key]=previous[key];}}}
test('requires MongoDB URI and JWT secret',()=>withEnv({},()=>assert.throws(validateEnv,/MONGO_URI, JWT_SECRET/)));
test('rejects short JWT secrets',()=>withEnv({MONGO_URI:'mongodb://localhost/test',JWT_SECRET:'too-short'},()=>assert.throws(validateEnv,/at least 32 characters/)));
test('accepts valid development configuration',()=>withEnv({MONGO_URI:'mongodb://localhost/test',JWT_SECRET:'a'.repeat(40),NODE_ENV:'development'},()=>assert.doesNotThrow(validateEnv)));
test('requires a frontend origin in production',()=>withEnv({MONGO_URI:'mongodb://localhost/test',JWT_SECRET:'a'.repeat(40),NODE_ENV:'production'},()=>assert.throws(validateEnv,/CLIENT_URL/)));
