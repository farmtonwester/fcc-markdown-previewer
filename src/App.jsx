import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MarkdownPreviewer from './Components/MarkdownPreviewer'


class App extends Component {
  constructor(props) {
    super(props)


  }
  
  render() {

    return (
      <>
        <MarkdownPreviewer />
      </>
  )
  }
}

export default App
