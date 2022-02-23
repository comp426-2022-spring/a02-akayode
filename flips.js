import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';

let require = createRequire(import.meta.url);

let argument = require('minimist')(process.argv.slice(2));

let number = argument['number'] || 1;

let flip = coinFlips(number);

console.log(flip)

let result = countFlips(flip);

console.log(result)


