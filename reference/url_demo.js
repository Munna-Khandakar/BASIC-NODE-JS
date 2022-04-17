/*
 * Title: Node JS url system
 * Description: some useful url system modules
 * Author: Munna Khandakar (learnt from 'Traversy Media')
 * Date: 17/05/2020
 *
 */

const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:5000/hello.html?id=2577&status=active"
);

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// host (root domain)
console.log(myUrl.host);

// host name
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append("house", "QH");
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((val, name) => console.log(`${name}: ${val}`));
