module.exports = function (name, nameCamel) {
  return `
  (function () {
    'use strict';
  
    const app = angular.module('${nameCamel}Module', []);
  })();
  `
};