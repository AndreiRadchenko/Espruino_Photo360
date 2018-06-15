function start(){
 // write some text
 g.drawString("Hello World!",2,2);
 // write to the screen
 g.flip(); 
}

// I2C
//I2C1.setup({scl:B6,sda:B7});
//var g = require("SH1106").connect(I2C1, start);

// SPI
var s = new SPI();
s.setup({mosi: D15, sck:D13});
var g = require("SH1106").connectSPI(s, D18, D19, start);
