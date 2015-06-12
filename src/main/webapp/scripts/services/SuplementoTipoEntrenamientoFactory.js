angular.module('mtraining').factory('SuplementoTipoEntrenamientoResource', function($resource){
    var resource = $resource('rest/suplementotipoentrenamientos/:SuplementoTipoEntrenamientoId',{SuplementoTipoEntrenamientoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});