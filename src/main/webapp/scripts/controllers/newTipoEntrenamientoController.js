
angular.module('mtraining').controller('NewTipoEntrenamientoController', function ($scope, $location, locationParser, TipoEntrenamientoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.tipoEntrenamiento = $scope.tipoEntrenamiento || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/TipoEntrenamientos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        TipoEntrenamientoResource.save($scope.tipoEntrenamiento, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/TipoEntrenamientos");
    };
});