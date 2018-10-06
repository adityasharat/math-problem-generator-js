import * as evaluator from './evaluator'
import { create } from './generators'

const MathProblems = {};
MathProblems.version = '0.1.0';

MathProblems.getEvaluator = () => evaluator;
MathProblems.createGenerator = (level) => create(level);

export default MathProblems;
