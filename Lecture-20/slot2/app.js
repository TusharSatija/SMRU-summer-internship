let URL=require('url');
let myurl=URL.parse("https://example.com:8080/home?query=product#12312")

console.log(myurl.pathname);
console.log(myurl.hash);
console.log(myurl.host)
console.log(myurl.port);
console.log(myurl.hostname);
console.log(myurl.query);
console.log(myurl.protocol);
