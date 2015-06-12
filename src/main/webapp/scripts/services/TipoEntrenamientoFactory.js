angular.module('mtraining').factory('TipoEntrenamientoResource', function($resource){
    var resource = $resource('rest/tipoentrenamientos/:TipoEntrenamientoId',{TipoEntrenamientoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});