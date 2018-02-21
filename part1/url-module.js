const url = require('url');
const urlToParse = "http://www.macodingclub.com/profile?name=barry";

const parsedUrl = url.parse(urlToParse);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.query);