import { Text, ComponentBox } from '../../components';
import { SidebarLayout } from '../../composites';
import { componentsNav } from '../../navigation';

const sourceCode = "import { StitchesProps, StitchesVariants, styled } from '../stitches.config';\n\nexport type ButtonProps = StitchesProps<typeof Button>;\nexport type ButtonVariants = StitchesVariants<typeof Button>;\n\n\nexport const Button = styled('button', {\n  // Reset\n  alignItems: 'center',\n  appearance: 'none',\n  boxSizing: 'border-box',\n  display: 'inline-flex',\n  justifyContent: 'center',\n  lineHeight: '1',\n  margin: '0',\n  outline: 'none',\n  padding: '0',\n  textDecoration: 'none',\n  userSelect: 'none',\n  WebkitTapHighlightColor: 'rgba(0,0,0,0)',\n  '::before': {\n    boxSizing: 'border-box',\n  },\n  '::after': {\n    boxSizing: 'border-box',\n  },\n\n  // Custom\n  backgroundColor: '$loContrast',\n  border: 'none',\n  boxShadow: 'inset 0 0 0 1px $gray600',\n  borderRadius: '$1',\n  color: '$hiContrast',\n  height: '$5',\n  px: '$2',\n  fontFamily: '$untitled',\n  fontSize: '$2',\n  fontWeight: 500,\n  fontVariantNumeric: 'tabular-nums',\n\n  ':hover': {\n    boxShadow: 'inset 0 0 0 1px $gray700',\n  },\n  ':active': {\n    backgroundColor: '$gray100',\n    boxShadow: 'inset 0 0 0 1px $gray700',\n  },\n  ':focus': {\n    boxShadow: 'inset 0 0 0 1px $gray700, 0 0 0 1px $gray700',\n  },\n  ':disabled': {\n    pointerEvents: 'none',\n    backgroundColor: '$gray200',\n    boxShadow: 'inset 0 0 0 1px $gray400',\n    color: '$gray400',\n  },\n\n  variants: {\n    size: {\n      large: {\n        height: '$6',\n        px: '$3',\n        fontSize: '$3',\n      },\n    },\n    variant: {\n      blue: {\n        backgroundColor: '$blue800',\n        boxShadow: 'none',\n        color: 'white',\n        ':hover': {\n          backgroundColor: '$blue900',\n          boxShadow: 'none',\n        },\n        ':active': {\n          backgroundColor: '$blue700',\n          boxShadow: 'none',\n        },\n        ':focus': {\n          boxShadow: 'inset 0 0 0 1px $blue500, 0 0 0 1px $blue500',\n        },\n      },\n      green: {\n        backgroundColor: '$green800',\n        boxShadow: 'none',\n        color: 'white',\n        ':hover': {\n          backgroundColor: '$green600',\n          boxShadow: 'none',\n        },\n        ':active': {\n          backgroundColor: '$green600',\n          boxShadow: 'none',\n        },\n        ':focus': {\n          boxShadow: 'inset 0 0 0 1px $green500, 0 0 0 1px $green500',\n        },\n      },\n      red: {\n        color: '$red900',\n        ':focus': {\n          boxShadow: 'inset 0 0 0 1px $red500, 0 0 0 1px $red500',\n        },\n      },\n      ghost: {\n        backgroundColor: 'transparent',\n        boxShadow: 'none',\n        fontWeight: 400,\n        ':hover': {\n          backgroundColor: '$gray200',\n          boxShadow: 'none',\n        },\n        ':active': {\n          backgroundColor: '$gray300',\n          boxShadow: 'none',\n        },\n      },\n    },\n    state: {\n      active: {\n        backgroundColor: '$gray300',\n        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',\n        ':hover': {\n          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',\n        },\n        ':active': {\n          backgroundColor: '$gray300',\n        },\n      },\n      waiting: {\n        backgroundColor: '$gray300',\n        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',\n        ':hover': {\n          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',\n        },\n        ':active': {\n          backgroundColor: '$gray300',\n        },\n      },\n    },\n  },\n});\n"

const Page:React.FC = () => {
  return(
    <SidebarLayout menu={componentsNav}>
      <Text weight="heading" as="h1" size='8'>
        Avatar
      </Text>
      <ComponentBox title="Avatar" sourceCode={sourceCode}>
        <button className="test">Test</button>
      </ComponentBox>
    </SidebarLayout>
  )
}

export default Page
