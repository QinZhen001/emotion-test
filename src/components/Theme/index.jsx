import { ThemeProvider, css } from '@emotion/react'
import ThemeChild from  "./ThemeChild"
import { boxCss } from "../../css/index"

const theme = {
  colors: {
    primary: 'salmon'
  }
}


const Theme = () => {

  return <div css={boxCss}>
    <ThemeProvider theme={theme}>
      <div css={({ color: theme.colors.primary })}>
        Theme text
      </div>
      <ThemeChild></ThemeChild>
    </ThemeProvider>
  </div>
}



export default Theme
