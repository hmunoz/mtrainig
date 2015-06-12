
angular.module('mtraining').controller('NewTurnoController', function ($scope, $location, locationParser, TurnoResource , RegistroSudoracionResource, TipoEntrenamientoResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.turno = $scope.turno || {};
    
    $scope.sudoracionList = RegistroSudoracionResource.queryAll(function(items){
        $scope.sudoracionSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("sudoracionSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.turno.sudoracion = {};
            $scope.turno.sudoracion.id = selection.value;
        }
    });
    
    $scope.tipoList = TipoEntrenamientoResource.queryAll(function(items){
        $scope.tipoSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("tipoSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.turno.tipo = {};
            $scope.turno.tipo.id = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Turnos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        TurnoResource.save($scope.turno, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Turnos");
    };
});