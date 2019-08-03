import React, { useState } from 'react'
import './App.css'
import space from './spacer'

const App: React.FC = () => {
  const [text, setText] = useState('')

  const handleChange = (sentence: string) => {
    setText(space(sentence))
  }

  return (
    <div className="App">
      <div className="row">
        <h1>S p a c e i t</h1>
      </div>
      <div className="row">
        <input type="text" onChange={e => handleChange(e.target.value)} />
      </div>
      <div className="row">
        <input type="text" value={text} disabled={true} />
      </div>
    </div>
  )
}

export default App
