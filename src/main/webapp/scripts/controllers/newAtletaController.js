
angular.module('mtraining').controller('NewAtletaController', function ($scope, $location, locationParser, AtletaResource , UsuarioResource, SuplementoResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.atleta = $scope.atleta || {};
    
    $scope.usuarioList = UsuarioResource.queryAll(function(items){
        $scope.usuarioSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("usuarioSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.atleta.usuario = {};
            $scope.atleta.usuario.id = selection.value;
        }
    });
    
    $scope.suplementosList = SuplementoResource.queryAll(function(items){
        $scope.suplementosSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("suplementosSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.atleta.suplementos = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.atleta.suplementos.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Atleta/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        AtletaResource.save($scope.atleta, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Atleta");
    };
});