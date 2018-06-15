var wifi = require("Wifi");
wifi.disconnect();
wifi.setAPIP({ip:"192.168.5.100", gw:"192.168.5.100", netmask:"255.255.255.0"}, function(details){});
wifi.startAP("Espruino", {authMode:"open"});
//wifi.setIP({ip:"192.168.5.100", gw:"192.168.5.1", netmask:"255.255.255.0"}, function(details){});

console.log(`Web server running at http://${wifi.getAPIP().ip}`);


wifi.on('sta_joined', function(details) { 
	console.log(`Sambody connect to http://`);
});

var http = require("http");
http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("Hello World");
}).listen(80);

http.setHostname("esp32");