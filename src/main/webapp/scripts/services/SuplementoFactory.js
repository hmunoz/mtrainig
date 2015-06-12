angular.module('mtraining').factory('SuplementoResource', function($resource){
    var resource = $resource('rest/suplementos/:SuplementoId',{SuplementoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});