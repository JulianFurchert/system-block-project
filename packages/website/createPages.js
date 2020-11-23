'use strict';
const fs = require('fs')
const path = require('path')

function pageTemplate({ sourceCode }){
  return `import { Text, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';

const sourceCode = ${sourceCode}

const Page:React.FC = () => {
  return(
    <SidebarLayout menu={componentsNav}>
      <Text weight="heading" as="h1" size='8'>
        Avatar
      </Text>
      <ComponentBox title="Avatar" sourceCode={sourceCode}>
        <button className="test">Test</button>
      </ComponentBox>
    </SidebarLayout>
  )
}

export default Page
`
}

function readAllComponents() {
  const componentDirectory = path.join(process.cwd(), '../system-blocks/components');
  const filenames = fs.readdirSync(componentDirectory);

  filenames.forEach(name => {
    const componentPath =path.join(componentDirectory, name)
    let sourceCode = fs.readFileSync(componentPath, 'utf8')
    sourceCode = JSON.stringify(sourceCode, null, 2);

    fs.writeFile(`pages/components/${name}`, pageTemplate({ sourceCode }), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  })
};


readAllComponents()