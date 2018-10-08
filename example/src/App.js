import React, { Component } from 'react'

import { MathProblems, Problem } from 'math-problem-generator'

class ProblemUI extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      problem: new Problem(props.problem[0], '+', props.problem[1]),
      check: 0
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const input = (event.target.value || '').trim();
    const answer = this.state.problem.evaluate();
    if (input === '' || isNaN(parseInt(input, 10))) {
      this.setState({
        check: 0
      });
    } else {
      const num = parseInt(input, 10);
      this.setState({
        check: num === answer ? 1 : -1
      })
    }
  }
  render() {
    const problem = this.state.problem;
    return (
      <div className="problem-ui">
        <div className="expression">
          <span className="param x">{problem.x}</span>
          <span className="op">{problem.op}</span>
          <span className="param y">{problem.y}</span>
          <span className="symbol eq">=</span>
        </div>
        <form className="result-form" onSubmit={this.handleSubmit}>
          <input type="text" name="answer" />
          <button type="submit">Check</button>
        </form>
        <div>
          {this.state.check === 1 && <div className="result-correct">correct</div>}
          {this.state.check === -1 && <div className="result-incorrect">incorrect</div>}
        </div>
      </div>
    )
  }
}

export default class App extends Component {

  render () {
    const generator = MathProblems.createGenerator(1);
    return (
      <div>
        <h1>Let's Learn Some Math</h1>
          <ul className="problems">
            {
              generator.problems.map((p, i) => {
                return <li key={i}><ProblemUI problem={p} /></li>
              })
            }
          </ul>
        <code>version: {MathProblems.version}</code>
      </div>
    )
  }
}
