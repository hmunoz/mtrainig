angular.module('mtraining').factory('RegistroPesoResource', function($resource){
    var resource = $resource('rest/registropesos/:RegistroPesoId',{RegistroPesoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});