
angular.module('mtraining').controller('NewEntrenamientoController', function ($scope, $location, locationParser, EntrenamientoResource , LocalidadResource, AtletaResource, DiaResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.entrenamiento = $scope.entrenamiento || {};
    
    $scope.localidadList = LocalidadResource.queryAll(function(items){
        $scope.localidadSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("localidadSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.entrenamiento.localidad = {};
            $scope.entrenamiento.localidad.id = selection.value;
        }
    });
    
    $scope.atletasList = AtletaResource.queryAll(function(items){
        $scope.atletasSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("atletasSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.entrenamiento.atletas = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.entrenamiento.atletas.push(collectionItem);
            });
        }
    });
    
    $scope.diasList = DiaResource.queryAll(function(items){
        $scope.diasSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("diasSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.entrenamiento.dias = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.entrenamiento.dias.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Entrenamientos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        EntrenamientoResource.save($scope.entrenamiento, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Entrenamientos");
    };
});