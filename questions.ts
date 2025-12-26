import { Question } from './types';

export const QUESTIONS_BANK: Question[] = [
  // q/1категория: Basic Logic
  {
    id: 1,
    text: "Let p be a proposition. The statement 'It is not the case that p' is denoted by:",
    options: [
      { id: '1a', text: "¬p" },
      { id: '1b', text: "⊕ p" },
      { id: '1c', text: "p → ¬p" },
      { id: '1d', text: "p ∧ ¬p" },
      { id: '1e', text: "¬p ∨ p" }
    ],
    correctOptionId: '1a',
    explanation: "Negation (¬) flips the truth value of a proposition."
  },
  {
    id: 2,
    text: "The proposition that is true when both p and q are true and is false otherwise is denoted by:",
    options: [
      { id: '2a', text: "p ∧ q" },
      { id: '2b', text: "p ∨ q" },
      { id: '2c', text: "p → q" },
      { id: '2d', text: "p ↔ q" }
    ],
    correctOptionId: '2a',
    explanation: "Conjunction (∧) requires both components to be true."
  },
  {
    id: 3,
    text: "The proposition that is false when p and q are both false and is true otherwise is denoted by:",
    options: [
      { id: '3a', text: "p ∨ q" },
      { id: '3b', text: "p ∧ q" },
      { id: '3c', text: "p → q" },
      { id: '3d', text: "p ⊕ q" }
    ],
    correctOptionId: '3a',
    explanation: "Disjunction (∨) is true if at least one component is true."
  },
  {
    id: 4,
    text: "The proposition that is true when exactly one of p and q is true and is false otherwise is denoted by:",
    options: [
      { id: '4a', text: "p ⊕ q" },
      { id: '4b', text: "p ∨ q" },
      { id: '4c', text: "p → q" },
      { id: '4d', text: "p ↔ q" }
    ],
    correctOptionId: '4a',
    explanation: "Exclusive OR (⊕) is true only when the values differ."
  },
  {
    id: 5,
    text: "The proposition that is false when p is true and q is false and is true otherwise is denoted by:",
    options: [
      { id: '5a', text: "p → q" },
      { id: '5b', text: "p ∨ q" },
      { id: '5c', text: "p ∧ q" },
      { id: '5d', text: "p ↔ q" }
    ],
    correctOptionId: '5a',
    explanation: "Implication (→) is only false in the case 'T → F'."
  },
  {
    id: 6,
    text: "The proposition that is true when p and q have the same truth values and is false otherwise is denoted by:",
    options: [
      { id: '6a', text: "p ↔ q" },
      { id: '6b', text: "p ∨ q" },
      { id: '6c', text: "p → q" },
      { id: '6d', text: "p ⊕ q" }
    ],
    correctOptionId: '6a',
    explanation: "Biconditional (↔) is true when both are T or both are F."
  },
  {
    id: 7,
    text: "Which of the following sentences is a proposition?",
    options: [
      { id: '7a', text: "3 + 2 = 6" },
      { id: '7b', text: "Can you help me?" },
      { id: '7c', text: "Take this pencil." },
      { id: '7d', text: "x + 2 = 6" },
      { id: '7e', text: "Why should you study?" }
    ],
    correctOptionId: '7a',
    explanation: "A proposition must be a declarative sentence that is either true or false. '3+2=6' is false, but it's a proposition."
  },
  {
    id: 8,
    text: "Find the converse of p → ¬q.",
    options: [
      { id: '8a', text: "¬q → p" },
      { id: '8b', text: "q → ¬p" },
      { id: '8c', text: "q → p" },
      { id: '8d', text: "¬q → ¬p" }
    ],
    correctOptionId: '8a',
    explanation: "Converse of p → q is q → p. Swapping 'p' and '¬q' gives '¬q → p'."
  },
  {
    id: 9,
    text: "Find the contrapositive of ¬p → q.",
    options: [
      { id: '9a', text: "¬q → p" },
      { id: '9b', text: "q → ¬p" },
      { id: '9c', text: "p → ¬q" },
      { id: '9d', text: "¬q → ¬p" }
    ],
    correctOptionId: '9a',
    explanation: "Contrapositive of p → q is ¬q → ¬p. Negating and swapping '¬p' and 'q' gives '¬q → ¬(¬p)' which is '¬q → p'."
  },
  {
    id: 10,
    text: "Find the bitwise OR of 1011 0010 and 0110 0110.",
    options: [
      { id: '10a', text: "1111 0110" },
      { id: '10b', text: "0010 0011" },
      { id: '10c', text: "0011 0011" },
      { id: '10d', text: "1010 1001" }
    ],
    correctOptionId: '10a',
    explanation: "OR results in 1 if either bit is 1. (10110010 | 01100110) = 11110110."
  },
  {
    id: 11,
    text: "Find the bitwise AND of 1010 1010 and 1001 1001.",
    options: [
      { id: '11a', text: "1000 1000" },
      { id: '11b', text: "1011 1011" },
      { id: '11c', text: "0011 0011" },
      { id: '11d', text: "0101 0101" }
    ],
    correctOptionId: '11a',
    explanation: "AND results in 1 only if both bits are 1. (10101010 & 10011001) = 10001000."
  },
  {
    id: 12,
    text: "Find the bitwise XOR of 0111 0101 and 1101 0101.",
    options: [
      { id: '12a', text: "1010 0000" },
      { id: '12b', text: "1111 0111" },
      { id: '12c', text: "0101 0100" },
      { id: '12d', text: "0110 1010" }
    ],
    correctOptionId: '12a',
    explanation: "XOR results in 1 if bits are different. (01110101 ^ 11010101) = 10100000."
  },
  {
    id: 13,
    text: "What is the truth table result for (p → q) ∨ (¬p ↔ q) when (p,q) are (T,T), (T,F), (F,T), (F,F)?",
    options: [
      { id: '13a', text: "T, T, T, T" },
      { id: '13b', text: "T, T, F, T" },
      { id: '13c', text: "T, F, T, F" },
      { id: '13d', text: "F, F, T, F" }
    ],
    correctOptionId: '13a',
    explanation: "This expression is a tautology (always True)."
  },
  {
    id: 15,
    text: "Let p, q, r be 'Get A on final', 'Do exercises', 'Get A in class'. 'Getting A on final AND doing exercises is sufficient for getting A in class' is:",
    options: [
      { id: '15a', text: "(p ∧ q) → r" },
      { id: '15b', text: "r → (p ∧ q)" },
      { id: '15c', text: "(p ∨ q) → r" },
      { id: '15d', text: "(p ∧ q) ↔ r" }
    ],
    correctOptionId: '15a',
    explanation: "'Sufficient' indicates the premise (if) part of an implication."
  },
  {
    id: 16,
    text: "Let p: 'A on final', q: 'A in class'. 'To get an A in class, it is necessary for you to get an A on the final' is:",
    options: [
      { id: '16a', text: "q → p" },
      { id: '16b', text: "p → q" },
      { id: '16c', text: "q ↔ p" },
      { id: '16d', text: "p ⊕ q" }
    ],
    correctOptionId: '16a',
    explanation: "'Necessary' indicates the conclusion (then) part. Getting A in class (q) implies you got A on final (p)."
  },
  {
    id: 17,
    text: "Evaluate (10 1100 ⊕ 01 0101) ∧ 11 0110.",
    options: [
      { id: '17a', text: "11 0000" },
      { id: '17b', text: "11 0100" },
      { id: '17c', text: "00 0110" },
      { id: '17d', text: "11 1111" }
    ],
    correctOptionId: '17a',
    explanation: "Perform XOR first, then AND. (101100 ^ 010101) = 111001. 111001 & 110110 = 110000."
  },
  {
    id: 18,
    text: "Find the implication that is false.",
    options: [
      { id: '18a', text: "If 2 + 3 = 5, then pigs can fly." },
      { id: '18b', text: "If 2 + 3 = 6, then God exists." },
      { id: '18c', text: "If 2 + 3 = 4, then 3 + 3 = 5." },
      { id: '18d', text: "If pigs can fly, then 1 + 3 = 5." }
    ],
    correctOptionId: '18a',
    explanation: "p → q is False only when p is True and q is False. 2+3=5 is T, pigs fly is F."
  },
  {
    id: 21,
    text: "A compound proposition is a tautology if:",
    options: [
      { id: '21a', text: "it is always true, regardless of truth values of its parts." },
      { id: '21b', text: "it is always false." },
      { id: '21c', text: "it is true whenever parts are true." },
      { id: '21d', text: "it is only false when all parts are false." }
    ],
    correctOptionId: '21a',
    explanation: "Tautologies are logically always True."
  },
  {
    id: 23,
    text: "Which of the following is a distributive law?",
    options: [
      { id: '23a', text: "p ∧ (q ∨ r) ⇔ (p ∧ q) ∨ (p ∧ r)" },
      { id: '23b', text: "p ∨ (q ∨ r) ⇔ (p ∨ q) ∨ r" },
      { id: '23c', text: "p ∨ q ⇔ q ∨ p" },
      { id: '23d', text: "p ∧ (q ∧ r) ⇔ (p ∧ q) ∧ r" }
    ],
    correctOptionId: '23a',
    explanation: "Distributive laws show how one operator spreads over another."
  },
  {
    id: 26,
    text: "A proposition is a contingency if:",
    options: [
      { id: '26a', text: "it is neither a tautology nor a contradiction." },
      { id: '26b', text: "it is both a tautology and a contradiction." },
      { id: '26c', text: "it is not a contradiction." },
      { id: '26d', text: "it is not a tautology." }
    ],
    correctOptionId: '26a',
    explanation: "Contingencies are sometimes true and sometimes false."
  },

  // q/2категория: Quantifiers
  {
    id: 30,
    text: "Let P(x): 'x spends less than 3 hours in class'. Express ∃x¬P(x).",
    options: [
      { id: '30a', text: "There is a student who spends no less than 3 hours every weekday in class." },
      { id: '30b', text: "Every student doesn't spend more than 3 hours." },
      { id: '30c', text: "There is a student who spends less than 3 hours." },
      { id: '30d', text: "Every student spends no more than 6 hours." }
    ],
    correctOptionId: '30a',
    explanation: "∃ means 'there exists', and ¬P(x) means NOT 'less than 3 hours' (i.e., ≥ 3 hours)."
  },
  {
    id: 31,
    text: "P(x): 'can speak Kazakh', Q(x): 'knows Delphi'. 'There is a student who can speak Kazakh but doesn't know Delphi' is:",
    options: [
      { id: '31a', text: "∃x(P(x) ∧ ¬Q(x))" },
      { id: '31b', text: "∃x(P(x) ∨ ¬Q(x))" },
      { id: '31c', text: "∀x(P(x) → ¬Q(x))" },
      { id: '31d', text: "∃x(Q(x) → P(x))" }
    ],
    correctOptionId: '31a',
    explanation: "Direct translation: 'There exists' (∃x) 'speaks Kazakh' (P(x)) 'BUT' (∧) 'not Delphi' (¬Q(x))."
  },
  {
    id: 33,
    text: "Rewrite ¬∃y∀x P(x, y) so negations appear only within predicates.",
    options: [
      { id: '33a', text: "∀y∃x ¬P(x, y)" },
      { id: '33b', text: "∀y∀x P(x, y)" },
      { id: '33c', text: "∃y∀x ¬P(x, y)" },
      { id: '33d', text: "∃x∀y ¬P(x, y)" }
    ],
    correctOptionId: '33a',
    explanation: "De Morgan's for quantifiers: ¬∃ becomes ∀, and ¬∀ becomes ∃."
  },

  // q/3категория: Sets
  {
    id: 39,
    text: "Find the power set of {1, 2}.",
    options: [
      { id: '39a', text: "{ ∅, {1}, {2}, {1, 2} }" },
      { id: '39b', text: "{ ∅, {1, 2} }" },
      { id: '39c', text: "{ {0}, {1}, {2}, {1, 2} }" },
      { id: '39d', text: "{ {1}, {2} }" }
    ],
    correctOptionId: '39a',
    explanation: "A power set is the set of all subsets, including the empty set and the set itself."
  },
  {
    id: 40,
    text: "List members of {x | x is a negative integer greater than -8}.",
    options: [
      { id: '40a', text: "{-7, -6, -5, -4, -3, -2, -1}" },
      { id: '40b', text: "{-8, -7, -6, -5, -4, -3, -2, -1}" },
      { id: '40c', text: "{-9, -10, -11, ...}" },
      { id: '40d', text: "{0, 1, 2, 3, 4, 5, 6, 7}" }
    ],
    correctOptionId: '40a',
    explanation: "Integers between -8 and 0 (exclusive of -8)."
  },
  {
    id: 41,
    text: "List members of {x | x is an integer such that x^2 = 5}.",
    options: [
      { id: '41a', text: "∅" },
      { id: '41b', text: "{√5, -√5}" },
      { id: '41c', text: "{25}" },
      { id: '41d', text: "{5}" }
    ],
    correctOptionId: '41a',
    explanation: "No integer squared equals 5."
  },
  {
    id: 42,
    text: "Find the power set of {0, 1}.",
    options: [
      { id: '42a', text: "{∅, {0}, {1}, {0, 1}}" },
      { id: '42b', text: "{∅, {0, 1}}" },
      { id: '42c', text: "{{0}, {1}, {0, 1}}" },
      { id: '42d', text: "{{0}, {1}}" }
    ],
    correctOptionId: '42a',
    explanation: "Subsets of {0, 1} are ∅, {0}, {1}, and {0, 1}."
  },
  {
    id: 46,
    text: "U={0..9}, A={0,1,3,4,7,8}, B={0,2,4,6,7,8,9}. Find the complement of A ∪ B.",
    options: [
      { id: '46a', text: "{5}" },
      { id: '46b', text: "∅" },
      { id: '46c', text: "{0,1,2,3,4,6,7,8,9}" },
      { id: '46d', text: "{1, 3, 5}" }
    ],
    correctOptionId: '46a',
    explanation: "A ∪ B = {0,1,2,3,4,6,7,8,9}. The only missing element in U is 5."
  },
  {
    id: 48,
    text: "A set A is a proper subset of B if:",
    options: [
      { id: '48a', text: "Every element of A is in B and A ≠ B." },
      { id: '48b', text: "Every element of A is in B." },
      { id: '48c', text: "There is an element of B not in A." },
      { id: '48d', text: "A and B share at least one element." }
    ],
    correctOptionId: '48a',
    explanation: "A proper subset cannot be equal to the parent set."
  },
  {
    id: 51,
    text: "U={1..8}, A={1,3,4,5,8}. Find the complement of A.",
    options: [
      { id: '51a', text: "{2, 6, 7}" },
      { id: '51b', text: "{1, 3, 6}" },
      { id: '51c', text: "{4, 5, 8}" },
      { id: '51d', text: "{6}" }
    ],
    correctOptionId: '51a',
    explanation: "Complement contains all elements in U not in A."
  },

  // q/4категория: Functions
  {
    id: 65,
    text: "A function f: A → B is said to be injective (one-to-one) if:",
    options: [
      { id: '65a', text: "f(x) = f(y) implies x = y for all x, y in A." },
      { id: '65b', text: "For every b in B there is an a in A with f(a) = b." },
      { id: '65c', text: "f(x) < f(y) whenever x < y." },
      { id: '65d', text: "A and B have the same cardinality." }
    ],
    correctOptionId: '65a',
    explanation: "Injection means no two distinct inputs map to the same output."
  },
  {
    id: 66,
    text: "A function f: A → B is said to be surjective (onto) if:",
    options: [
      { id: '66a', text: "For every b in B there is an a in A with f(a) = b." },
      { id: '66b', text: "f(x) = f(y) implies x = y." },
      { id: '66c', text: "The domain is larger than the codomain." },
      { id: '66d', text: "Every element in A is mapped to a unique B." }
    ],
    correctOptionId: '66a',
    explanation: "Surjection means the range is equal to the codomain."
  },
  {
    id: 67,
    text: "A function is a bijection if it is:",
    options: [
      { id: '67a', text: "Both injective and surjective." },
      { id: '67b', text: "Either injective or surjective." },
      { id: '67c', text: "Injective but not surjective." },
      { id: '67d', text: "Mapping sets of different sizes." }
    ],
    correctOptionId: '67a',
    explanation: "A bijection is a perfect one-to-one correspondence."
  },
  {
    id: 69,
    text: "Find ⌈1.01⌉ (ceiling).",
    options: [
      { id: '69a', text: "2" },
      { id: '69b', text: "1" },
      { id: '69c', text: "1.01" },
      { id: '69d', text: "1.1" }
    ],
    correctOptionId: '69a',
    explanation: "Ceiling rounds up to the nearest integer."
  },
  {
    id: 70,
    text: "Find ⌈-2.34⌉ (ceiling).",
    options: [
      { id: '70a', text: "-2" },
      { id: '70b', text: "-3" },
      { id: '70c', text: "0" },
      { id: '70d', text: "-1" }
    ],
    correctOptionId: '70a',
    explanation: "-2 is greater than -2.34."
  },
  {
    id: 78,
    text: "f: Z → R with f(n) = 2n-3. What is the range?",
    options: [
      { id: '78a', text: "The set of odd integers." },
      { id: '78b', text: "The set of even integers." },
      { id: '78c', text: "The real numbers." },
      { id: '78d', text: "Natural numbers." }
    ],
    correctOptionId: '78a',
    explanation: "2n is always even, so 2n-3 is always odd."
  },
  {
    id: 86,
    text: "Find ⌊1.99⌋ (floor).",
    options: [
      { id: '86a', text: "1" },
      { id: '86b', text: "2" },
      { id: '86c', text: "1.98" },
      { id: '86d', text: "0" }
    ],
    correctOptionId: '86a',
    explanation: "Floor rounds down to the nearest integer."
  },

  // q/5категория: Counting
  {
    id: 96,
    text: "20 math majors, 40 CS majors. Ways to pick one rep who is either a math major or CS major?",
    options: [
      { id: '96a', text: "60" },
      { id: '96b', text: "800" },
      { id: '96c', text: "20" },
      { id: '96d', text: "40" }
    ],
    correctOptionId: '96a',
    explanation: "Sum Rule: 20 + 40 = 60."
  },
  {
    id: 97,
    text: "20 math majors, 40 CS majors. Ways to pick two reps (one math, one CS)?",
    options: [
      { id: '97a', text: "800" },
      { id: '97b', text: "60" },
      { id: '97c', text: "20" },
      { id: '97d', text: "80" }
    ],
    correctOptionId: '97a',
    explanation: "Product Rule: 20 * 40 = 800."
  },
  {
    id: 98,
    text: "How many strings of 5 letters start with 'B' (repetitions allowed)?",
    options: [
      { id: '98a', text: "26⁴" },
      { id: '98b', text: "25·24·23·22" },
      { id: '98c', text: "26·25·24·23" },
      { id: '98d', text: "26⁵" }
    ],
    correctOptionId: '98a',
    explanation: "1 choice for first letter (B), then 26 for each of the remaining 4 positions."
  },
  {
    id: 101,
    text: "Find C(8, 5).",
    options: [
      { id: '101a', text: "56" },
      { id: '101b', text: "70" },
      { id: '101c', text: "35" },
      { id: '101d', text: "840" }
    ],
    correctOptionId: '101a',
    explanation: "C(8,5) = 8! / (5!3!) = 56."
  },
  {
    id: 102,
    text: "Find the coefficient of x⁷y⁵ in (x + y)¹².",
    options: [
      { id: '102a', text: "792" },
      { id: '102b', text: "21" },
      { id: '102c', text: "72" },
      { id: '102d', text: "99" }
    ],
    correctOptionId: '102a',
    explanation: "Binomial theorem: coefficient is C(12, 5) or C(12, 7) = 792."
  },

  // q/6категория: Ciphers & Modulo
  {
    id: 113,
    text: "Encrypt 'CIPHER' using Caesar cipher with key 3.",
    options: [
      { id: '113a', text: "FLSKHU" },
      { id: '113b', text: "FMKSHU" },
      { id: '113c', text: "EKRJGT" },
      { id: '113d', text: "BLOGDQ" }
    ],
    correctOptionId: '113a',
    explanation: "Shift each letter 3 positions right: C->F, I->L, P->S, etc."
  },
  {
    id: 118,
    text: "The quotient and remainder when -1 is divided by 3.",
    options: [
      { id: '118a', text: "-1 and 2" },
      { id: '118b', text: "0 and -1" },
      { id: '118c', text: "-1 and -2" },
      { id: '118d', text: "1 and 2" }
    ],
    correctOptionId: '118a',
    explanation: "-1 = 3(-1) + 2. Remainder must be non-negative."
  },
  {
    id: 120,
    text: "Find quotient q and remainder r for -11 divided by 3.",
    options: [
      { id: '120a', text: "q=-4, r=1" },
      { id: '120b', text: "q=1, r=4" },
      { id: '120c', text: "q=-3, r=4" },
      { id: '120d', text: "q=1, r=-3" }
    ],
    correctOptionId: '120a',
    explanation: "-11 = 3(-4) + 1."
  },

  // q/7категория: Relations
  {
    id: 124,
    text: "Pairs in R from A={0..4} to B={0..3} where a + b = 3.",
    options: [
      { id: '124a', text: "{(0, 3), (1, 2), (2, 1), (3, 0)}" },
      { id: '124b', text: "{(0, 3), (1, 2), (2, 1), (3, 0), (4, -1)}" },
      { id: '124c', text: "{(0, 0), (1, 1), (2, 2), (3, 3)}" },
      { id: '124d', text: "{(1, 2), (2, 1)}" }
    ],
    correctOptionId: '124a',
    explanation: "Check which integer pairs in the sets sum to 3."
  },
  {
    id: 130,
    text: "A relation S on set B is antisymmetric if:",
    options: [
      { id: '130a', text: "(a, b) ∈ S and (b, a) ∈ S implies a = b." },
      { id: '130b', text: "(b, c) ∈ S whenever (c, b) ∈ S." },
      { id: '130c', text: "(b, b) ∈ S for all elements." },
      { id: '130d', text: "It is not symmetric." }
    ],
    correctOptionId: '130a',
    explanation: "Antisymmetry prevents distinct items from mapping back and forth."
  },
  {
    id: 132,
    text: "Let R = {(a, b) | a ≤ b} on integers. R is:",
    options: [
      { id: '132a', text: "reflexive, antisymmetric and transitive" },
      { id: '132b', text: "reflexive, symmetric and transitive" },
      { id: '132c', text: "antisymmetric and symmetric" },
      { id: '132d', text: "non-reflexive" }
    ],
    correctOptionId: '132a',
    explanation: "The ≤ relation is a classic Partial Order (reflexive, antisymmetric, transitive)."
  },
  {
    id: 138,
    text: "Which of the following are posets (partially ordered sets)?",
    options: [
      { id: '138a', text: "(Z, ≥)" },
      { id: '138b', text: "(Z, ≠)" },
      { id: '138c', text: "(Z, <)" },
      { id: '138d', text: "(Z+, >)" }
    ],
    correctOptionId: '138a',
    explanation: "A poset must be reflexive, antisymmetric, and transitive. '≥' satisfies this."
  },

  // q/8категория: Equivalence & Ordering
  {
    id: 141,
    text: "Find maximal elements of {1, 2, 3, 5, 6, 15, 30, 45} under divisibility (|).",
    options: [
      { id: '141a', text: "30, 45" },
      { id: '141b', text: "45" },
      { id: '141c', text: "15, 30, 45" },
      { id: '141d', text: "1" }
    ],
    correctOptionId: '141a',
    explanation: "Maximal elements are not divided by any other element in the set (except themselves)."
  },
  {
    id: 144,
    text: "Equivalence class of 1 for congruence modulo 3?",
    options: [
      { id: '144a', text: "{…, –5, –2, 1, 4, 7, …}" },
      { id: '144b', text: "{…, –6, –3, 0, 3, 6, …}" },
      { id: '144c', text: "{…, –4, –1, 2, 5, 8, …}" },
      { id: '144d', text: "{1, 4, 7}" }
    ],
    correctOptionId: '144a',
    explanation: "x ≡ 1 (mod 3) means x = 3k + 1."
  },

  // q/9категория: Mixed Mastery
  {
    id: 185,
    text: "Find ⌊1.98⌋.",
    options: [
      { id: '185a', text: "1" },
      { id: '185b', text: "2" },
      { id: '185c', text: "1.9" },
      { id: '185d', text: "0" }
    ],
    correctOptionId: '185a',
    explanation: "Floor of 1.98 is 1."
  },
  {
    id: 189,
    text: "How many bit strings of length 7 begin and end with 0?",
    options: [
      { id: '189a', text: "32" },
      { id: '189b', text: "128" },
      { id: '189c', text: "64" },
      { id: '189d', text: "16" }
    ],
    correctOptionId: '189a',
    explanation: "2 bits are fixed (ends), 5 bits are free to be 0 or 1. 2⁵ = 32."
  },
  {
    id: 197,
    text: "How many prime numbers are there between 1 to 20?",
    options: [
      { id: '197a', text: "8" },
      { id: '197b', text: "7" },
      { id: '197c', text: "9" },
      { id: '197d', text: "10" }
    ],
    correctOptionId: '197a',
    explanation: "Primes: 2, 3, 5, 7, 11, 13, 17, 19."
  },
  {
    id: 198,
    text: "Evaluate 6359 mod 320.",
    options: [
      { id: '198a', text: "279" },
      { id: '198b', text: "319" },
      { id: '198c', text: "1" },
      { id: '198d', text: "159" }
    ],
    correctOptionId: '198a',
    explanation: "6359 = 320 * 19 + 279."
  },
  {
    id: 199,
    text: "Find the greatest element of the poset ({1, 2, 3, 6, 7, 42, 126}, |).",
    options: [
      { id: '199a', text: "126" },
      { id: '199b', text: "42" },
      { id: '199c', text: "7" },
      { id: '199d', text: "None" }
    ],
    correctOptionId: '199a',
    explanation: "126 is divided by all other elements in this specific set."
  }
];
