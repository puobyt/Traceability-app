// generateSecret.js
const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex'); // Generate a random secret key
console.log(`JWT Secret Key: ${secret}`);
