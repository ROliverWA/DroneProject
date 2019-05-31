var arDrone = require('ardrone-autonomy')

module.exports = {

    up: function(callback) {
        var state = this.state();
        return this._go({x: state.x, y: state.y, z: state.z + .2, yaw: state.yaw}, callback);
    },
    down: function(callback) {
        var state = this.state();
        return this._go({x: state.x, y: state.y, z: state.z - .2, yaw: state.yaw}, callback);
    },
    left: function(callback) {
        var state = this.state();
        var yaw   = state.yaw.toDeg() + 45;
        return this._go({x: state.x, y: state.y, z: state.z, yaw: yaw.toRad()}, callback);
    },
    right: function(callback) {
        var state = this.state();
        var yaw   = state.yaw.toDeg() - 45;
        return this._go({x: state.x, y: state.y, z: state.z, yaw: yaw.toRad()}, callback);
    },
    backward: function(callback) {
        var state = this.state();
        var gx = state.x + Math.cos(state.yaw) * .2;
        var gy = state.y + Math.sin(state.yaw) * .2;
        this._go({x: gx, y: gy, z: state.z, yaw: state.yaw}, callback);
    },
    forward: function(callback) {
        var state = this.state();
        var gx = state.x + Math.cos(state.yaw) * .2;
        var gy = state.y + Math.sin(state.yaw) * .2;
        this._go({x: gx, y: gy, z: state.z, yaw: state.yaw}, callback);
     }
    
}