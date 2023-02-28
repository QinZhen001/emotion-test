import { css } from '@emotion/css'

const color = 'white'

const EmotionCss = () => {
  return <div
    className={css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: red;
    &:hover {
      color: ${color};
    }
  `}
  >
    <h1>emotion css with className</h1>
  </div>
}



export default EmotionCss
