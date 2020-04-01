
   var app = angular.module("App", ["ngRoute"]);

   app.config(function($routeProvider){
       $routeProvider
       .when("/", {
           templateUrl: "./pages/welcome.html"
       })

       .when("/home", {
        templateUrl: "./pages/home.html"
    })

    .otherwise({redirectTo: '#/'})

   })