import { css, keyframes } from '@emotion/react'
import { boxCss } from "../css/index"

const Keyframes = () => {

  const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
  `

  return <div css={boxCss}>
    <div css={{
      margin: 10,
      animation: `${bounce} 1s ease infinite;`
    }}>Keyframes</div>
  </div>
}


export default Keyframes
