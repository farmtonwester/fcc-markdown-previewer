import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MarkdownPreviewer from './Components/MarkdownPreviewer'

//Next step will be to initialize state with the value of the textarea field. 
//Then this text will be passed to preview element via props
//Must import Marked library for parsing markdown.


function App() {
    return (
     <>
        <textarea id="editor"></textarea>
        <p id="preview">Tada</p>
     </>
    )
}

export default App
