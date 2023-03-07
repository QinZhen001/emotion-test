import EmotionCss from './components/EmotionCss'
import EmotionReact from './components/EmotionReact'
import EmotionStyled from './components/EmotionStyled'
import PropCss from './components/PropCss'
import ObjectStyles from "./components/ObjectStyles"

import './App.css'

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
    </div>
  )
}

export default App
