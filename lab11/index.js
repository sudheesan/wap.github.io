var dns = require('dns');

var w3 = dns.lookup('www.miu.edu', function (err, addresses, family) {
  console.log("IPV4", addresses);
});