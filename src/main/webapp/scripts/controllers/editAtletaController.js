

angular.module('mtraining').controller('EditAtletaController', function($scope, $routeParams, $location, AtletaResource , UsuarioResource, SuplementoResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.atleta = new AtletaResource(self.original);
            UsuarioResource.queryAll(function(items) {
                $scope.usuarioSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.atleta.usuario && item.id == $scope.atleta.usuario.id) {
                        $scope.usuarioSelection = labelObject;
                        $scope.atleta.usuario = wrappedObject;
                        self.original.usuario = $scope.atleta.usuario;
                    }
                    return labelObject;
                });
            });
            SuplementoResource.queryAll(function(items) {
                $scope.suplementosSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.atleta.suplementos){
                        $.each($scope.atleta.suplementos, function(idx, element) {
                            if(item.id == element.id) {
                                $scope.suplementosSelection.push(labelObject);
                                $scope.atleta.suplementos.push(wrappedObject);
                            }
                        });
                        self.original.suplementos = $scope.atleta.suplementos;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Atleta");
        };
        AtletaResource.get({AtletaId:$routeParams.AtletaId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.atleta);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.atleta.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Atleta");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Atleta");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.atleta.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("usuarioSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.atleta.usuario = {};
            $scope.atleta.usuario.id = selection.value;
        }
    });
    $scope.suplementosSelection = $scope.suplementosSelection || [];
    $scope.$watch("suplementosSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.atleta) {
            $scope.atleta.suplementos = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.id = selectedItem.value;
                $scope.atleta.suplementos.push(collectionItem);
            });
        }
    });
    
    $scope.get();
});