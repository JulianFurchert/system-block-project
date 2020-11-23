import { Text, Separator, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';
import componentsFiles from '../../components.json';

const Page:React.FC = () => {
  return(
    <SidebarLayout menu={componentsNav}>
      <Text weight="heading" as="h1" size='8'>
        Avatar
      </Text>
      <ComponentBox 
        title="Avatar" 
        sourceCode={componentsFiles['Button.tsx']}
      >
        <button className="test">Test</button>
      </ComponentBox>
    </SidebarLayout>
  )
}

export default Page