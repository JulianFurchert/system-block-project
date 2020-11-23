import NextLink from 'next/link'
import Image from 'next/image'
import { Container, Text, Box, Separator, Card, Grid } from '../components';

const categories = [
  {
    title: 'Application Shells',
    blocks: [
      {
        title: 'Stacked Layouts',
        image: '/img/headings-card-headings.svg'
      },
      {
        title: 'Sidebar Layouts',
        image: '/img/headings-card-headings.svg'
      },
      {
        title: 'Sidebar Layouts',
        image: '/img/headings-card-headings.svg'
      }
    ]
  },
  {
    title: 'Headings',
    blocks: [
      {
        title: 'Stacked Layouts',
        image: '/img/headings-card-headings.svg'
      },
      {
        title: 'Sidebar Layouts',
        image: '/img/headings-card-headings.svg'
      },
      {
        title: 'Sidebar Layouts',
        image: '/img/headings-card-headings.svg'
      }
    ]
  }
] 

const BlocksPage:React.FC = () => {
  return (
    <Container  css={{ marginTop: '$9' }}>
      <Text weight="heading" as="h1" size='8'>
        Application Blocks
      </Text>
      {categories.map(categorie => (
        <Box css={{ marginTop: '$9' }}>
          <Text as="h3" size='6' >
            {categorie.title}
          </Text>
          <Separator css={{ margin: '$4 0 $6' }} />
          <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '$3' }}>
            {categorie.blocks.map(block => (
              <NextLink href="#" passHref>
                <Card variant="link">
                  <Image width="560" height="280" src={block.image} />
                  <Box css={{ padding: '$4 $3'}}>
                    <Text size="3">
                      {block.title}
                    </Text>
                  </Box>
                </Card>
              </NextLink>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  )
}

export default BlocksPage
