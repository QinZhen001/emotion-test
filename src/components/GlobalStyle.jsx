import { Global, css } from "@emotion/react"
import { boxCss } from "../css/index"


const GlobalStyle = () => {

  return <div css={boxCss}>
    <Global
      styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
    />
    <div className="some-class">GlobalStyle</div>
  </div>
}



export default GlobalStyle
