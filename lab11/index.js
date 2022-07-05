var dns = require('dns');

var dnsLookup = dns.lookup('www.miu.edu', function (err, addresses) {
  console.log("IPV4", addresses);
});