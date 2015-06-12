
angular.module('mtraining').controller('NewDiaController', function ($scope, $location, locationParser, DiaResource , TurnoResource, TurnoResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.dia = $scope.dia || {};
    
    $scope.turnoMananaList = TurnoResource.queryAll(function(items){
        $scope.turnoMananaSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("turnoMananaSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.dia.turnoManana = {};
            $scope.dia.turnoManana.id = selection.value;
        }
    });
    
    $scope.turnoTardeList = TurnoResource.queryAll(function(items){
        $scope.turnoTardeSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("turnoTardeSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.dia.turnoTarde = {};
            $scope.dia.turnoTarde.id = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Dia/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        DiaResource.save($scope.dia, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Dia");
    };
});