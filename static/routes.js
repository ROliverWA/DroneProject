const controller = require('./controller')


module.exports = function(app) {
  console.log('hit routes');

  app.get('/', controller.index)
  // app.get('/cobra_sports_car/cobra_sports_car.glb', controller.car)


}