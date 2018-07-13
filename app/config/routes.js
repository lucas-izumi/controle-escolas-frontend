angular.module('CadastroEscolas').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('cadastroEscolas', {
      url: "/cadastroEscolas",
      templateUrl: "cadastroEscolas/tabs.html"
    })

    //Coloca dashboard como a rota padrão
    $urlRouterProvider.otherwise('/dashboard')
  }
])
