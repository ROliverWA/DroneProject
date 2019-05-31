const express = require('express');
const app = express();
const path = require('path'); 
const http = require('http');
const gameHost = http.Server(app);
var arDrone = require('ar-drone');



var droneOne = arDrone.createClient('192.168.1.2');
droneOne.disableEmergency();
var droneTwo = arDrone.createClient('192.168.1.3');
droneTwo.disableEmergency();


console.log(droneOne);
   
app.use(express.static(path.join(__dirname, 'public/dist/public')));
app.use(express.json());
gameHost.listen(1337, () => console.log("Listening on port 1337"));


const io = require('socket.io')(gameHost); 


require('./server/sockets')(io, droneOne, droneTwo);

// droneOne.takeoff();


