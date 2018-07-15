(function() {
  angular.module('CadastroEscolas').component('field', {
    bindings: {
      id: '@',
      label: '@',
      grid: '@',
      placeholder: '@',
      model: '=', //faz o binding entre o componente e o controller
    },
    controller: [
      'gridSystem',
      function(gridSystem) {
        this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template: `
    <div class="{{ $ctrl.gridClasses }}">
      <div class="form-group">
        <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
        <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" ng-model="$ctrl.model">
      </div>
    </div>
    `
  })
})()
