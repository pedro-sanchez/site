'use strict';

/* Controllers */

angular.module('siteControllers', []);

angular.module('siteControllers').controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
	$scope.banners = null;
	
    $http.get('/site/json/slider.json').success(function(data) {
      $scope.banners = data;
    });
    
    $scope.bannerAtivo = function(banner){
    	if(banner.index == 0){
			return {"active": true};
		}
    	return {"": true};
    };
    
    
  }]);

angular.module('siteControllers').controller('AboutCtrl', ['$scope', '$http',
  function($scope, $http) {
	

  }]);

angular.module('siteControllers').controller('ServiceCtrl', ['$scope', '$http',
  function($scope, $http) {
	

  }]);

angular.module('siteControllers').controller('PortfolioCtrl', ['$scope', '$http',
  function($scope, $http) {
	

  }]);

angular.module('siteControllers').controller('ContactCtrl', ['$scope', '$http',
  function($scope, $http) {
	

  }]);

