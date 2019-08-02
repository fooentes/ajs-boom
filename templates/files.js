module.exports = function (moduleName, moduleNameCamel, componentList, PATH) {
let componentLines = '';
  componentList.forEach(component => {
    componentLines += `
**COMPONENT => ${component}**
${PATH}${moduleName}/components/${component}/${component}.component.js
${PATH}${moduleName}/components/${component}/${component}.component.html
${PATH}${moduleName}/components/${component}/_${component}.component.scss
`
  })

  return `
**MODULE**
${PATH}${moduleName}/${moduleName}.module.js
${PATH}${moduleName}/${moduleName}.component.js
${PATH}${moduleName}/${moduleName}.component.html
${PATH}${moduleName}/${moduleName}.component.scss
${PATH}${moduleName}/services/${moduleName}.service.js

${componentLines}
  `
};