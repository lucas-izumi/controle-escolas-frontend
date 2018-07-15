(function() {
  angular.module('CadastroEscolas').controller('CadastroEscolasCtrl', [
    '$http',
    'msgs',
    CadastroEscolasController
  ])

  function CadastroEscolasController($http, msgs) {
    const vm = this
    const url = 'http://localhost:3003/api/escolas'

    vm.refresh = function() {
      $http.get(url).then(function(response) {
        vm.cadastroEscolas = {}
        vm.escola = response.data
      })
    }

    vm.create = function() {
      $http.post(url, vm.cadastroEscolas).then(function(response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.refresh()
  }
})()
