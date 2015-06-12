'use strict';

angular.module('mtraining',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Atleta',{templateUrl:'views/Atleta/search.html',controller:'SearchAtletaController'})
      .when('/Atleta/new',{templateUrl:'views/Atleta/detail.html',controller:'NewAtletaController'})
      .when('/Atleta/edit/:AtletaId',{templateUrl:'views/Atleta/detail.html',controller:'EditAtletaController'})
      .when('/Dia',{templateUrl:'views/Dia/search.html',controller:'SearchDiaController'})
      .when('/Dia/new',{templateUrl:'views/Dia/detail.html',controller:'NewDiaController'})
      .when('/Dia/edit/:DiaId',{templateUrl:'views/Dia/detail.html',controller:'EditDiaController'})
      .when('/Entrenamientos',{templateUrl:'views/Entrenamiento/search.html',controller:'SearchEntrenamientoController'})
      .when('/Entrenamientos/new',{templateUrl:'views/Entrenamiento/detail.html',controller:'NewEntrenamientoController'})
      .when('/Entrenamientos/edit/:EntrenamientoId',{templateUrl:'views/Entrenamiento/detail.html',controller:'EditEntrenamientoController'})
      .when('/Localidads',{templateUrl:'views/Localidad/search.html',controller:'SearchLocalidadController'})
      .when('/Localidads/new',{templateUrl:'views/Localidad/detail.html',controller:'NewLocalidadController'})
      .when('/Localidads/edit/:LocalidadId',{templateUrl:'views/Localidad/detail.html',controller:'EditLocalidadController'})
      .when('/RegistroPesos',{templateUrl:'views/RegistroPeso/search.html',controller:'SearchRegistroPesoController'})
      .when('/RegistroPesos/new',{templateUrl:'views/RegistroPeso/detail.html',controller:'NewRegistroPesoController'})
      .when('/RegistroPesos/edit/:RegistroPesoId',{templateUrl:'views/RegistroPeso/detail.html',controller:'EditRegistroPesoController'})
      .when('/RegistroSudoracions',{templateUrl:'views/RegistroSudoracion/search.html',controller:'SearchRegistroSudoracionController'})
      .when('/RegistroSudoracions/new',{templateUrl:'views/RegistroSudoracion/detail.html',controller:'NewRegistroSudoracionController'})
      .when('/RegistroSudoracions/edit/:RegistroSudoracionId',{templateUrl:'views/RegistroSudoracion/detail.html',controller:'EditRegistroSudoracionController'})
      .when('/Suplementos',{templateUrl:'views/Suplemento/search.html',controller:'SearchSuplementoController'})
      .when('/Suplementos/new',{templateUrl:'views/Suplemento/detail.html',controller:'NewSuplementoController'})
      .when('/Suplementos/edit/:SuplementoId',{templateUrl:'views/Suplemento/detail.html',controller:'EditSuplementoController'})
      .when('/SuplementoTipoEntrenamientos',{templateUrl:'views/SuplementoTipoEntrenamiento/search.html',controller:'SearchSuplementoTipoEntrenamientoController'})
      .when('/SuplementoTipoEntrenamientos/new',{templateUrl:'views/SuplementoTipoEntrenamiento/detail.html',controller:'NewSuplementoTipoEntrenamientoController'})
      .when('/SuplementoTipoEntrenamientos/edit/:SuplementoTipoEntrenamientoId',{templateUrl:'views/SuplementoTipoEntrenamiento/detail.html',controller:'EditSuplementoTipoEntrenamientoController'})
      .when('/TipoEntrenamientos',{templateUrl:'views/TipoEntrenamiento/search.html',controller:'SearchTipoEntrenamientoController'})
      .when('/TipoEntrenamientos/new',{templateUrl:'views/TipoEntrenamiento/detail.html',controller:'NewTipoEntrenamientoController'})
      .when('/TipoEntrenamientos/edit/:TipoEntrenamientoId',{templateUrl:'views/TipoEntrenamiento/detail.html',controller:'EditTipoEntrenamientoController'})
      .when('/Turnos',{templateUrl:'views/Turno/search.html',controller:'SearchTurnoController'})
      .when('/Turnos/new',{templateUrl:'views/Turno/detail.html',controller:'NewTurnoController'})
      .when('/Turnos/edit/:TurnoId',{templateUrl:'views/Turno/detail.html',controller:'EditTurnoController'})
      .when('/Usuarios',{templateUrl:'views/Usuario/search.html',controller:'SearchUsuarioController'})
      .when('/Usuarios/new',{templateUrl:'views/Usuario/detail.html',controller:'NewUsuarioController'})
      .when('/Usuarios/edit/:UsuarioId',{templateUrl:'views/Usuario/detail.html',controller:'EditUsuarioController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
