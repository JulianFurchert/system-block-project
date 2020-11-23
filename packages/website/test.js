const fs = require('fs')
const path = require('path')
const docgen = require('react-docgen-typescript')
const { inspect } = require('util');

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

const skipPropNamesList = ['ref', 'as', 'css', 'itemRef']
const skipPropParentNameList = ['HTMLAttributes', 'Attributes', 'DOMAttributes', 'AriaAttributes']

const postsDirectory = path.join(process.cwd(), 'components')
const componentsPropsPath = path.join(postsDirectory, 'Column.tsx')

const componentsProps = docgen.parse(componentsPropsPath, options);

console.log(inspect(componentsProps))