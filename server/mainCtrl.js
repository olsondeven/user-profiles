// var data = require('./data.js');
var service = require('./service.js');
module.exports = {
  postLogin: function(req,res,next){
    console.log(req.body);
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
    console.log('current user ',req.session.currentUser);
    if(req.session.currentUser){
      res.status(200).send({
        currentUser: req.session.currentUser,
        friends: service.getFriendProfiles(req.session.currentUser)
      });
      console.log(service.getFriendProfiles(req.session.currentUser));
    }else{
      res.status(400).send('please login');
    }
  }
};
