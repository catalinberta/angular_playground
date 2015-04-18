	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute','aboutMe']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'templates/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'templates/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'templates/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
	scotchApp.run(function($rootScope) {
		$rootScope.id = 0;
	})

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	var aboutMe = angular.module('aboutMe',[]);

	aboutMe.directive('test',function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<p>Replaced content when view is active: {{hello}}</p>',
			controller: function($scope,$rootScope) {
				$scope.hello = $rootScope.id;
				$rootScope.id++;
			}
		}
	});