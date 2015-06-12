

angular.module('mtraining').controller('EditTurnoController', function($scope, $routeParams, $location, TurnoResource , RegistroSudoracionResource, TipoEntrenamientoResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.turno = new TurnoResource(self.original);
            RegistroSudoracionResource.queryAll(function(items) {
                $scope.sudoracionSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.turno.sudoracion && item.id == $scope.turno.sudoracion.id) {
                        $scope.sudoracionSelection = labelObject;
                        $scope.turno.sudoracion = wrappedObject;
                        self.original.sudoracion = $scope.turno.sudoracion;
                    }
                    return labelObject;
                });
            });
            TipoEntrenamientoResource.queryAll(function(items) {
                $scope.tipoSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.turno.tipo && item.id == $scope.turno.tipo.id) {
                        $scope.tipoSelection = labelObject;
                        $scope.turno.tipo = wrappedObject;
                        self.original.tipo = $scope.turno.tipo;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Turnos");
        };
        TurnoResource.get({TurnoId:$routeParams.TurnoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.turno);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.turno.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Turnos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Turnos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.turno.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("sudoracionSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.turno.sudoracion = {};
            $scope.turno.sudoracion.id = selection.value;
        }
    });
    $scope.$watch("tipoSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.turno.tipo = {};
            $scope.turno.tipo.id = selection.value;
        }
    });
    
    $scope.get();
});