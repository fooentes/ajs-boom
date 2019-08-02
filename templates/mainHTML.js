module.exports = function (name) {
  return `
  <main class="${name}">
    <${name}-component></${name}-component>
  </main>
  `
};