

angular.module('mtraining').controller('EditRegistroPesoController', function($scope, $routeParams, $location, RegistroPesoResource , AtletaResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.registroPeso = new RegistroPesoResource(self.original);
            AtletaResource.queryAll(function(items) {
                $scope.atletaSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.registroPeso.atleta && item.id == $scope.registroPeso.atleta.id) {
                        $scope.atletaSelection = labelObject;
                        $scope.registroPeso.atleta = wrappedObject;
                        self.original.atleta = $scope.registroPeso.atleta;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/RegistroPesos");
        };
        RegistroPesoResource.get({RegistroPesoId:$routeParams.RegistroPesoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.registroPeso);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.registroPeso.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/RegistroPesos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/RegistroPesos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.registroPeso.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("atletaSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.registroPeso.atleta = {};
            $scope.registroPeso.atleta.id = selection.value;
        }
    });
    
    $scope.get();
});