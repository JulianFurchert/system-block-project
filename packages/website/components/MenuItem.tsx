import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type MenuItemProps = StitchesProps<typeof MenuItem>;
export type MenuItemVariants = StitchesVariants<typeof MenuItem>;

export const MenuItem = styled('a', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'flex-start',
  lineHeight: '1',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
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
  display: 'flex',
  jc: 'flex-start',
  minHeight: 35,
  padding: '0 $3',
  whiteSpace: 'nowrap',
  backgroundColor: '$gray50',
  margin: '$1 0',
  borderRadius: '$2',
  fontSize: '$3',
  color: '$gray700',
  cursor: 'pointer',
  ':hover': {
    color: '$gray900',
  },
  '&[data-selected]': {
    color: '$blue500',
  },
});
