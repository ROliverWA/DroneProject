var selected_roles = 0;

module.exports = (io, drone1, drone2) => {
  io.on("connection", socket => {
    console.log("got it");
    socket.emit("connected");

    socket.on("message", message => {
      console.log("Message ", message);
    });

    socket.on("start1", message => {
     drone1.disableEmergency();
      drone1.takeoff();
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("stop1", message => {
      drone1.stop();
      drone1.land();
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });
    socket.on("forward1", message => {
      drone1
        .after(100, function() {
          this.front(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("back1", message => {
      drone1
        .after(100, function() {
          this.back(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });
    socket.on("left1", message => {
      drone1
        .after(100, function() {
          this.left(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("right1", message => {
      drone1
        .after(100, function() {
          this.right(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("up1", message => {
      drone1
        .after(100, function() {
          this.up(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("down1", message => {
      drone1
        .after(100, function() {
          this.down(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("cw1", message => {
      drone1
        .after(100, function() {
          this.clockwise(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("ccw1", message => {
      drone1
        .after(100, function() {
          this.counterClockwise(".3");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("start2", message => {
      drone2.takeoff();
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("stop2", message => {
      drone2.stop();
      drone2.land();
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("left2", message => {
      drone2
        .after(100, function() {
          this.left(".2");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("right2", message => {
      drone2
        .after(100, function() {
          this.right(".2");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("forward2", message => {
      console.log("forward2");
      drone2
        .after(100, function() {
          this.front(".2");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("back2", message => {
      drone2
        .after(100, function() {
          this.back(".2");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("up2", message => {
      drone2
        .after(100, function() {
          this.up(".2");
        })
        .after(2000, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("up2");
    });

    socket.on("down2", message => {
      drone2
        .after(100, function() {
          this.down(".2");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("cw2", message => {
      drone2
        .after(100, function() {
          this.clockwise(".2");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });

    socket.on("ccw2", message => {
      drone2
        .after(100, function() {
          this.counterClockwise(".2");
        })
        .after(1700, function() {
          this.stop();
        });
      io.emit("roleselected", selected_roles);
      console.log("selected_roleszzzzz");
    });
  });
};
