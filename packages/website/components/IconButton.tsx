import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type IconButtonProps = StitchesProps<typeof IconButton>;
export type IconButtonVariants = StitchesVariants<typeof IconButton>;

export const IconButton = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  border: 'none',
  borderRadius: '$round',
  transition: 'all 40ms linear',
  backgroundColor: 'transparent',
  height: '$6',
  width: '$6',
  ':hover': {
    backgroundColor: 'transparent',
  },
  ':active': {
    backgroundColor: '$gray300',
  },
  ':focus': {
    borderColor: '$gray700',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$gray500',
  },
  variants: {
    state: {
      active: {
        backgroundColor: '$gray300',
      },
    }
  }
});
