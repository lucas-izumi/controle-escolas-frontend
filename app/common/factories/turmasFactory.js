(function() {
  angular.module('CadastroEscolas').factory('turmas', [ TurmasFactory ])

  function TurmasFactory() {
    function display(owner, {
      qntTurmas = false
    }) {
      owner.qntTurmas = qntTurmas
    }

    return { display }
  }
})()
