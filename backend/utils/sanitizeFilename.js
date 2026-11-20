module.exports=function sanitizeFilename(value){const name=String(value||'resume.pdf').split(String.fromCharCode(92)).join('/').split('/').pop().trim().slice(0,255);return name||'resume.pdf';};
