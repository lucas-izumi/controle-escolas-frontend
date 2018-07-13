angular.module('CadastroEscolas').component('contentHeader', {
  bindings: {
    titulo: '@'
  },
  template: `
  <section class="content-header">
    <h1>{{ $ctrl.titulo }}</h1>
  </section>
  `
})
