import { Accordion as BaseAccordion, styles } from '@interop-ui/react-accordion';
import { styled } from '../stitches.config'

const Accordion = styled(BaseAccordion, {
  ...styles.root
})

const Item = styled(BaseAccordion.Item, {
  ...styles.item
})

const Header = styled(BaseAccordion.Header, {
  ...styles.header
})

const Panel = styled(BaseAccordion.Panel, {
  ...styles.panel
})

const Button = styled(BaseAccordion.Button, {
  ...styles.button
})