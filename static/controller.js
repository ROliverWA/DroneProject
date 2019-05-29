


module.exports = {

  index: (req, res) => {
    console.log("hit controller");
    res.render("index");
  },

  // car: (req, res) => {
  //   console.log('hit controller');
  //   fetch('./cobra_sports_car/cobra_sports_car.glb')
  //     .then(function(data) {
  //       return res.blob(data);
  //     })
  //     .catch(err => res.json(err));
  // }

}