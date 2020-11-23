import React from 'react';
import { styled } from '../stitches.config';
import {
  Switch as SwitchPrimitive,
  SwitchProps as SwitchPrimitiveProps,
} from '@interop-ui/react-switch';

export type CodeSwitchProps = SwitchPrimitiveProps & {
  label1?: string,
  label2?: string
};

const Track = styled('button', {
  position: 'relative',
  display: 'flex',
  width: "100%",
  height: "26px",
  border:"1px solid",
  borderColor:'$gray300',
  WebkitAppearance: "none",
  background: "$gray50",
  borderRadius: "5px",
  color: "#333333",
  fontSize: "12px",
  fontWeight: 400,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  cursor: "pointer",
  transition: 'border 0.2s ease 0s, color 0.2s ease-out 0s',
  outline: 'none',
  // '&[data-state="checked"]': {
  //   backgroundColor: '$gray800',
  // },
  '&:hover, &:focus': {
    borderColor:'$gray800',
  },
});

const Part = styled('span', {
  fontSize: '$2',
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 200,
  // color: '$gray700',
  // '[data-state="checked"] &': {
  //   color: '$gray900',
  // },
});

const Thumb = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  height: '100%',
  backgroundColor: '$gray200',
  transition: 'all 100ms ease',
  '&[data-state="checked"]': {
    transform: 'translateX(100%)',
  },
});


export function CodeSwitch(props: CodeSwitchProps) {
  const {label1 = 'Preview', label2 = 'Code', ...rest} = props;
  return (
    <SwitchPrimitive as={Track} {...rest}>
      <SwitchPrimitive.Thumb as={Thumb} />
      <Part>{label1}</Part>
      <Part>{label2}</Part>
    </SwitchPrimitive>
  );
}
