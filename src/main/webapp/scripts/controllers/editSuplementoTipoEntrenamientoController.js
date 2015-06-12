

angular.module('mtraining').controller('EditSuplementoTipoEntrenamientoController', function($scope, $routeParams, $location, SuplementoTipoEntrenamientoResource , SuplementoResource, TipoEntrenamientoResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.suplementoTipoEntrenamiento = new SuplementoTipoEntrenamientoResource(self.original);
            SuplementoResource.queryAll(function(items) {
                $scope.suplementoSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.suplementoTipoEntrenamiento.suplemento && item.id == $scope.suplementoTipoEntrenamiento.suplemento.id) {
                        $scope.suplementoSelection = labelObject;
                        $scope.suplementoTipoEntrenamiento.suplemento = wrappedObject;
                        self.original.suplemento = $scope.suplementoTipoEntrenamiento.suplemento;
                    }
                    return labelObject;
                });
            });
            TipoEntrenamientoResource.queryAll(function(items) {
                $scope.tipoEntrenamientoSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.suplementoTipoEntrenamiento.tipoEntrenamiento && item.id == $scope.suplementoTipoEntrenamiento.tipoEntrenamiento.id) {
                        $scope.tipoEntrenamientoSelection = labelObject;
                        $scope.suplementoTipoEntrenamiento.tipoEntrenamiento = wrappedObject;
                        self.original.tipoEntrenamiento = $scope.suplementoTipoEntrenamiento.tipoEntrenamiento;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/SuplementoTipoEntrenamientos");
        };
        SuplementoTipoEntrenamientoResource.get({SuplementoTipoEntrenamientoId:$routeParams.SuplementoTipoEntrenamientoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.suplementoTipoEntrenamiento);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.suplementoTipoEntrenamiento.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/SuplementoTipoEntrenamientos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/SuplementoTipoEntrenamientos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.suplementoTipoEntrenamiento.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("suplementoSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.suplementoTipoEntrenamiento.suplemento = {};
            $scope.suplementoTipoEntrenamiento.suplemento.id = selection.value;
        }
    });
    $scope.$watch("tipoEntrenamientoSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.suplementoTipoEntrenamiento.tipoEntrenamiento = {};
            $scope.suplementoTipoEntrenamiento.tipoEntrenamiento.id = selection.value;
        }
    });
    
    $scope.get();
});