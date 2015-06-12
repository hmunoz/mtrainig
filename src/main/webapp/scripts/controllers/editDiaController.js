

angular.module('mtraining').controller('EditDiaController', function($scope, $routeParams, $location, DiaResource , TurnoResource, TurnoResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.dia = new DiaResource(self.original);
            TurnoResource.queryAll(function(items) {
                $scope.turnoMananaSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.dia.turnoManana && item.id == $scope.dia.turnoManana.id) {
                        $scope.turnoMananaSelection = labelObject;
                        $scope.dia.turnoManana = wrappedObject;
                        self.original.turnoManana = $scope.dia.turnoManana;
                    }
                    return labelObject;
                });
            });
            TurnoResource.queryAll(function(items) {
                $scope.turnoTardeSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.dia.turnoTarde && item.id == $scope.dia.turnoTarde.id) {
                        $scope.turnoTardeSelection = labelObject;
                        $scope.dia.turnoTarde = wrappedObject;
                        self.original.turnoTarde = $scope.dia.turnoTarde;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Dia");
        };
        DiaResource.get({DiaId:$routeParams.DiaId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.dia);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.dia.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Dia");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Dia");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.dia.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("turnoMananaSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.dia.turnoManana = {};
            $scope.dia.turnoManana.id = selection.value;
        }
    });
    $scope.$watch("turnoTardeSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.dia.turnoTarde = {};
            $scope.dia.turnoTarde.id = selection.value;
        }
    });
    
    $scope.get();
});