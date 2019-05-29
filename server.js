const express = require('express');
const app = express();
const path = require('path'); 
const http = require('http');
const gameHost = http.Server(app);
   
app.use(express.static(path.join(__dirname, 'public/dist/public')));
app.use(express.json());
gameHost.listen(1337, () => console.log("Listening on port 1337"));
const io = require('socket.io')(gameHost); 

io.on('connection', socket => {    
        console.log('got it'); 
        socket.emit("connected");  
    
    socket.on('message', (message) => {
        console.log("Message ", message);
    });
    });   

    
        
       

    








