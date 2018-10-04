import * as evaluator from './evaluator'
import { SimpleGenerator } from './generators'

const MathProblems = {};

MathProblems.version = '0.1.0';
MathProblems.evaluator = evaluator;

MathProblems.getGenerator = function (level) {
  return new SimpleGenerator(0, 9, 1);
};

export default MathProblems;
