const test=require('node:test');const assert=require('node:assert/strict');const{toCsv}=require('../utils/csv');
test('quotes fields containing commas',()=>{assert.equal(toCsv([['Company'],['Acme, Inc.']]),'"Company"\r\n"Acme, Inc."');});
test('escapes embedded double quotes',()=>{assert.equal(toCsv([['Note'],['Said "hello"']]),'"Note"\r\n"Said ""hello"""');});
test('prefixes formula-like cells to prevent spreadsheet injection',()=>{const output=toCsv([['=HYPERLINK("https://bad.example")']]);assert.equal(output.startsWith('"\'=HYPERLINK'),true);});
test('preserves date values as ISO strings',()=>{assert.equal(toCsv([[new Date('2026-01-02T00:00:00.000Z')]]),'"2026-01-02T00:00:00.000Z"');});
test('handles empty values',()=>{assert.equal(toCsv([[null,undefined,'']]),'"","",""');});
