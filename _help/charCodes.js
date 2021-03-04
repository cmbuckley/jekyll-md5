#!/usr/bin/env node

const fs = require('fs');
let output = '';

for (let i = 0; i <= 65535; i++) {
    output += '- "';

    try {
        output += encodeURI(String.fromCharCode(i));
    } catch (e) {
        output += "ERR";
    }

    output += '"\n';
}

fs.writeFileSync('_data/char_codes.yml', output);
