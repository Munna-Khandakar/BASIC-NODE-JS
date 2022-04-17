/*
 * Title: Node JS path system
 * Description: some useful path system modules
 * Author: Munna Khandakar (learnt from 'Traversy Media')
 * Date: 17/05/2020
 *
 */

const path = require("path");

//Base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extenstion
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
