module.exports = function (name, nameCamel) {
  return `
  (function () {
    'use strict';
  
    const app = angular.module('${nameCamel}Module');
  
    app.component('${nameCamel}Component', {
      bindings: {},
      templateUrl: '${name}.component.html',
      controller: ${nameCamel}ComponentController,
      controllerAs: 'vm'
    });
  
    function ${nameCamel}ComponentController() {
      var vm = this;
      vm.$onInit = function () {
  
      }
    }
    ${nameCamel}ComponentController.$inject = [];
  })()
  `
};