const fs = require('fs');
let output = '';

for (let i = 0; i <= 65535; i++) {
    output += '- "' + (i == 10  ? '\\n' : String.fromCharCode(i)) + '"\n';
}

fs.writeFileSync('_data/charCodes.yml', output);
