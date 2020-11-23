import { Text, Separator, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';
import { Button } from '../../components';
import componentsFiles from '../../allComponentFiles.json';

const Page:React.FC = () => {
  return(
    <SidebarLayout menu={componentsNav}>
      <Text weight="heading" as="h1" size='8'>
        Card
      </Text>
      <ComponentBox title="Card" sourceCode={componentsFiles['Button.tsx']}>
        <Button className="test">Test</Button>
      </ComponentBox>
    </SidebarLayout>
  )
}

export default Page