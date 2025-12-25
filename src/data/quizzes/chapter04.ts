// Chapter 4: Polynomials (Sections 20-24)
// Based on Hoffman & Kunze Chapter 4
import type { QuizQuestion } from './types';

// Section 20: Algebras
export const section20Quiz: QuizQuestion[] = [
  {
    id: 's20-q1',
    question: 'An algebra over F is a vector space that also has:',
    options: ['An inner product', 'A compatible multiplication', 'A norm', 'A division'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An algebra is a vector space with a bilinear multiplication satisfying associativity axioms.'
  },
  {
    id: 's20-q2',
    question: 'The algebra L(V, V) of linear operators on V is:',
    options: ['Commutative', 'Non-associative', 'Generally non-commutative', 'A field'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'L(V, V) is an associative algebra but composition is not commutative in general.'
  },
  {
    id: 's20-q3',
    question: 'A subalgebra must be closed under:',
    options: ['Only addition', 'Addition, scalar multiplication, and the algebra multiplication', 'Only multiplication', 'Only scalar multiplication'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A subalgebra must be closed under all three operations.'
  }
];

// Section 21: The Algebra of Polynomials
export const section21Quiz: QuizQuestion[] = [
  {
    id: 's21-q1',
    question: 'The degree of the zero polynomial is:',
    options: ['0', '1', '-1', 'Undefined or -∞'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The zero polynomial has no leading term, so its degree is typically undefined or taken as -∞.'
  },
  {
    id: 's21-q2',
    question: 'If deg(f) = m and deg(g) = n, then deg(fg) equals:',
    options: ['max(m, n)', 'min(m, n)', 'm + n', 'mn'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The degree of a product is the sum of degrees: deg(fg) = deg(f) + deg(g).'
  },
  {
    id: 's21-q3',
    question: 'F[x] is an integral domain, which means:',
    options: ['Every element is invertible', 'fg = 0 implies f = 0 or g = 0', 'It has characteristic 0', 'It is finite'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'An integral domain has no zero divisors: the product of non-zero elements is non-zero.'
  },
  {
    id: 's21-q4',
    question: 'The set of polynomials of degree ≤ n forms:',
    options: ['A subalgebra', 'A subspace (not subalgebra)', 'An ideal', 'A field'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomials of degree ≤ n form a subspace but not a subalgebra (not closed under multiplication).'
  }
];

// Section 22: Lagrange Interpolation
export const section22Quiz: QuizQuestion[] = [
  {
    id: 's22-q1',
    question: 'Given n+1 distinct points (t₀, c₀), ..., (tₙ, cₙ), there exists a unique polynomial of degree ≤ n passing through them. This is:',
    options: ['Always false', 'Lagrange interpolation theorem', 'Only true for n = 1', 'Only true over ℝ'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Lagrange interpolation guarantees existence and uniqueness of an interpolating polynomial of degree ≤ n.'
  },
  {
    id: 's22-q2',
    question: 'The Lagrange interpolation formula uses polynomials Lⱼ(x) that satisfy:',
    options: ['Lⱼ(tᵢ) = 1 for all i', 'Lⱼ(tᵢ) = δᵢⱼ', 'Lⱼ(x) = xʲ', 'Lⱼ(tⱼ) = 0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Lagrange basis polynomials satisfy Lⱼ(tᵢ) = 1 if i = j, and 0 otherwise.'
  },
  {
    id: 's22-q3',
    question: 'If a polynomial f of degree n has n+1 distinct roots, then:',
    options: ['f has more roots', 'f is the zero polynomial', 'f = 1', 'This is impossible'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A non-zero polynomial of degree n has at most n roots, so n+1 roots implies f = 0.'
  }
];

// Section 23: Polynomial Ideals
export const section23Quiz: QuizQuestion[] = [
  {
    id: 's23-q1',
    question: 'An ideal I in F[x] is principal, meaning:',
    options: ['I contains only constants', 'I = (g) for some polynomial g', 'I is the whole ring', 'I is empty'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every ideal in F[x] is principal: I = (g) = {fg : f ∈ F[x]} for some g.'
  },
  {
    id: 's23-q2',
    question: 'The division algorithm in F[x] states that for f, g with g ≠ 0:',
    options: ['f = qg for some q', 'f = qg + r with deg(r) < deg(g)', 'f/g is a polynomial', 'f = g + r'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'f = qg + r where q is the quotient and r is the remainder with deg(r) < deg(g).'
  },
  {
    id: 's23-q3',
    question: 'The greatest common divisor gcd(f, g) can be written as:',
    options: ['fg', 'f + g', 'af + bg for some polynomials a, b', 'f/g'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Bézout\'s identity: gcd(f, g) = af + bg for some polynomials a, b.'
  },
  {
    id: 's23-q4',
    question: 'f and g are relatively prime (coprime) iff:',
    options: ['gcd(f, g) = 1 (a non-zero constant)', 'f divides g', 'g divides f', 'fg = 0'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Relatively prime means gcd(f, g) is a unit (non-zero constant), typically normalized to 1.'
  }
];

// Section 24: The Prime Factorization of a Polynomial
export const section24Quiz: QuizQuestion[] = [
  {
    id: 's24-q1',
    question: 'A polynomial p is irreducible over F if:',
    options: ['p has degree 1', 'p cannot be factored as a product of lower-degree polynomials over F', 'p has no roots', 'p is monic'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'p is irreducible if it\'s non-constant and its only factorizations are p = (unit)·(associate).'
  },
  {
    id: 's24-q2',
    question: 'Over ℂ, every irreducible polynomial has degree:',
    options: ['0', '1', '2', 'Any degree'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the fundamental theorem of algebra, every non-constant polynomial over ℂ has a root, so irreducibles have degree 1.'
  },
  {
    id: 's24-q3',
    question: 'Unique factorization in F[x] means:',
    options: ['Every polynomial has a factorization', 'Factorization into irreducibles is unique up to order and units', 'Only monic polynomials factor', 'Factorization is never unique'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Unique factorization: every non-zero polynomial factors uniquely into irreducibles (up to order and unit factors).'
  },
  {
    id: 's24-q4',
    question: 'Over ℝ, irreducible polynomials have degree:',
    options: ['Only 1', '1 or 2', 'Only 2', 'Any degree'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Over ℝ, irreducibles are linear or irreducible quadratics (with negative discriminant).'
  }
];

// Chapter 4 Comprehensive Quiz
export const chapter04Quiz: QuizQuestion[] = [
  {
    id: 'ch04-q1',
    question: 'F[x] is:',
    options: ['A field', 'A principal ideal domain', 'Not an integral domain', 'A finite ring'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'F[x] is a principal ideal domain (PID): every ideal is generated by one element.'
  },
  {
    id: 'ch04-q2',
    question: 'The dimension of the space of polynomials of degree ≤ n over F is:',
    options: ['n', 'n + 1', '2n', 'Infinite'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The space has basis {1, x, x², ..., xⁿ}, which has n + 1 elements.'
  },
  {
    id: 'ch04-q3',
    question: 'x² + 1 is irreducible over:',
    options: ['ℂ', 'ℝ', 'Both ℂ and ℝ', 'Neither'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'x² + 1 is irreducible over ℝ (no real roots) but factors as (x-i)(x+i) over ℂ.'
  },
  {
    id: 'ch04-q4',
    question: 'If f divides g and g divides f in F[x], then:',
    options: ['f = g', 'f and g differ by a non-zero scalar', 'f = 0', 'g = 0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'f | g and g | f implies f and g are associates, differing by a unit (non-zero scalar).'
  },
  {
    id: 'ch04-q5',
    question: 'The roots of f(x) = x³ - 2 over ℚ are:',
    options: ['All in ℚ', 'None in ℚ', 'One in ℚ', 'Two in ℚ'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The real cube root of 2 is irrational, and the complex roots are also not in ℚ.'
  },
  {
    id: 'ch04-q6',
    question: 'deg(f + g) is:',
    options: ['Always deg(f) + deg(g)', 'max(deg(f), deg(g))', 'At most max(deg(f), deg(g))', 'min(deg(f), deg(g))'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'deg(f + g) ≤ max(deg(f), deg(g)), with equality when deg(f) ≠ deg(g).'
  },
  {
    id: 'ch04-q7',
    question: 'A monic polynomial is one where:',
    options: ['All coefficients are 1', 'The constant term is 1', 'The leading coefficient is 1', 'The degree is 1'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A monic polynomial has leading coefficient equal to 1.'
  },
  {
    id: 'ch04-q8',
    question: 'The ideal generated by x and 2 in ℤ[x] contains:',
    options: ['Only multiples of 2x', 'All polynomials with even constant term', 'All of ℤ[x]', 'Only x and 2'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '(x, 2) = {fx + 2g : f, g ∈ ℤ[x]} consists of polynomials with even constant term.'
  },
  {
    id: 'ch04-q9',
    question: 'The Euclidean algorithm applied to polynomials finds:',
    options: ['Their product', 'Their sum', 'Their greatest common divisor', 'Their least common multiple'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Euclidean algorithm computes gcd(f, g) via repeated division.'
  },
  {
    id: 'ch04-q10',
    question: 'A polynomial f ∈ F[x] is a unit iff:',
    options: ['f = 1', 'f is monic', 'f is a non-zero constant', 'deg(f) = 1'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Units in F[x] are exactly the non-zero constants (elements of F*).'
  }
];
