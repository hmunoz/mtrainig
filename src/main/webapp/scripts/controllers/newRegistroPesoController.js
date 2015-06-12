
angular.module('mtraining').controller('NewRegistroPesoController', function ($scope, $location, locationParser, RegistroPesoResource , AtletaResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.registroPeso = $scope.registroPeso || {};
    
    $scope.atletaList = AtletaResource.queryAll(function(items){
        $scope.atletaSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("atletaSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.registroPeso.atleta = {};
            $scope.registroPeso.atleta.id = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/RegistroPesos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        RegistroPesoResource.save($scope.registroPeso, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/RegistroPesos");
    };
});