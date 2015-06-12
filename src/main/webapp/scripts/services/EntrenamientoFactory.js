angular.module('mtraining').factory('EntrenamientoResource', function($resource){
    var resource = $resource('rest/entrenamientos/:EntrenamientoId',{EntrenamientoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});