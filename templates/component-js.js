module.exports = function (name,nameCamel, component, componentCamel, PATH) {
  return `
  (function () {
    'use strict';
  
    const app = angular.module('${nameCamel}Module');
  
    app.component('${componentCamel}Component', {
      bindings: {
      },
      templateUrl: '${PATH}${name}/components/${component}/${component}.component.html',
      controller: ${componentCamel}ComponentController,
      controllerAs: 'vm'
    });
  
    function ${componentCamel}ComponentController() {
      var vm = this;
      vm.$onInit = function () {
  
      }
    }
    ${componentCamel}ComponentController.$inject = [];
  })()
  `
};