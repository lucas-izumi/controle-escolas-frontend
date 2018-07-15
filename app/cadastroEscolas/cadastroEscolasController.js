(function() {
  angular.module('CadastroEscolas').controller('CadastroEscolasCtrl', [
    '$http',
    'msgs',
    'tabs',
    CadastroEscolasController
  ])

  function CadastroEscolasController($http, msgs, tabs) {
    const vm = this
    const url = 'http://localhost:3003/api/escolas'

    vm.refresh = function() {
      $http.get(url).then(function(response) {
        vm.cadastroEscolas = {}
        vm.escola = response.data
        tabs.show(vm, {tabList: true, tabCreate: true})
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

    //pega o registro atual
    vm.showTabUpdate = function(cadastroEscolas) {
      vm.cadastroEscolas = cadastroEscolas
      tabs.show(vm, {tabUpdate: true})
    }

    vm.showTabDelete = function(cadastroEscolas) {
      vm.cadastroEscolas = cadastroEscolas
      tabs.show(vm, {tabDelete: true})
    }

    vm.refresh()
  }
})()
