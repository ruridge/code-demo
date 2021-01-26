/* This script generates db.json for local development. */
const fs = require('fs');
fs.copyFile('./src/server/db.base.json', './src/server/db.json', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Mock data generated - src/server/db.json.');
  }
});