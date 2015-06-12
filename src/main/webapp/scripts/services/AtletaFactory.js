angular.module('mtraining').factory('AtletaResource', function($resource){
    var resource = $resource('rest/atleta/:AtletaId',{AtletaId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});