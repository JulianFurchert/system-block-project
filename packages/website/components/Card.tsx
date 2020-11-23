import { styled, StitchesProps } from '../stitches.config';

export type CardProps = StitchesProps<typeof Card>;

export const Card = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  borderRadius: '$3',
  backgroundColor: '$gray50',
  boxShadow: '0 5px 10px 0 rgba(0,0,0,0.08), 0 1px 0 0 rgba(0,0,0,0.05)',
  transition: 'all 0.25s ease',
  overflow: 'hidden',

  variants: {
    variant: {
      'link': {
        ':hover': {
          cursor: 'pointer',
          transform: 'translateY(-2px)'
        }
      }
    }
  }
});
