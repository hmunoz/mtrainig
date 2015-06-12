angular.module('mtraining').factory('TurnoResource', function($resource){
    var resource = $resource('rest/turnos/:TurnoId',{TurnoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});