angular.module('mtraining').factory('RegistroSudoracionResource', function($resource){
    var resource = $resource('rest/registrosudoracions/:RegistroSudoracionId',{RegistroSudoracionId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});