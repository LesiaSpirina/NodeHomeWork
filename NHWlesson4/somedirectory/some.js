import fs from "fs";

import * as readline from 'node:readline';


const readStream = fs.createReadStream('./access_tmp.log', 'utf-8');
const firstIP = '89.123.1.41';
const secondIP = '34.48.240.111';

const writeStreamIP = fs.createWriteStream(`${firstIP} .IP.log` );
const writeStreamRequest = fs.createWriteStream(`${secondIP} Request.log`);

const rl = readline.createInterface({
    input: readStream
});
rl.on ('line', (line) => {
    if( line.includes(firstIP)) {
        writeStreamIP.write( `\n ${line}`);
    }
    if( line.includes(secondIP)) {
        writeStreamRequest.write( `\n ${line}`);
    }
})



