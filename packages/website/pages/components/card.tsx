import { Text, Separator, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';
import { getComponentByName } from '../../utils/componentFiles';
import { Button } from '../../components';

type Page = {
  sourceCode: string | null
}

const Page:React.FC<Page> = ({ sourceCode }) => {
  return(
    <SidebarLayout menu={componentsNav}>
      <Text weight="heading" as="h1" size='8'>
        Card
      </Text>
      <ComponentBox title="Card" sourceCode={sourceCode}>
        <Button className="test">Test</Button>
      </ComponentBox>
    </SidebarLayout>
  )
}

export default Page

export async function getStaticProps() {
  const sourceCode = await getComponentByName('Card.tsx')
  return {
    props: { sourceCode }
  }
}