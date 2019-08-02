module.exports = function(name, componentList) {
  if (componentList) {
    let components = '';
    componentList.forEach(component => {
      components += `<${component}-component></${component}-component>
  `;
    });
    return `
<div class="${name}">
  ###${name}.component.html###
  ${components}
</div>
    `
  } else {
    return `
<div class="${name}">
  ###${name}.component.html###
</div>`
  }
};