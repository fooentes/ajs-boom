module.exports = function(componentList) {
  if (componentList) {
    let imports = '';
    componentList.forEach(component => {
      imports += `@import 'components/${component}/${component}.component';
`;
    });
    return imports;
  } else {
    return '';
  }
};