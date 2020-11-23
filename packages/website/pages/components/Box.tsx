import { Text, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';

const sourceCode = "import { styled, StitchesProps } from '../stitches.config';\n\nexport type BoxProps = StitchesProps<typeof Box>;\n\nexport const Box = styled('div', {\n  // Reset\n  boxSizing: 'border-box',\n});\n"

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
