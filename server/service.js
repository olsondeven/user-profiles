var data = require('./data.js');
module.exports = {
  login: function(userName,password){
    // console.log(data.users);
    // console.log(userName,password);
    for(var i = 0; i < data.users.length; i++){
      if(data.users[i].name == userName && data.users[i].password === password){
        data.currentUser = data.users[i].name;
        return true;
      }
    }
    return false;
  },
  getCurrentUser: function(){
    return data.currentUser;
  },
  getFriendProfiles: function(currentUser){
    var arr = [];
    currentUser.friends.forEach(function(name,i){
      data.profiles.forEach(function(obj,j){
        if(name === obj.name){
          console.log(obj);
          arr.push(obj);
        }
      });
    });
    return arr;
  }
};
