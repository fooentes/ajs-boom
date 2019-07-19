module.exports = function (name, nameCamel) {
  return `
  (function () {
    'use strict';
  
    const app = angular.module('${nameCamel}Module');
  
    app.component('childComponent', {
      bindings: {
        nome: '<'
      },
      templateUrl: '/components/child-component/child-component.component.html',
      controller: childComponentController,
      controllerAs: 'vm'
    });
  
    function childComponentController() {
      var vm = this;
      vm.$onInit = function () {
  
      }
    }
    childComponentController.$inject = [];
  })()
  `
};