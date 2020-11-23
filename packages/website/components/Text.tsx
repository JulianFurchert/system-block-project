import { styled, StitchesProps, StitchesVariants } from '../stitches.config';

export type TextProps = StitchesProps<typeof Text>;
export type TextVariants = StitchesVariants<typeof Text>;

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontFamily: 'inherit',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  // Custom
  color: '$gray900',
  variants: {
    weight: {
      'body': {
        fontWeight: '$body'
      },
      'heading': {
        fontWeight: '$heading'
      }
    },
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
      },
      '6': {
        fontSize: '$6',
      },
      '7': {
        fontSize: '$7',
      },
      '8': {
        fontSize: '$8',
      },
      '9': {
        fontSize: '$9',
      },
    },
  },
});
