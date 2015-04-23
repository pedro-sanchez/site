'use strict';

/* App Module */

var siteApp = angular.module('siteApp', [ 'ngRoute', 'siteControllers', 'directives', 'ngAnimate' ]);


siteApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl : 'partials/home/index.html',
		controller : 'HomeCtrl'
	})
	.when('/about', {
		templateUrl : 'partials/about/index.html',
		controller : 'AboutCtrl'
	})
	.when('/service', {
		templateUrl : 'partials/service/index.html',
		controller : 'ServiceCtrl'
	})
	.when('/portfolio', {
		templateUrl : 'partials/portfolio/index.html',
		controller : 'PortfolioCtrl'
	})
	.when('/contact', {
		templateUrl : 'partials/contact/index.html',
		controller : 'ContactCtrl'
	})
	.when('/', {
		templateUrl : 'partials/home/index.html',
		controller : 'HomeCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});
} ]);

siteApp.controller('BaseCtrl', ['$scope', '$location', '$rootScope', '$window', '$route', function($scope, $location, $rootScope, $window, $route) {

	$scope.language = currentLanguage();
	$scope.languageStyle = function(lang) {
		if (lang == $scope.language) {
			return {
				"active" : true
			};
		}
		return {
			"" : true
		};
	};

	$scope.languageChange = function(language) {
		$scope.language = language;
		setCookie("language",language);
		loadI18n();
		$window.location.reload();

	};

	$scope.menuStyle = function(link) {
		if($location.path() == link){
			return {
				"active" : true
			};
		}
		else if(link == "/home" && $location.path() == '/'){
			return {
				"active" : true
			};
		}
		return {
			"" : true
		};
	}

}]);
