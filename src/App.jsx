import { css } from "@emotion/react"
import TestInput from './components/Test/TestInput'

import './App.css'

const bgBlack = css({
  backgroundColor: "black"
})

function App() {

  return (
    <div className="App">
      <TestInput></TestInput>
    </div>
  )
}

export default App
