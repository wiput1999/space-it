import React, { Fragment, useCallback, useState } from 'react'

import copy from 'copy-to-clipboard'
import space from './spacer'

import './App.css'

const App: React.FC = () => {
  const [text, setText] = useState('R e s u l t')
  const [copyStatus, setCopyStatus] = useState(false)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const sentence = event.currentTarget.value as string

      setText(sentence.length ? space(sentence) : 'R e s u l t')
    },
    []
  )

  const handleCopy = useCallback(() => {
    setCopyStatus(true)
    copy(text, {
      debug: true,
      message: 'Press #{key} to copy',
    })
    setTimeout(() => {
      setCopyStatus(false)
    }, 2000)
  }, [text])

  const preventDefault = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
    },
    []
  )

  return (
    <Fragment>
      <h1 id="brand">S p a c e i t</h1>

      <form id="form" onSubmit={preventDefault}>
        <label className="label" htmlFor="toBeSpaced">
          Insert your text below.
        </label>
        <input
          id="space-it"
          name="toBeSpaced"
          placeholder="Text to be spaced"
          aria-label="Text to be spaced"
          onChange={handleChange}
          autoComplete="off"
          title="Text to be spaced"
        />
      </form>

      <hr className="hr-line" />

      <h2 id="result-heading">Result</h2>
      <section id="result-area">
        <h3 className="result">{text}</h3>
        {copyStatus ? (
          <button id="copy" className="-disabled" title="Click to copy">
            Copied!
          </button>
        ) : (
          <button id="copy" onClick={handleCopy} title="Click to copy">
            Copy
          </button>
        )}
      </section>
    </Fragment>
  )
}

export default App
