var ngSkeleton = angular.module('ngSkeleton', ['ngRoute']);

ngSkeleton.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/about', 
              {
              templateUrl : 'pages/about.html',
              controller  : 'aboutController'
			  })
        .when('/insult', 
              {
              templateUrl : 'pages/insult.html',
              controller  : 'insultController'
			  })
        .when('/contact', 
              {
              templateUrl : 'pages/contact.html',
              controller  : 'contactController'
              });
	});

ngSkeleton.controller('mainController', function($scope) 
    {
    $scope.message = 'This is the future home of the CodeWizard main page';
	});

ngSkeleton.controller('insultController', function($scope) 
    {
    $scope.message = 'Everyone come and see how good I look!';
	});

ngSkeleton.controller('aboutController', function($scope) 
    {
    $scope.message = 'Look! I am an about page.';
	});

ngSkeleton.controller('contactController', function($scope) 
    {
    $scope.message = 'Contact us! JK. This is just a demo.';
	});

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });