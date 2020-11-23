import { Container, Text } from '../components';

const HomePage:React.FC = () => {
  return (
    <Container>
      <Text as="h1" weight="heading" size='9' css={{marginTop: '$9'}}>
        System Blocks
      </Text>
      <Text as="h3" size='6' css={{marginTop: '$4'}}>
        A template for your design system. Built with Modulz and Stitches
      </Text>
      {/* <Text as="p" size='3' css={{marginTop: '$2'}}>
        System Blocks is the perfect template for your design system. We've built 24 components and more than 30 blocks. All components and blocks are build with Modulz and Stitches and are highly customizable.
      </Text> */}
    </Container>
  )
}

export default HomePage