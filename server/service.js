var data = require('./data.js');
module.exports = {
  login: function(userName,password){
    // console.log(data.users);
    // console.log(userName,password);
    for(var i = 0; i < data.users.length; i++){
      if(data.users[i].name === userName && data.users[i].password === password){
        data.currentUser = data.users[i];
        return true;
      }else{
        return false;
      }
    }
  },
  getCurrentUser: function(){
    return data.currentUser;
  }
};
