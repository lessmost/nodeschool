var arg1 = process.argv[2];
var arg2 = process.argv[3];
import {PI} from './04_modulesWithName_module';
import {sqrt} from './04_modulesWithName_module';
import {square} from './04_modulesWithName_module';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));