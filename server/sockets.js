var selected_roles = 0;




module.exports = io => {
    io.on('connection', socket => {    
        console.log('got it'); 
        socket.emit("connected");  
    
    socket.on('message', (message) => {
        console.log("Message ", message);
    });

    socket.on('role_selected', message => {
        selected_roles++;       
        io.emit('roleselected', selected_roles);
        console.log('selected_roles');
    });
    }); 
};