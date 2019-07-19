module.exports = function (name, nameCamel) {
  return `
  <div class="${name}">
    ###${name}.component.html###<br/>
    <child-component></child-component>
  </div>
  `
};