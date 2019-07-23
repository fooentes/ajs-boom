module.exports = function (name, nameCamel) {
  return `
  (function () {
    'use strict';
  
    const app = angular.module('${nameCamel}Module');
  
    app.service('${nameCamel}Service', ${nameCamel}Service);
  
    function ${nameCamel}Service() {

    }
    ${nameCamel}Service.$inject = [];
  })()
  `
};