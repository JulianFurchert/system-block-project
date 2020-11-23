import { Checkbox as BaseCheckbox, styles } from '@interop-ui/react-checkbox';
import { styled } from '../stitches.config'

const Checkbox = styled(BaseCheckbox, {
  ...styles.root
})

const Indicator = styled(BaseCheckbox.Indicator, {
  ...styles.indicator
})
