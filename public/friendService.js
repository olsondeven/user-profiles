angular.module('userProfiles')
.service('friendService', function( $http ) {

    this.login = function( user ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      }).then(function(response){
        if(response.status === 200){
          console.log('login',response);
          return response;
        }else{
          alert('user doesn\'t exist');
        }
      });
    };

    this.getFriends = function() {
      return $http({
        method: 'get',
        url: '/api/profiles'
    }).then(function(response){
      console.log('profiles',response);
      return response;
    });
  }

});
