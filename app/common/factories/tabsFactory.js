(function() {
  angular.module('CadastroEscolas').factory('tabs', [ TabsFactory ])

  function TabsFactory() {
    function show(owner, {
      tabList = false,
      tabCreate = false,
      tabUpdate = false,
      tabDelete = false,
      tabListaTurmas = false,
      tabListaAlunos = false
    }) {
      owner.tabList = tabList
      owner.tabCreate = tabCreate
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
      owner.tabListaTurmas = tabListaTurmas
      owner.tabListaAlunos = tabListaAlunos
    }

    return { show }
  }
})()
