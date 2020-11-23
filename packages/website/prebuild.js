'use strict';
const fs = require('fs')
const path = require('path')
const docgen = require('react-docgen-typescript')

const skipPropNamesList = ['ref', 'as', 'css', 'itemRef']
const skipPropParentNameList = ['HTMLAttributes', 'ButtonHTMLAttributes', 'Attributes', 'DOMAttributes', 'AriaAttributes']

const options = {
  savePropValueAsString: true,
  propFilter: props => {
    if(props.parent && skipPropParentNameList.includes(props.parent.name)){
      return false
    }
    else if(props.name && skipPropNamesList.includes(props.name)){
      return false
    }
    else{
      return true
    }
  },
};

function readAllComponents() {
  const componentFiles = {};
  const componentDirectory = path.join(process.cwd(), '../system-blocks/components');
  const filenames = fs.readdirSync(componentDirectory);

  filenames.forEach(name => {
    const componentPath =path.join(componentDirectory, name)
    const fileContent = fs.readFileSync(componentPath, 'utf8')
    const componentsProps = docgen.parse(componentPath, options);
    componentFiles[name] = {fileContent, componentsProps}
  })

  return componentFiles
};


let data = JSON.stringify(readAllComponents(), null, 2);

fs.writeFile('allComponentFiles.json', data, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
