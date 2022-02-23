import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';

let require = createRequire(import.meta.url);

let argument = require('minimist')(process.argv.slice(2));

let call = argument['call'];

let flip = flipACoin(call);

console.log(flip)
