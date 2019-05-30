const controller = require('./controller')


module.exports = function(app) {
  console.log('hit routes');

  app.get('/', controller.index)

}