
angular.module('mtraining').controller('NewLocalidadController', function ($scope, $location, locationParser, LocalidadResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.localidad = $scope.localidad || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Localidads/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        LocalidadResource.save($scope.localidad, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Localidads");
    };
});