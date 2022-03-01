import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';

let require = createRequire(import.meta.url);

let argument = require('minimist')(process.argv.slice(2));

let call = argument['call'];

if (call == "heads" || call == "tails") {
    var flip = flipACoin(call);
    console.log(flipACoin(call))
} else {
    console.log("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}


