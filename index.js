const chalk = require('chalk');
const qrcode = require('qrcode-terminal');
const { Client, MessageMedia  } = require('whatsapp-web.js');


const client = new Client();

client.on('qr', qr => {

    qrcode.generate(qr, {small: true});
});



const sandMessage =()=>{



    client.on('message', message => {
        var Message = message.body; 
        var receiveMessagem = Message.toLowerCase()
      
       switch (receiveMessagem ) {
         
            case 'sim':
             client.sendMessage( message.from, " Perfeito, você está procurando por algo mais urbano ou esportivo?" );
            break;
  
            case 'urbano':
  
                  client.sendMessage( message.from, "Excelente escolha, alguma cor em particular?" );
                
              break;
  
                  case 'esportivo':
                  client.sendMessage( message.from, "Excelente escolha, alguma cor em particular?" );
               break;
  
              case 'azul':
                  const firstPhotoAzul = MessageMedia.fromFilePath('./path/azul1.jpg');
                  const secondPhotoAzul = MessageMedia.fromFilePath('./path/azul2.jpg');
  
                  client.sendMessage(message.from, "Estas são as opções que temos disponíveis nessa cor");
                  client.sendMessage(message.from, firstPhotoAzul);
                  client.sendMessage(message.from, secondPhotoAzul);
                  
              break;
  
              case 'preto':
  
                  const firstPhoto = MessageMedia.fromFilePath('./path/preto1.jpg');
                  const secondPhoto = MessageMedia.fromFilePath('./path/preto2.jpg');
                  
                  client.sendMessage(message.from, "Estas são as opções que temos disponíveis nessa cor");
                  client.sendMessage(message.from, firstPhoto);
                  client.sendMessage(message.from, secondPhoto);
                  
  
              break;
  
              default:
  
              client.sendMessage(message.from, "Procurando um novo par de tênis? Sim/Não");
            
        }
     
        
        console.log(`${chalk.green(receiveMessagem)}`);
        console.log(`${chalk.blue(message.from)}`)

  });
  

}





client.on('ready', () => {

        console.log(`${chalk.yellow(" whatsapp  Conectado") }`);
        sandMessage()

});



client.initialize();
