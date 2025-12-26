
import { Question } from './types';

export const QUESTIONS_BANK: Question[] = [
  {
    id: 1,
    text: "Let p be a proposition. The statement 'It is not the case that p' is denoted by:",
    options: [
      { id: 'a', text: "¬p" },
      { id: 'b', text: "⊕ p" },
      { id: 'c', text: "p → ¬p" },
      { id: 'd', text: "p ∧ ¬p" }
    ],
    correctOptionId: 'a',
    explanation: "The symbol '¬' (negation) is used in logic to represent 'not'. If p is true, ¬p is false."
  },
  {
    id: 2,
    text: "The proposition that is true when both p and q are true and is false otherwise is denoted by:",
    options: [
      { id: 'a', text: "p ∧ q" },
      { id: 'b', text: "p ∨ q" },
      { id: 'c', text: "p → q" },
      { id: 'd', text: "p ↔ q" }
    ],
    correctOptionId: 'a',
    explanation: "The symbol '∧' (conjunction) represents 'AND'. Both components must be true for the whole statement to be true."
  },
  {
    id: 3,
    text: "The proposition that is false when p and q are both false and is true otherwise is denoted by:",
    options: [
      { id: 'a', text: "p ∨ q" },
      { id: 'b', text: "p ∧ q" },
      { id: 'c', text: "p ↔ q" },
      { id: 'd', text: "p ⊕ q" }
    ],
    correctOptionId: 'a',
    explanation: "The symbol '∨' (disjunction) represents 'OR'. It is only false if every component is false."
  },
  {
    id: 4,
    text: "The proposition that is true when exactly one of p and q is true and is false otherwise is denoted by:",
    options: [
      { id: 'a', text: "p ⊕ q" },
      { id: 'b', text: "p ∨ q" },
      { id: 'c', text: "p ∧ q" },
      { id: 'd', text: "p ↔ q" }
    ],
    correctOptionId: 'a',
    explanation: "The symbol '⊕' (exclusive OR) means 'one or the other, but not both'."
  },
  {
    id: 5,
    text: "The proposition that is false when p is true and q is false and is true otherwise is denoted by:",
    options: [
      { id: 'a', text: "p → q" },
      { id: 'b', text: "p ∨ q" },
      { id: 'c', text: "p ∧ q" },
      { id: 'd', text: "p ↔ q" }
    ],
    correctOptionId: 'a',
    explanation: "This is a conditional statement. It only fails (is false) if the premise (p) is true but the conclusion (q) is false."
  },
  {
    id: 8,
    text: "Find the converse of p → ¬q.",
    options: [
      { id: 'a', text: "¬q → p" },
      { id: 'b', text: "q → ¬p" },
      { id: 'c', text: "q → p" },
      { id: 'd', text: "¬q → ¬p" }
    ],
    correctOptionId: 'a',
    explanation: "The converse of p → q is q → p. In this case, we swap p and ¬q, resulting in ¬q → p."
  },
  {
    id: 9,
    text: "Find the contrapositive of ¬p → q.",
    options: [
      { id: 'a', text: "¬q → p" },
      { id: 'b', text: "q → ¬p" },
      { id: 'c', text: "p → ¬q" },
      { id: 'd', text: "¬q → ¬p" }
    ],
    correctOptionId: 'a',
    explanation: "The contrapositive of p → q is ¬q → ¬p. Here, we negate both and swap them: ¬q → ¬(¬p), which simplifies to ¬q → p."
  },
  {
    id: 10,
    text: "Find the bitwise OR of the bit strings 1011 0010 and 0110 0110.",
    options: [
      { id: 'a', text: "1111 0110" },
      { id: 'b', text: "0010 0011" },
      { id: 'c', text: "0011 0011" },
      { id: 'd', text: "1010 1001" }
    ],
    correctOptionId: 'a',
    explanation: "Bitwise OR compares each bit: if either bit is 1, the result is 1. 10110010 OR 01100110 = 11110110."
  },
  {
    id: 15,
    text: "Let p, q and r be 'You get an A on the final', 'You do every exercise', and 'You get an A in this class'. Express 'Getting an A on the final and doing every exercise is sufficient for getting an A in this class':",
    options: [
      { id: 'a', text: "(p ∧ q) → r" },
      { id: 'b', text: "r → (p ∧ q)" },
      { id: 'c', text: "(p ∨ q) → r" },
      { id: 'd', text: "¬r → (¬p ∧ ¬q)" }
    ],
    correctOptionId: 'a',
    explanation: "'A is sufficient for B' means A → B. Here A is (p and q), so (p ∧ q) → r."
  },
  {
    id: 21,
    text: "A compound proposition is a tautology if:",
    options: [
      { id: 'a', text: "it is always true, no matter what the truth values of the propositions in it" },
      { id: 'b', text: "it is always false" },
      { id: 'c', text: "it is true whenever each component is true" },
      { id: 'd', text: "it is only false when each component is false" }
    ],
    correctOptionId: 'a',
    explanation: "By definition, a tautology is a statement that is true in every possible interpretation (e.g., p ∨ ¬p)."
  },
  {
    id: 39,
    text: "Find the power set of {1, 2}.",
    options: [
      { id: 'a', text: "{ ∅, {1}, {2}, {1, 2} }" },
      { id: 'b', text: "{ ∅, {1, 2} }" },
      { id: 'c', text: "{ {0}, {1}, {1, 2} }" },
      { id: 'd', text: "{ ∅, {2} }" }
    ],
    correctOptionId: 'a',
    explanation: "The power set is the set of ALL possible subsets, including the empty set and the set itself. For n elements, there are 2^n subsets."
  },
  {
    id: 40,
    text: "List the members of the set {x | x is a negative integer greater than -8}.",
    options: [
      { id: 'a', text: "{ -7, -6, -5, -4, -3, -2, -1 }" },
      { id: 'b', text: "{ -8, -7, -6, -5, -4, -3, -2, -1 }" },
      { id: 'c', text: "{ -9, -10, -11, ... }" },
      { id: 'd', text: "{ 0, 1, 2, 3, 4, 5, 6, 7 }" }
    ],
    correctOptionId: 'a',
    explanation: "Integers 'greater than -8' move towards zero on the number line. Since it specifies 'negative', it stops at -1."
  },
  {
    id: 46,
    text: "Let U = {0..9}, A = {0, 1, 3, 4, 7, 8}, B = {0, 2, 4, 6, 7, 8, 9}. Find the complement of (A ∪ B).",
    options: [
      { id: 'a', text: "{5}" },
      { id: 'b', text: "∅" },
      { id: 'c', text: "{0, 1, 2, 4, 6, 7, 8, 9}" },
      { id: 'd', text: "{0, 4, 7, 8}" }
    ],
    correctOptionId: 'a',
    explanation: "A ∪ B = {0, 1, 2, 3, 4, 6, 7, 8, 9}. The complement (everything in U NOT in the union) is just {5}."
  },
  {
    id: 69,
    text: "Find ⌈1.01⌉ (ceiling of 1.01).",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "1" },
      { id: 'c', text: "1.01" },
      { id: 'd', text: "0" }
    ],
    correctOptionId: 'a',
    explanation: "The ceiling function ⌈x⌉ rounds up to the nearest integer. Even if x is 1.000001, the ceiling is 2."
  },
  {
    id: 96,
    text: "There are 20 math majors and 40 CS majors. How many ways to pick one representative who is either a math major OR a CS major?",
    options: [
      { id: 'a', text: "60" },
      { id: 'b', text: "800" },
      { id: 'c', text: "20" },
      { id: 'd', text: "40" }
    ],
    correctOptionId: 'a',
    explanation: "The Sum Rule: If tasks cannot be done at the same time, the total ways is the sum of the ways to do each task. 20 + 40 = 60."
  }
];
