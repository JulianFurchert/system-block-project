import { Tooltip as BaseTooltips, styles } from '@interop-ui/react-tooltip';
import { styled } from '../stitches.config'

const Tabs = styled(BaseTooltips, {
  ...styles.root
})

const Trigger = styled(BaseTooltips.Trigger, {
  ...styles.trigger
})

const Position = styled(BaseTooltips.Position, {
  ...styles.position
})

const Content = styled(BaseTooltips.Content, {
  ...styles.content
})

const Arrow = styled(BaseTooltips.Arrow, {
  ...styles.arrow
})