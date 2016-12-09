var data = require('./data.js');
var exports = module.exports;
var currentUser = null;
exports.getCurrentUser = function(){
  return currentUser;
};
exports.login = function(userName,password){
  for(var i = 0; i < data.users.length; i++){
    if(data.users[i].userName === userName && data.users[i].password === password){
      currentUser = data.users[i].userName;
      return true;
    }else{
      return false;
    }
  }
  //loop through array, check if there is a username that matches
  //grab that obj and then check to make sure that username matches password for user
  return currentUser;
};
exports.currentProfile = function(){
  var currentProfile = null;
  data.profiles.forEach(function(element, index){
    if(element.userName === currentUser ){
      currentProfile = data.profiles[index];
    }
  });

};
