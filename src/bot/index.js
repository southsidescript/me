//tme bot token:6032364716:AAEz8J-3C9iZad0Ut5nBd6wBWOBtE4Dg2ZM
//https request = https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/sendMessage
//myid=688804750 
//message:chat_id=12345&text=hello%20friend
//https://api.telegram.org/bot6032364716:AAEz8J-3C9iZad0Ut5nBd6wBWOBtE4Dg2ZM/sendMessage?chat_id=688804750&text=hello

//T.ME BOT

function sendRequest(e){
    let xhr = new XMLHttpRequest();
    let token   = '6032364716:AAEz8J-3C9iZad0Ut5nBd6wBWOBtE4Dg2ZM';
    let userId  = '688804750';
    let message = document.querySelector('#entermessage').value;
    let url     = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${'New notification ' + message}`;
    
    xhr.open('POST',url,true);
    xhr.send();
    e.preventDefault();
    document.querySelector('#entermessage').value = '';
    
}
export default sendRequest;
