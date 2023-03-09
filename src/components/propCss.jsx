// if you use @emotion/styled.macro with babel-plugin-macros or the babel plugin, 
// styled.div will be replaced with styled('div') and @emotion/styled-base will be imported instead which doesn't include the tag list.
import styled from "@emotion/styled";
import { boxCss } from "../css/index"

const PropCss = (props) => {
  const { className } = props

  const Basic =
    ({ className }) => <div className={className}>Some text</div>

  const Fancy = styled(Basic)`
  color: hotpink;
`


  return <div css={boxCss}>
    <div className={className}>PropCss</div>
    {/* props contains the `className` prop */}
    <div {...props} >PropCss</div>
    <Fancy></Fancy>
  </div>

}



export default PropCss
