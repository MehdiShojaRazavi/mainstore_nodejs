const crypto = require('crypto');
const key = crypto.randomBytes(32).toString('hex').toUpperCase();
console.log(key);
// bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTEyMzQ1Njc4OSIsImlhdCI6MTY1OTEwNzAyNCwiZXhwIjoxNjU5MTEwNjI0fQ.eby6YSltw9bFyz3zVGJgAykBJnMwwOvVp0osLeebtxo
