var inputs = process.argv.slice(2);
var results = inputs.map(x => x[0])
                    .reduce((x, y) => x + y);
console.log(`[${inputs}] becomes "${results}"`);

