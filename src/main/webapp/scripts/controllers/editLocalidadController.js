

angular.module('mtraining').controller('EditLocalidadController', function($scope, $routeParams, $location, LocalidadResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.localidad = new LocalidadResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Localidads");
        };
        LocalidadResource.get({LocalidadId:$routeParams.LocalidadId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.localidad);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.localidad.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Localidads");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Localidads");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.localidad.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});