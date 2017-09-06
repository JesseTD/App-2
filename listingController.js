angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(code, name, latit, longit, address) {
		var newEntry = {
			"code": code, 
            "name": name, 
            "coordinates": {
                "latitude": latit, 
                "longitude": longit
            }, 
            "address": address
		}
		$scope.listings.push(newEntry);
	};
	
    $scope.deleteListing = function(listing) {
		$scope.listings.splice($scope.listings.indexOf(listing),1);
	};
	
    $scope.showDetails = function(entries) {
		$scope.detailedInfo = entries;
		
	};
  }
]);