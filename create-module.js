const fs = require('fs');
const _ = require('lodash');

const moduleTemplate = require('./templates/moduleJS');
const componentJSTemplate = require('./templates/componentJS');
const componentHTMLTemplate = require('./templates/componentHTML');

const childComponentJSTemplate = require('./templates/child-componentJS');
const childComponentHTMLTemplate = require('./templates/child-componentHTML');

const args = process.argv.slice(2);
const moduleName = args[0];
const moduleNameCamel = _.camelCase(moduleName);

fs.mkdirSync(`./${moduleName}/assets/images`, {recursive: true});
fs.mkdirSync(`./${moduleName}/assets/stylesheets`, {recursive: true});
fs.mkdirSync(`./${moduleName}/components/child-component`, {recursive: true});
fs.mkdirSync(`./${moduleName}/domains`, {recursive: true});
fs.mkdirSync(`./${moduleName}/services`, {recursive: true});
fs.mkdirSync(`./${moduleName}/templates`, {recursive: true});

fs.appendFileSync(`${moduleName}/README.md`, '', function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/${moduleName}.module.js`, moduleTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/${moduleName}.component.html`, componentHTMLTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/${moduleName}.component.js`, componentJSTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/_${moduleName}.component.scss`, '', function (err) { if (err) throw err });

fs.appendFileSync(`${moduleName}/components/child-component/child-component.component.js`, childComponentJSTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/components/child-component/child-component.component.html`, childComponentHTMLTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/components/child-component/_child-component.component.scss`, '', function (err) { if (err) throw err });

fs.appendFileSync(`${moduleName}/domains/_${moduleName}.dto.js`, '', function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/services/_${moduleName}.service.js`, '', function (err) { if (err) throw err });

fs.appendFileSync(`${moduleName}/assets/images/.gitkeep`, '', function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/assets/stylesheets/.gitkeep`, '', function (err) { if (err) throw err });
fs.appendFileSync(`${moduleName}/templates/.gitkeep`, '', function (err) { if (err) throw err });