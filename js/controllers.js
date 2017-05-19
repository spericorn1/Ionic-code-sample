angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})



.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      
	  
	    ionic.Platform.ready(function() {
        var myLatlng = new google.maps.LatLng(12.96,77.65);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
    });
      $scope.goBack = function() {
        $ionicHistory.goBack();                           //This doesn't work
        //window.history.back();                          //This works
        //alert('code to go back called. Did it work?');  //For testing
    }
})




.controller('profileController',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.loginData = {};

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     templateUrl: 'templates/reset_template.html',
     title: 'RESET PASSWORD',
     scope: $scope,
     cssClass: 'resetPasPopup'
    
   });
    myPopup.then(function(res) {
         console.log('Tapped!', res);
    });
   $scope.closePopup = function () {
    myPopup.close();
  };
};

})
.controller('confirmCtrl', function($scope, $ionicPopup) {

   // When button is clicked, the popup will be shown...
  // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Confirm',
       template: 'Are you sure you want to cancel this ticket?',
       cssClass: 'deleteTicket'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };


})
.directive('readMoreContent', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                content: '=',
                length: '='
            },
            templateUrl: 'templates/read-more.html'
        };
    });

 
