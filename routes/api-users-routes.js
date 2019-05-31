var db = require("../models");

// POST route for saving a new user
module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.user
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/uploads", function(req, res) {
    var photo = req.body;
  

    //console.log(photo);
    
    Object.keys(photo).forEach(key => {
      //console.log('key123', key); 
      var photoText = key    
      console.log(photoText);
      console.log(photoText.length);

      db.Upload.create({
        picture: photoText
        // UserId: 1
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  });

};

//   app.post("/api/log", function(req, res) {
//       var statueLog= {
//         statue: "",
//         photo:"",
//       };

//   // users trip input
//       var log = req.body;
//   })
// };

// // saves users image to database after picture 
// uploads.push(log);

// // returns image, statue to display on log.html page
// res.json(staueLog)