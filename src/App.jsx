import { css } from "@emotion/react"

import EmotionCss from './components/EmotionCss'
import EmotionReact from './components/EmotionReact'
import EmotionStyled from './components/EmotionStyled'
import PropCss from './components/PropCss'
import ObjectStyles from "./components/ObjectStyles"
import GlobalStyle from "./components/GlobalStyle"
import Keyframes from "./components/Keyframes"
import ServerSideRender from "./components/ServerSideRender"
import Theme from './components/Theme'
import AttachingProps from './components/AttachingProps'

import './App.css'

const bgBlack = css({
  backgroundColor: "black"
})

function App() {

  return (
    <div className="App">
      <EmotionCss></EmotionCss>
      <EmotionReact></EmotionReact>
      <EmotionStyled></EmotionStyled>
      <PropCss css={{
        color: 'black',
        fontSize: 50,
      }}></PropCss>
      <ObjectStyles></ObjectStyles>
      <GlobalStyle></GlobalStyle>
      <Keyframes></Keyframes>
      <ServerSideRender></ServerSideRender>
      <Theme></Theme>
      <AttachingProps css={bgBlack}></AttachingProps>
    </div>
  )
}

export default App
