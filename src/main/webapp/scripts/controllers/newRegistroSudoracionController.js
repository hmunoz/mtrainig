
angular.module('mtraining').controller('NewRegistroSudoracionController', function ($scope, $location, locationParser, RegistroSudoracionResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.registroSudoracion = $scope.registroSudoracion || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/RegistroSudoracions/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        RegistroSudoracionResource.save($scope.registroSudoracion, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/RegistroSudoracions");
    };
});