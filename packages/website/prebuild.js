'use strict';
const fs = require('fs')
const path = require('path')

function readAllComponents() {
  const componentFiles = {};
  const componentDirectory = path.join(process.cwd(), '../system-blocks/components');
  const filenames = fs.readdirSync(componentDirectory);

  filenames.forEach(name => {
    const fileContent = fs.readFileSync(path.join(componentDirectory, name), 'utf8')
    componentFiles[name] = fileContent
  })

  return componentFiles
};


let data = JSON.stringify(readAllComponents(), null, 2);

fs.writeFile('allComponentFiles.json', data, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
