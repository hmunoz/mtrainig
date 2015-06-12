
angular.module('mtraining').controller('NewSuplementoTipoEntrenamientoController', function ($scope, $location, locationParser, SuplementoTipoEntrenamientoResource , SuplementoResource, TipoEntrenamientoResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.suplementoTipoEntrenamiento = $scope.suplementoTipoEntrenamiento || {};
    
    $scope.suplementoList = SuplementoResource.queryAll(function(items){
        $scope.suplementoSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("suplementoSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.suplementoTipoEntrenamiento.suplemento = {};
            $scope.suplementoTipoEntrenamiento.suplemento.id = selection.value;
        }
    });
    
    $scope.tipoEntrenamientoList = TipoEntrenamientoResource.queryAll(function(items){
        $scope.tipoEntrenamientoSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("tipoEntrenamientoSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.suplementoTipoEntrenamiento.tipoEntrenamiento = {};
            $scope.suplementoTipoEntrenamiento.tipoEntrenamiento.id = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/SuplementoTipoEntrenamientos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        SuplementoTipoEntrenamientoResource.save($scope.suplementoTipoEntrenamiento, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/SuplementoTipoEntrenamientos");
    };
});