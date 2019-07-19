module.exports = function (name, nameCamel) {
  return `
  <main class="${name}">
    <${name}-component></${name}-component>
  </main>
  `
};