const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public/dist/public' ));

require('./static/routes')(app)

app.listen(8000, function() {
  console.log("Listening on port 8000")
});