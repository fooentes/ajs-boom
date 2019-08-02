'use strict';

const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');
const argv = require('yargs').argv;

const moduleTemplate = require('./templates/module-js');
const moduleComponentJSTemplate = require('./templates/module-component-js');
const moduleComponentHTMLTemplate = require('./templates/module-component-html');
const moduleComponentSASSTemplate = require('./templates/module-component-sass');

const moduleServiceTemplate = require('./templates/module-service-js');
const moduleMainHTMLTemplate = require('./templates/mainHTML');
const moduleControllerTemplate = require('./templates/controllerJS');

const componentJSTemplate = require('./templates/component-js');
const componentHTMLTemplate = require('./templates/component-html');

const log = require('./templates/files');


const moduleName = argv.name;
const moduleNameCamel = _.camelCase(moduleName);
let componentList = argv.components;
const PATH = argv.path ? argv.path : '';

if (componentList) {
  componentList = componentList.split(',');
  criarComponentes();
}

criarModulo();




function criarModulo() {
  fs.mkdirSync(`./${moduleName}/assets/images`, {recursive: true});
  fs.mkdirSync(`./${moduleName}/assets/stylesheets`, {recursive: true});
  fs.mkdirSync(`./${moduleName}/components`, {recursive: true});
  fs.mkdirSync(`./${moduleName}/modules`, {recursive: true});
  fs.mkdirSync(`./${moduleName}/services`, {recursive: true});

  //fs.appendFileSync(`${moduleName}/README.md`, '', function (err) { if (err) throw err });
  //fs.appendFileSync(`${moduleName}/${moduleNameCamel}.controller.js`, moduleControllerTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
  //fs.appendFileSync(`${moduleName}/${moduleName}.html`, moduleMainHTMLTemplate(moduleName), function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/${moduleName}.module.js`, moduleTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/${moduleName}.component.html`, moduleComponentHTMLTemplate(moduleName, componentList), function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/${moduleName}.component.js`, moduleComponentJSTemplate(moduleName, moduleNameCamel, PATH), function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/${moduleName}.component.scss`, moduleComponentSASSTemplate(componentList), function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/services/${moduleName}.service.js`, moduleServiceTemplate(moduleName, moduleNameCamel), function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/assets/images/.gitkeep`, '', function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/assets/stylesheets/.gitkeep`, '', function (err) { if (err) throw err });
  fs.appendFileSync(`${moduleName}/_files.txt`, log(moduleName, moduleNameCamel, componentList, PATH), function (err) { if (err) throw err });
}

function criarComponentes() {
  componentList.forEach(component => {
    let componentCamel = _.camelCase(component);
    fs.mkdirSync(`./${moduleName}/components/${component}`, {recursive: true});
    fs.appendFileSync(`${moduleName}/components/${component}/_${component}.component.scss`, '', function (err) { if (err) throw err });
    fs.appendFileSync(`${moduleName}/components/${component}/${component}.component.html`, componentHTMLTemplate(component), function (err) { if (err) throw err });
    fs.appendFileSync(`${moduleName}/components/${component}/${component}.component.js`, componentJSTemplate(moduleName, moduleNameCamel, component, componentCamel, PATH), function (err) { if (err) throw err });
  });
}

console.log(chalk.black.bgCyan('Success:') + chalk.cyan.bgBlack(' ' + moduleNameCamel + 'Module successfully created at /' + moduleName + '/'));