const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const port = 3002;
const serverAddress = 'localhost';

const message = '1;5;VVFFV';

function StartClientUDP(){
  client.send(message, port, serverAddress, (error) => {
    if (error) {
      console.error('Erro ao enviar a mensagem:', error);
    } else {
      console.log(`Mensagem enviada ao servidor: ${message}`);
    }
  });
  
  client.on('message', (response, remote) => {
    console.log(`Resposta do servidor: ${response.toString()}`);
    client.close();
  });
  
}

module.exports = StartClientUDP