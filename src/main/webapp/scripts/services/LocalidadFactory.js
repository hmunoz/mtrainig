angular.module('mtraining').factory('LocalidadResource', function($resource){
    var resource = $resource('rest/localidads/:LocalidadId',{LocalidadId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});