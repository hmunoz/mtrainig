angular.module('mtraining').factory('DiaResource', function($resource){
    var resource = $resource('rest/dia/:DiaId',{DiaId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});