(function() {
  angular.module('CadastroEscolas').controller('CadastroEscolasCtrl', [
    '$http',
    CadastroEscolasController
  ])

  function CadastroEscolasController($http) {
    const vm = this

    vm.create = function() {
      const url = 'http://localhost:3003/api/escolas'
      $http.post(url, vm.cadastroEscolas).then(function(response) {
        vm.cadastroEscolas = {}
        console.log('Adicionado com sucesso!')
      }, function(error) {
        console.log('Registro não inserido!')
      })
    }
  }
})()
