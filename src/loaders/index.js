const StartClientUDP = require('./clientUDP');
class Loaders {
  start (){
    StartClientUDP();
  }
}
module.exports = new Loaders (); 

