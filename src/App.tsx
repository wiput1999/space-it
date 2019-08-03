import React, { useState } from 'react'

import copy from 'copy-to-clipboard'
import space from './spacer'

import './App.css'

const App: React.FC = () => {
  const [text, setText] = useState('R e s u l t')
  const [copyStatus, setCopyStatus] = useState(false)

  const handleChange = (sentence: string) => {
    setText(space(sentence))
  }

  const handleCopy = () => {
    setCopyStatus(true)
    copy(text, {
      debug: true,
      message: 'Press #{key} to copy'
    })
    setInterval(() => {
      setCopyStatus(false)
    }, 2000)
  }

  return (
    <div className="App">
      <div className="row">
        <h1>S p a c e i t</h1>
      </div>
      <div className="row">Input</div>
      <div className="row">
        <input
          type="text"
          placeholder="Input"
          onChange={e => handleChange(e.target.value)}
        />
      </div>
      <div className="row">Result</div>
      <div className="row">
        <h1>{text}</h1>
        {copyStatus ? (
          <h2 className="link-disabled">Copied!</h2>
        ) : (
          <h2 className="link" onClick={handleCopy}>
            Copy
          </h2>
        )}
      </div>
    </div>
  )
}

export default App
