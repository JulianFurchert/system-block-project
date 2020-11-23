import { styled, StitchesProps } from '../stitches.config';

export type SelectProps = StitchesProps<typeof StyledContainer>;

export const Select: React.FC<SelectProps> = ({children, ...props}) => {
  return(
    <StyledContainer {...props}>
      <StyledSelect children={children} />
    </StyledContainer>
  )
}

const StyledContainer = styled('div', {
  backgroundPositionX: "calc(100% - 8px)",
  flexDirection: "row",
  position: "relative",
  width: "100%",
  backgroundColor: '$gray50',
  backgroundImage: `url(data\:image\/svg\+xml\;charset\=utf-8\;base64\,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0gMCA2IEwgMyAzIEwgMCAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjUgMSkgcm90YXRlKDkwIDEuNSAzKSIgZmlsbD0idHJhbnNwYXJlbnQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiM5OTk5OTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI\+PC9wYXRoPjwvc3ZnPg\=\=)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "5px"
})

const StyledSelect = styled('select', {
  width: "100%",
  height: "26px",
  padding: "0 16px 1px 8px",
  border:"1px solid",
  borderColor:'$gray300',
  WebkitAppearance: "none",
  background: "transparent",
  borderRadius: "5px",
  color: "$gray800",
  fontSize: "$2",
  fontWeight: 400,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  cursor: "pointer",
  transition: 'border 0.2s ease 0s, color 0.2s ease-out 0s',
  outline: 'none',
  '&:hover, &:focus': {
    borderColor:'$gray800',
  },
});