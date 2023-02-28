import { css } from '@emotion/react'

const color = 'white'

const EmotionReact = () => {
  return <>
    <div css={
      css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      color: red;
      &:hover {
        color: ${color};
      }`
    }>
      <h1>emotion react with css string</h1>
    </div>

    <div css={{
      padding: "32px",
      backgroundColor: 'hotpink',
    }}>
      <h1>emotion react with css object</h1>
    </div >
  </>
}


export default EmotionReact
