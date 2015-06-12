

angular.module('mtraining').controller('EditSuplementoController', function($scope, $routeParams, $location, SuplementoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.suplemento = new SuplementoResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Suplementos");
        };
        SuplementoResource.get({SuplementoId:$routeParams.SuplementoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.suplemento);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.suplemento.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Suplementos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Suplementos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.suplemento.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});