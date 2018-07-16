(function() {
  angular.module('CadastroEscolas').controller('TurmasCtrl', [
    '$http',
    'turmas',
    'tabs',
    TurmasController
  ])

  function TurmasController($http, turmas, tabs) {
    const vm = this
    const url = 'http://localhost:3003/api/escolas'

    vm.refresh = function() {
      $http.get(url).then(function(response) {
        vm.cadastroEscolas = {}
        vm.escola = response.data
        tabs.show(vm, {tabList: true})
        turmas.display(vm, {qntTurmas: false})
        vm.count = 0
      })
    }

    //pega o registro atual
    vm.showTurmas = function(cadastroEscolas) {
      if(cadastroEscolas == "")
        vm.refresh()
      else {
        vm.cadastroEscolas = JSON.parse(cadastroEscolas)

        function length(obj) {
            return Object.keys(obj).length;
        }
        vm.NumeroTurmas = length(vm.cadastroEscolas.turmas)
        turmas.display(vm, {qntTurmas: true})
        tabs.show(vm, {tabList: true})
      }
    }

    //pega o registro atual
    vm.showTabUpdate = function(cadastroEscolas) {
      console.log(cadastroEscolas)
      vm.cadastroEscolas = cadastroEscolas
      tabs.show(vm, {tabUpdate: true})
    }

    vm.showTabDelete = function(cadastroEscolas) {
      console.log(cadastroEscolas)
      vm.cadastroEscolas = cadastroEscolas
      tabs.show(vm, {tabDelete: true})
    }

    vm.showTabCreate = function(cadastroEscolas) {
      console.log(cadastroEscolas)
      vm.cadastroEscolas = cadastroEscolas
      tabs.show(vm, {tabCreate: true})
    }

    vm.showTabListaTurmas = function(cadastroEscolas, count) {
      console.log(cadastroEscolas)
      vm.cadastroEscolas = cadastroEscolas
      tabs.show(vm, {tabListaTurmas: true})
      vm.count = count
    }

    vm.create = function() {
      const updateUrl = `${url}/${vm.cadastroEscolas._id}`
      $http.put(updateUrl, vm.cadastroEscolas).then(function(response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.update = function() {
      const updateUrl = `${url}/${vm.cadastroEscolas._id}`
      $http.put(updateUrl, vm.cadastroEscolas).then(function(response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.delete = function () {
      const deleteUrl = `${url}/${vm.cadastroEscolas._id}`
      $http.put(deleteUrl, vm.cadastroEscolas).then(function(response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.refresh()
  }
})()
