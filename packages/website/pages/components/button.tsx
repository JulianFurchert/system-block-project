import { Text, Separator, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';
import { Button } from '../../components';
import componentsFiles from '../../components.json';

const Page:React.FC = () => {
  return(
    <SidebarLayout menu={componentsNav}>
      <Text weight="heading" as="h1" size='8'>
        Button
      </Text>
      <ComponentBox
        title="Button"
        sourceCode={componentsFiles['Button.tsx']}
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

// export async function getStaticProps() {
//   const sourceCode = await getComponentByName('Button.tsx')
//   return {
//     props: { sourceCode }
//   }
// }