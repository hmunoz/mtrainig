
angular.module('mtraining').controller('NewSuplementoController', function ($scope, $location, locationParser, SuplementoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.suplemento = $scope.suplemento || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Suplementos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        SuplementoResource.save($scope.suplemento, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Suplementos");
    };
});