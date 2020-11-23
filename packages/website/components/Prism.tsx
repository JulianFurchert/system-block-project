import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwlTheme from "prism-react-renderer/themes/nightOwl";
import { styled } from '../stitches.config';

const prsimTheme: any = {
  plain: {
    color: 'var(--colors-gray900)',
    backgroundColor: 'var(--colors-gray50)',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'var(--colors-gray600)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'var(--colors-blue600)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'var(--colors-gray600)',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: 'var(--colors-red600)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'var(--colors-blue600)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'var(--colors-orange600)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'var(--colors-green600)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: 'var(--colors-blue600)',
      },
    },
  ],
};

type PrismProps = Partial<React.ComponentProps<typeof Highlight>> & {
  darkTheme?: boolean
}

export const Prism:React.FC<PrismProps> = props => (
  <Highlight {...defaultProps} code={null} theme={props.darkTheme ? nightOwlTheme : prsimTheme} language="jsx" {...props}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
);

export default Prism;

export const Pre = styled('pre', {
  textAlign: 'left',
  margin: 0,
  padding: '$3 $5',
  fontSize: '$2',
  overflow: 'scroll',
  '& .token-line': {
    lineHeight: '1.3em',
    height: '1.3em'
  }
});