// https://emotion.sh/docs/babel-macros
import styled from "@emotion/styled";
import { boxCss } from "../css/index"

const ObjectStyles = () => {

  const Child = styled('div')({
    color: 'red'
  })

  console.log('Child', Child)

  const Parent = styled('div')({
    [Child]: {
      color: 'blue'
    }
  })

  return <div css={boxCss}>
    ObjectStyles
    <Parent>
      <Child>blue</Child>
    </Parent>
    <Child>red</Child>
  </div>
}


export default ObjectStyles
