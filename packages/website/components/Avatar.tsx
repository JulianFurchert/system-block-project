import { Avatar as BaseAvatar, styles } from '@interop-ui/react-avatar';
import { styled } from '../stitches.config'

const Avatar = styled(BaseAvatar, {
  ...styles.root
})

const Image = styled(BaseAvatar.Image, {
  ...styles.image
})

const Fallback = styled(BaseAvatar.Fallback, {
  ...styles.fallback
})