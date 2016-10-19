const dns = require('dns');

// La funcion resolve4 se utiliza para resolver la direccion
// IPv4 de un hostname
// https://nodejs.org/api/dns.html#dns_dns_resolve4_hostname_callback
dns.resolve4('www.google.com', function(err, addresses) {
    if (err) throw err;
    console.log('addresses: ' + JSON.stringify(addresses));
});

console.log("Hecho");
