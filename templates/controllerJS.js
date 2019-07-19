module.exports = function (name, nameCamel) {
  return `
  angular.module('app').controller('${nameCamel}Controller', function() {});
  `
};