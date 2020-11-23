import NextLink from 'next/link'
import { styled } from '../stitches.config'
import { Container, Link, Flex } from '../components'
import { headerNav } from '../navigation'

export const Header: React.FC = () => {
  return(
    <Wrappper>
      <Container>
        <Flex 
          css={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 64
          }}>
          <NextLink href="/" passHref>
            <Link 
              css={{ 
                fontWeight: '$heading', 
                fontSize: '$4', 
                color: '$gray900' 
              }}
            > 
              System Blocks
            </Link>
          </NextLink>
          <Flex>
            {headerNav.map(item => (
              <NextLink key={item.href} href={item.href} passHref>
                <Link css={{ marginLeft: '$4' }}>
                  {item.name} 
                </Link>
              </NextLink>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Wrappper>
  )
}

const Wrappper = styled('header', {
  position: 'sticky',
  top: 0,
  zIndex: 200,
  '&:after': {
    content: '""',
    backgroundColor: '$gray50',
    opacity: 0.9,
    backdropFilter: 'saturate(2.8) blur(6px)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: -1,
  }
})