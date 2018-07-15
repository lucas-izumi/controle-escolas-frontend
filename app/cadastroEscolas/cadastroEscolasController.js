(function() {
  angular.module('CadastroEscolas').controller('CadastroEscolasCtrl', [
    '$http',
    'msgs',
    CadastroEscolasController
  ])

  function CadastroEscolasController($http, msgs) {
    const vm = this

    vm.create = function() {
      const url = 'http://localhost:3003/api/escolas'
      $http.post(url, vm.cadastroEscolas).then(function(response) {
        vm.cadastroEscolas = {}
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }
  }
})()
