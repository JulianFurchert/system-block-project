import { styled } from '../stitches.config';
import jsxToString from 'jsx-to-string';
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import { Prism}  from "./Prism";

type BlockCodeBoxProps = {
  sourceCode?: string,
  variants?: {
    name: string,
    options: string[]
  }[]
}

export const BlockCodeBox:React.FC<BlockCodeBoxProps> = ({ children, sourceCode }) => {
  const code = jsxToString(children);

  const prettySourceCode: string = prettier.format(sourceCode, {
    semi: false,
    parser: "babel",
    plugins: [parserBabel],
  })

  const prettyCode: string = prettier.format(code, {
    semi: false,
    parser: "babel",
    plugins: [parserBabel],
  })
  
  return (
    <Container>
      {/* <Prism code={prettySourceCode} /> */}
    </Container>
  )
}

const Container = styled('div', {
  width: '100%',
  borderRadius: '$3',
  border: '1px solid',
  borderColor: '$gray400'
});
