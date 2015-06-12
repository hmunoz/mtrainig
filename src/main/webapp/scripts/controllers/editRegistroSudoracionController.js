

angular.module('mtraining').controller('EditRegistroSudoracionController', function($scope, $routeParams, $location, RegistroSudoracionResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.registroSudoracion = new RegistroSudoracionResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/RegistroSudoracions");
        };
        RegistroSudoracionResource.get({RegistroSudoracionId:$routeParams.RegistroSudoracionId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.registroSudoracion);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.registroSudoracion.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/RegistroSudoracions");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/RegistroSudoracions");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.registroSudoracion.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});