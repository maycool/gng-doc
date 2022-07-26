const { exec } = require('child_process');
require('dotenv').config();

exec('spot docs index.ts -p=' + process.env.PORT, (error, stdout, stderr) => {
    if (error) {
        return console.log(`error: ${error.message}`);
    }

    if (stderr) {
        return console.log(`stderr: ${stderr}`);
    }
});