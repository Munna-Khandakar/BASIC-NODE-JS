/*
 * Title: Node JS OS system
 * Description: some useful OS system modules
 * Author: Munna Khandakar (learnt from 'Traversy Media')
 * Date: 17/05/2020
 *
 */

const os = require("os");

// platofrm
console.log(os.platform());

// cpu arch
console.log(os.arch());

// cpu core info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());
