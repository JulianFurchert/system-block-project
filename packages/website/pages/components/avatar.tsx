import { Text, Separator, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';
import { getComponentByName } from '../../utils/componentFiles';

type Page = {
  sourceCode: string | null
}

const Page:React.FC<Page> = ({ sourceCode }) => {
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

export async function getStaticProps() {
  const sourceCode = await getComponentByName('Avatar.tsx')
  return {
    props: { sourceCode }
  }
}