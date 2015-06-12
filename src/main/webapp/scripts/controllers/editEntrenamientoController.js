

angular.module('mtraining').controller('EditEntrenamientoController', function($scope, $routeParams, $location, EntrenamientoResource , LocalidadResource, AtletaResource, DiaResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.entrenamiento = new EntrenamientoResource(self.original);
            LocalidadResource.queryAll(function(items) {
                $scope.localidadSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.entrenamiento.localidad && item.id == $scope.entrenamiento.localidad.id) {
                        $scope.localidadSelection = labelObject;
                        $scope.entrenamiento.localidad = wrappedObject;
                        self.original.localidad = $scope.entrenamiento.localidad;
                    }
                    return labelObject;
                });
            });
            AtletaResource.queryAll(function(items) {
                $scope.atletasSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.entrenamiento.atletas){
                        $.each($scope.entrenamiento.atletas, function(idx, element) {
                            if(item.id == element.id) {
                                $scope.atletasSelection.push(labelObject);
                                $scope.entrenamiento.atletas.push(wrappedObject);
                            }
                        });
                        self.original.atletas = $scope.entrenamiento.atletas;
                    }
                    return labelObject;
                });
            });
            DiaResource.queryAll(function(items) {
                $scope.diasSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.entrenamiento.dias){
                        $.each($scope.entrenamiento.dias, function(idx, element) {
                            if(item.id == element.id) {
                                $scope.diasSelection.push(labelObject);
                                $scope.entrenamiento.dias.push(wrappedObject);
                            }
                        });
                        self.original.dias = $scope.entrenamiento.dias;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Entrenamientos");
        };
        EntrenamientoResource.get({EntrenamientoId:$routeParams.EntrenamientoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.entrenamiento);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.entrenamiento.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Entrenamientos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Entrenamientos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.entrenamiento.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("localidadSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.entrenamiento.localidad = {};
            $scope.entrenamiento.localidad.id = selection.value;
        }
    });
    $scope.atletasSelection = $scope.atletasSelection || [];
    $scope.$watch("atletasSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.entrenamiento) {
            $scope.entrenamiento.atletas = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.entrenamiento.atletas.push(collectionItem);
            });
        }
    });
    $scope.diasSelection = $scope.diasSelection || [];
    $scope.$watch("diasSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.entrenamiento) {
            $scope.entrenamiento.dias = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.entrenamiento.dias.push(collectionItem);
            });
        }
    });
    
    $scope.get();
});