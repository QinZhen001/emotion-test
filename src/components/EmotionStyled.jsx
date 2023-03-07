import styled from "@emotion/styled";

const EmotionStyled = () => {

  const Test = styled('div')`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
`

  return <Test>emotion with styled component</Test>
}


export default EmotionStyled
