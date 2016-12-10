// var data = require('./data.js');
var service = require('./service.js');
module.exports = {
  login: function(req,res,next){
      if(req.body.userName && req.body.password){
        if(service.login(req.body.userName,req.body.password)){
          req.session.currentUser = service.getCurrentUser();
          // console.log(req.session.currentUser);
          res.status(200).send({userFound: true});
        }else{
          res.status(400).send({userFound: false});
        }
      }else{
        res.status(400).send('incorrect Password');
      }
  },
  getProfiles: function(req,res,next){
    if(req.session.currentUser){
      res.status(200).send({
        currentUser: req.session.currentUser,
        friends: service.getFriendProfiles(req.session.currentUser)
      });
    }
  };
};
