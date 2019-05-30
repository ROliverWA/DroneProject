const express = require('express');
const app = express();
const path = require('path'); 
const http = require('http');
const gameHost = http.Server(app);
var arDrone = require('ar-drone');


var droneOne = arDrone.Client('192.168.1.2');
var droneTwo = arDrone.Client('192.168.1.3');
console.log(droneOne);
console.log(droneTwo);


   
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

    socket.on('collectDrones', message => {
        socket.emit('drones', [this.droneOne, this.droneTwo]);
        console.log('collect drones');
    });
    });   

    
        
       

    








