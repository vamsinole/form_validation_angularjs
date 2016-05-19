var validationApp = angular.module('validationApp',[]);

validationApp.controller('mainController',function($scope){
	$scope.submitForm = function(isValid){
		if (isValid) {
      document.getElementById('result').innerHTML = "Your Form is Amazing";
    }
	}
})