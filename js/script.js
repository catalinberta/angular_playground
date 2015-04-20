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

	scotchApp.controller('aboutController', function($scope,$rootScope) {
		$scope.message = 'Look! I am an about page.';



		$scope.doStuff = function() {
			$scope.$broadcast('msg','Broadcasted message');
			$rootScope.id = $rootScope.id + 1;
		}
	});
	scotchApp.run(function($rootScope) {
		$rootScope.id = 0;
	})

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller('controller1',function($scope,$rootScope) {
		$scope.$on('msg', function(e,arg) {
			$scope.msg = arg;
			$scope.$emit('msg2','Emited message')
		});
	})

	scotchApp.controller('controller2',function($scope,$rootScope) {
		$rootScope.$on('msg2', function(e,arg) {
			$scope.msg = arg;
		});
	})

	scotchApp.controller('controller3',function($scope,$rootScope) {
		$scope.msg = "dey";
		$rootScope.$watch('id',function(n,o) {
			$scope.msg = "Watched value changed to: "+ n;
		})
	})

	var aboutMe = angular.module('aboutMe',[]);