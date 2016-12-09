// var data = require('./data.js');
var service = require('./service.js');
module.exports = {
  login: function(req,res,next){
    console.log(req.body.userName,req.body.password);

      if(service.login(req.body.userName,req.body.password)){
        req.session.currentUser = service.getCurrentUser();
        res.status(200).send({userFound: true});
      }else{
        res.status(200).send({useFound: false});
      }

  }
};
