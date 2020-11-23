import { Text, Separator, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';
import { getComponentByName } from '../../utils/componentFiles';
import { Button } from '../../components';
import Meta from '../../../system-blocks/stories/Button.stories.tsx';

type Page = {
  sourceCode: string | null
}

const Page: React.FC<Page> = ({ sourceCode }) => {
  console.log(Meta)

  return(
    <SidebarLayout menu={componentsNav}>
      <Text weight="heading" as="h1" size='8'>
        Button
      </Text>
      <ComponentBox
        title="Button"
        sourceCode={sourceCode}
        variants={{
          button: {
            variant: ['blue', 'green'],
            size: ['large', 'small']
          } 
        }} 
      >
        {(props)=> (
          <Button>
            Test
          </Button>
        )}
      </ComponentBox>
    </SidebarLayout>
  )
}

export default Page

export async function getStaticProps() {
  const sourceCode = await getComponentByName('Button.tsx')
  return {
    props: { sourceCode }
  }
}