import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import { Separator as SeparatorPrimitive, styles } from '@interop-ui/react-separator';

export type SeparatorProps = StitchesProps<typeof Separator>;
export type SeparatorVariants = StitchesVariants<typeof Separator>;

export const Separator = styled(SeparatorPrimitive, {
  ...styles.root,

  height: '1px',
  width: '100%',
  backgroundColor: '$gray300',

  '[data-orientation="horizontal"]': {
    height: '1px',
    width: '100%',
  },

  '[data-orientation="vertical"]': {
    width: '1px',
    height: '100%',
  },
});
