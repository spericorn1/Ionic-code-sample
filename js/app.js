// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js



angular.module('starter', ['ionic', 'ngCordova','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	$ionicConfigProvider.backButton.previousTitleText(false).text('');

  $stateProvider
	
	 .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
    
  })
  
	.state('login', {
		  url: '/login',
		  templateUrl: 'templates/login.html'
		 
		 
	})
	
	.state('home', {
		  url: '/home',
		  templateUrl: 'templates/home.html'
		   
	})
	
	.state('app.profile', {
		  url: '/profile',
		   views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
           controller: 'profileController'
        }
      }
		  
	})
	.state('app.editProfile', {
		  url: '/editProfile',
		   views: {
        'menuContent': {
          templateUrl: 'templates/editProfile.html'
        
        }
		
      }
		  
	})
	.state('app.map', {
		  url: '/map',
		   views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
		  controller: 'MapCtrl'
        }
		
      }
		  
	})
	.state('app.test', {
		  url: '/test',
		   views: {
        'menuContent': {
          templateUrl: 'templates/test.html',
		  controller: 'landCtrl'
        }
		
      }
		  
	})
	.state('app.ticket', {
		  url: '/ticket',
		   views: {
        'menuContent': {
          templateUrl: 'templates/ticket.html',
          controller: 'confirmCtrl'
        }
		
      }
		  
	})
	.state('app.ticketConfirmation', {
		  url: '/ticketConfirmation',
		   views: {
        'menuContent': {
          templateUrl: 'templates/ticketConfirmation.html'
        }
		
      }
		  
	})
	.state('app.search', {
		  url: '/search',
		   views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
		
      }
		  
	})
	.state('app.seats', {
		  url: '/seats',
		   views: {
        'menuContent': {
          templateUrl: 'templates/seats.html'
        }
		
      }
		  
	})
	
	.state('app.forgotPassword', {
		  url: '/forgotPassword',
		   views: {
        'menuContent': {
          templateUrl: 'templates/forgotPassword.html'
        
        }
		
      }
		  
	})

	.state('app.ticketList', {
		  url: '/ticketList',
		   views: {
        'menuContent': {
          templateUrl: 'templates/ticketList.html'
          
        
        }
		
      }
		  
	})
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});





