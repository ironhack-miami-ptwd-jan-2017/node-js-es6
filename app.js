  // npm install chalk    kirby-dance
  //               |             |
  //               -----         |
  //                   |         --
var chalk = require('chalk'); //  |
var kirbyDance = require('kirby-dance');


console.log( chalk.bgYellow.red('HOT TAMALES') );

console.log( chalk.bgMagenta( kirbyDance(-10) ) );


console.log('🤺');
