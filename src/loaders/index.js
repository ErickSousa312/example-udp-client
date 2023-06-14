const StartClientUDP = require('./serverTCP');
class Loaders {
  start (){
    StartClientUDP();
  }
}
module.exports = new Loaders (); 

