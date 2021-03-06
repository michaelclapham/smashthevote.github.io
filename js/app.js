// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('intro', {
      url: "/",
      templateUrl: 'templates/intro.html',
      controller: 'IntroCtrl'
  })
  .state('home', {
      url: "/home",
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
  })
  .state('why', {
    url: "/why/",
    templateUrl: 'templates/why.html'
  })
  .state('when', {
    url: "/when",
    templateUrl: 'templates/when.html',
    controller: 'WhenCtrl'
  })  
  .state('how', {
    url: "/how",
    templateUrl: 'templates/how.html'
  })

  .state('topic', {
    url: "/topic/:topic/",
    templateUrl: 'templates/why.html',
    controller: "TopicController"
  })
  .state('topic.stance', {
      url: "/topic/:topic/:stance",
      templateUrl: 'templates/why.html',
      controller: "TopicController"
    })

  $urlRouterProvider.otherwise('/');  
})
