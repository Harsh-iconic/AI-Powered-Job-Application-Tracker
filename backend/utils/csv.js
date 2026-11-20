const csvCell=value=>{let text=value instanceof Date?value.toISOString():String(value??'');if(/^[\t\r ]*[=+\-@]/.test(text))text="'"+text;return '"'+text.replace(/"/g,'""')+'"';};
exports.toCsv=rows=>rows.map(row=>row.map(csvCell).join(',')).join('\r\n');
