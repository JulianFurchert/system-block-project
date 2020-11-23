import React from 'react';
import { styled, theme } from '../stitches.config';
import jsxToString from 'jsx-to-string';
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import { Prism }  from "./Prism";
import { Select }  from "./Select";
import { Grid }  from "./Grid";
import { Box }  from "./Box";
import { Text }  from "./Text";
import { Flex }  from "./Flex";
import { IconButton }  from "./IconButton";
import { CodeSwitch }  from "./CodeSwitch";
import { Code as CodeIcon, Sliders, X } from 'react-feather';

type Variants = {
  [key: string]: {
    [key: string]: Array<string>
  }
}

type SelectedVariants<T extends Variants> = {
  [P in keyof T]: {
    // [V in keyof T[P]]: T[P][V][number]
    [V in keyof T[P]]: undefined
  }
}

type ComponentBoxProps<T extends Variants> = {
  children?: React.ReactNode | ( (SelectedVariants: SelectedVariants<T>) => React.ReactNode );
  sourceCode?: string,
  title?: string,
  variants?: T
}

const createDefaultVariants = <T extends Variants>(variants: T): SelectedVariants<T> => {
  let defaultVariants: SelectedVariants<T>;
  
  if(variants){
    Object.keys(variants).forEach(key => {
      Object.keys(variants[key]).forEach(key2 => {
        variants[key][key2] = undefined
      })
    })
  }
  return defaultVariants
} 

export const ComponentBox = <T extends Variants>(props: ComponentBoxProps<T>): React.ReactElement => {
  const {children, sourceCode, variants, title} = props;
  const defaultVariants = variants ? createDefaultVariants(variants) : null
  const [isCodeVisible, setIsCodeVisible] = React.useState(false)
  const c = typeof children === 'function' ? children(defaultVariants) : children



  const code = jsxToString(c, {
    functionNameOnly: true,
    useFunctionCode: true
  });

  console.log(code)

  // const prettyCode: string = prettier.format(code, {
  //   semi: false,
  //   parser: "babel",
  //   plugins: [parserBabel],
  // })

  const prettySourceCode: string = prettier.format(sourceCode, {
    semi: false,
    parser: "babel",
    plugins: [parserBabel],
  })
  
  return (
    <Container>
      <Flex>
        <Box css={{flexGrow: 1}}>
          {isCodeVisible ? (
            <Code>
              <Prism darkTheme code={prettySourceCode} />
            </Code>
          ):(
            <Preview>
              <Box>
                {typeof children === 'function' ? children(defaultVariants) : children}
              </Box>  
            </Preview>
          )}
        </Box>
        <SettingsWrapper>
          <Flex css={{alignItems: 'center', marginBottom: '$3' }}>
            <Text size="2" css={{width: 60, marginRight: '$4'}}>
              variant
            </Text>
            <Select>
              <option>Variant1</option>
              <option>Variant2</option>
              <option>Variant3</option>
            </Select>
          </Flex>
          <Flex css={{alignItems: 'center', marginBottom: '$3' }}>
            <Text size="2" css={{width: 60, marginRight: '$4'}}>
              size
            </Text>
            <Select>
              <option>Variant1</option>
              <option>Variant2</option>
              <option>Variant3</option>
            </Select>
          </Flex>
          <Flex css={{alignItems: 'center', marginBottom: '$3' }}>
            <CodeSwitch  
              checked={isCodeVisible}
              label2="Source"
              onCheckedChange={(event: any) => setIsCodeVisible(event.target.checked)}
            />
          </Flex>
        </SettingsWrapper>
      </Flex>
    </Container>
  )
}

const Container = styled('div', {
  width: '100%',
  borderRadius: '$3',
  border: '1px solid',
  borderColor: '$gray300',
  overflow: 'hidden',
  marginTop: '$7',
});

const Preview = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  padding: '$6 $5',
  minHeight: 300
});

const Code = styled('div', {
  borderTop: '1px solid',
  borderColor: '$gray300',
});

const SettingsWrapper = styled('div', {
  width: 240,
  padding: '$5',
  backgroundColor: '$gray75',
  borderLeft: '1px solid',
  borderColor: '$gray300',
});

