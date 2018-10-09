# Math Problem Generator

> Generate random math problems and test their results

[![NPM](https://img.shields.io/npm/v/math-problem-generator-js.svg)](https://www.npmjs.com/package/math-problem-generator-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save math-problem-generator
```

## Usage

```JavaScript
import MathProblems from 'math-problem-generator'

const evaluator = MathProblems.getEvaluator();
evaluator.evaluate('2+2'); // 4

const generator = MathProblems.getGenerator(1);
let problem = generator.next(); // {x: <number>, y: <number>, op: '<operation>'}
problem.evaluate(); // returns the result
```

## License

Apache v2.0 © [adityasharat](https://github.com/adityasharat) 2018
