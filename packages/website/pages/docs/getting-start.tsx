import { Text, Separator } from '../../components';
import { SidebarLayout } from '../../composites';
import { docsNav } from '../../navigation';

const Page:React.FC = () => {
  return(
    <SidebarLayout menu={docsNav}>
      <Text weight="heading" as="h1" size='8'>
        Getting Start
      </Text>
      <Separator css={{ margin: '$4 0' }} />
    </SidebarLayout>
  )
}

export default Page