var selected_roles = 0;




module.exports = (io, drone1, drone2) => {
    io.on('connection', socket => {    
        console.log('got it'); 
        socket.emit("connected");  
    
    socket.on('message', (message) => {
        console.log("Message ", message);
    });

    socket.on('start1', message => {
        drone1.takeoff();       
        io.emit('roleselected', selected_roles);
        console.log('selected_roleszzzzz');
    });

    socket.on('stop1', message => {
        drone1.stop();  
        drone1.land();     
        io.emit('roleselected', selected_roles);
        console.log('selected_roleszzzzz');
    });
    socket.on('left1', message => {
        drone1.left(".2");       
        io.emit('roleselected', selected_roles);
        console.log('selected_roleszzzzz');
    });

    socket.on('right1', message => {
        drone1.right(".2");     
        io.emit('roleselected', selected_roles);
        console.log('selected_roleszzzzz');
    });
    socket.on('start2', message => {
        drone2.takeoff();       
        io.emit('roleselected', selected_roles);
        console.log('selected_roleszzzzz');
    });

    socket.on('stop2', message => {
        drone2.stop();  
        drone2.land();     
        io.emit('roleselected', selected_roles);
        console.log('selected_roleszzzzz');
    });
    }); 
};