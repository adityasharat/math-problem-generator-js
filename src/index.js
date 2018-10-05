import * as evaluator from './evaluator'
import { SimpleGenerator } from './generators'

const MathProblems = {};

MathProblems.version = '0.1.0';


MathProblems.getEvaluator = () => evaluator;

MathProblems.getGenerator = (level) => new SimpleGenerator(0, 9, 1);

export default MathProblems;
