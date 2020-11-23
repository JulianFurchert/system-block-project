'use strict';
const fs = require('fs')
const path = require('path')

function readAllComponents() {
  const componentFiles = {};
  const componentDirectory = path.join(process.cwd(), '../system-blocks/components');
  const filenames = fs.readdirSync(componentDirectory);

  filenames.forEach(name => {
    const componentPath =path.join(componentDirectory, name)
    const source = fs.readFileSync(componentPath, 'utf8')
    componentFiles[name] = source
  })

  return componentFiles
};


let data = JSON.stringify(readAllComponents(), null, 2);

fs.writeFile('data/componentSources.json', data, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
