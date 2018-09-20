import React, { Component } from 'react'

import MathProblems from 'math-problem-generator-js'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Let's Learn Some Math</h1>
        <code>version: {MathProblems.version}</code>
      </div>
    )
  }
}
