module.exports = function (name, nameCamel, PATH) {
  return `
  (function () {
    'use strict';
  
    const app = angular.module('${nameCamel}Module');
  
    app.component('${nameCamel}Component', {
      bindings: {},
      templateUrl: '${PATH}${name}/${name}.component.html',
      controller: ${nameCamel}ComponentController,
      controllerAs: 'vm'
    });
  
    function ${nameCamel}ComponentController() {
      var vm = this;
      vm.$onInit = function () {}; // When the bind parameters are ready e component start render.
      vm.$onChange = function () {}; // When the bindings attributes are updated.
      vm.$doCheck = function () {}; // Used to check whether or not the component is rendered and onChanges is called.
      vm.$onDestroy = function () {}; // On component destroyed.
      vm.$postLink = function () {}; // When the component finishes rendering.
    }
    ${nameCamel}ComponentController.$inject = [];
  })()
  `
};