import NextLink from 'next/link'
import { Container, Box, MenuItem, Grid, Text, Separator } from '../components';

type SidebarProps = {
  menu?: {
    name: string,
    href: string
  }[],
}

export const SidebarLayout:React.FC<SidebarProps> = ({ menu = [], children }) => {
  return (
    <Container css={{ paddingLeft: '$4' }}>
      <Grid css={{gridTemplateColumns: '230px 1fr ', gridGap: '$8' }}>
        <Box css={{ marginTop: '$9' }}>
          {menu.map(item => (
            <NextLink href={item.href} passHref>
              <MenuItem key={item.name}>
                {item.name}
              </MenuItem>
            </NextLink>
          ))}
        </Box>
        <Box css={{ marginTop: '$9' }}>
          {children}
        </Box>
      </Grid>
    </Container>
  )
}