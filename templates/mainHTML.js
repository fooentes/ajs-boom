module.exports = function (moduleName, moduleNameCamel, componentList) {
  console.log(componentList)
  let componentScriptLines = '';
  componentList.forEach(component => {
    componentScriptLines += `
  <script src="components/${component}/${component}.component.js"></script>`
  })

  return `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>AngularJS Module</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.js"></script>
  <script src="${moduleName}.module.js"></script>
  <script src="${moduleName}.component.js"></script>
  ${componentScriptLines}
</head>
<body ng-app="${moduleName}">
  <main class="${moduleName}">
    <${moduleName}-component></${moduleName}-component>
  </main>
</body>
</html>
  `
};