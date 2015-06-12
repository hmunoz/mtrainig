

angular.module('mtraining').controller('EditTipoEntrenamientoController', function($scope, $routeParams, $location, TipoEntrenamientoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.tipoEntrenamiento = new TipoEntrenamientoResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/TipoEntrenamientos");
        };
        TipoEntrenamientoResource.get({TipoEntrenamientoId:$routeParams.TipoEntrenamientoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.tipoEntrenamiento);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.tipoEntrenamiento.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/TipoEntrenamientos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/TipoEntrenamientos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.tipoEntrenamiento.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});