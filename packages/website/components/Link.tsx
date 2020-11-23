import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type LinkProps = StitchesProps<typeof Link>;
export type LinkVariants = StitchesVariants<typeof Link>;

export const Link = styled('a', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  outline: 'none',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  ':disabled': {
    pointerEvents: 'none',
  },
  '::before': {
    boxSizing: 'border-box',
  },
  '::after': {
    boxSizing: 'border-box',
  },

  // Custom
  fontSize: '$3',
  color: '$gray700',
  lineHeight: 'inherit',
  transition: 'all 50ms linear',
  ':hover': {
    color: '$gray900',
  },
});
