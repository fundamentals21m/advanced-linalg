// Chapter 5: Determinants (Sections 25-31)
// Based on Hoffman & Kunze Chapter 5
import type { QuizQuestion } from './types';

// Section 25: Commutative Rings
export const section25Quiz: QuizQuestion[] = [
  {
    id: 's25-q1',
    question: 'A commutative ring with identity differs from a field in that:',
    options: ['It may lack multiplicative inverses', 'It lacks additive inverses', 'Multiplication is not defined', 'It has no identity'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A commutative ring with identity may have non-zero elements without multiplicative inverses.'
  },
  {
    id: 's25-q2',
    question: 'ℤ (the integers) is:',
    options: ['A field', 'A commutative ring with identity', 'Not a ring', 'A non-commutative ring'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'ℤ is a commutative ring with identity 1, but it is not a field (2 has no inverse).'
  }
];

// Section 26: Determinant Functions
export const section26Quiz: QuizQuestion[] = [
  {
    id: 's26-q1',
    question: 'A determinant function D on n × n matrices is:',
    options: ['Linear in each row', 'Alternating and multilinear', 'Always positive', 'Equal to the trace'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The determinant is multilinear (linear in each row) and alternating (changes sign when rows are swapped).'
  },
  {
    id: 's26-q2',
    question: 'If A has two identical rows, then det(A) equals:',
    options: ['1', '-1', '0', 'Undefined'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The alternating property implies det = 0 when two rows are equal.'
  },
  {
    id: 's26-q3',
    question: 'det(I) where I is the n × n identity matrix equals:',
    options: ['0', '1', 'n', 'n!'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The determinant of the identity matrix is 1 (normalization condition).'
  },
  {
    id: 's26-q4',
    question: 'If we multiply one row of A by scalar c, the determinant becomes:',
    options: ['c·det(A)', 'det(A)/c', 'det(A) + c', 'c²·det(A)'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Multilinearity: scaling one row by c scales the determinant by c.'
  }
];

// Section 27: Permutations and the Uniqueness of Determinants
export const section27Quiz: QuizQuestion[] = [
  {
    id: 's27-q1',
    question: 'The sign (signature) of a permutation σ is:',
    options: ['Always +1', 'Always -1', '+1 or -1 depending on parity', '0'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'sgn(σ) = +1 for even permutations, -1 for odd permutations.'
  },
  {
    id: 's27-q2',
    question: 'The determinant of an n × n matrix A can be expressed as a sum over:',
    options: ['n terms', 'n² terms', 'n! terms', '2ⁿ terms'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'det(A) = Σ_{σ ∈ Sₙ} sgn(σ) A_{1,σ(1)} ··· A_{n,σ(n)} has n! terms.'
  },
  {
    id: 's27-q3',
    question: 'The uniqueness of the determinant means:',
    options: ['Every matrix has exactly one determinant', 'There is only one alternating multilinear function with D(I) = 1', 'Determinants are always unique', 'All of the above'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The determinant is the unique alternating n-linear function with D(I) = 1.'
  }
];

// Section 28: Additional Properties of Determinants
export const section28Quiz: QuizQuestion[] = [
  {
    id: 's28-q1',
    question: 'det(AB) equals:',
    options: ['det(A) + det(B)', 'det(A) · det(B)', 'det(A)/det(B)', 'det(A + B)'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The determinant is multiplicative: det(AB) = det(A)det(B).'
  },
  {
    id: 's28-q2',
    question: 'det(Aᵀ) equals:',
    options: ['1/det(A)', '-det(A)', 'det(A)', '(det(A))²'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The determinant of the transpose equals the original determinant.'
  },
  {
    id: 's28-q3',
    question: 'A is invertible if and only if:',
    options: ['det(A) = 1', 'det(A) ≠ 0', 'det(A) > 0', 'det(A) = n'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A matrix is invertible iff its determinant is non-zero.'
  },
  {
    id: 's28-q4',
    question: 'For invertible A, det(A⁻¹) equals:',
    options: ['det(A)', '-det(A)', '1/det(A)', '(det(A))²'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'det(A⁻¹) = 1/det(A) since det(A)det(A⁻¹) = det(I) = 1.'
  },
  {
    id: 's28-q5',
    question: 'The cofactor Cᵢⱼ of entry aᵢⱼ is:',
    options: ['aᵢⱼ', '(-1)^{i+j} times the (i,j) minor', 'The (i,j) minor', 'det(A)/aᵢⱼ'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cᵢⱼ = (-1)^{i+j} Mᵢⱼ where Mᵢⱼ is the determinant of the (n-1)×(n-1) submatrix.'
  }
];

// Section 29: Modules
export const section29Quiz: QuizQuestion[] = [
  {
    id: 's29-q1',
    question: 'A module over a ring R is similar to a vector space but:',
    options: ['Scalars come from a ring, not necessarily a field', 'There is no addition', 'Vectors must be finite', 'It has no zero element'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Modules generalize vector spaces by allowing scalars from a ring (which may lack inverses).'
  },
  {
    id: 's29-q2',
    question: 'A free module of rank n is:',
    options: ['Always infinite', 'Isomorphic to Rⁿ', 'Has exactly n elements', 'Has no basis'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A free module of rank n is isomorphic to Rⁿ and has a basis of n elements.'
  }
];

// Section 30: Multilinear Functions
export const section30Quiz: QuizQuestion[] = [
  {
    id: 's30-q1',
    question: 'A k-linear function on V^k is:',
    options: ['Degree k polynomial', 'Linear in each of k arguments', 'A function to F^k', 'Always symmetric'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A k-linear (multilinear) function is linear in each of its k arguments separately.'
  },
  {
    id: 's30-q2',
    question: 'An alternating multilinear function satisfies:',
    options: ['f(v, v, ...) = 0 when any two arguments are equal', 'f is symmetric', 'f(v₁, ..., vₖ) = f(v₁) + ... + f(vₖ)', 'f is constant'],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Alternating means f = 0 when two arguments coincide, equivalently, swapping arguments negates f.'
  }
];

// Section 31: The Grassman Ring
export const section31Quiz: QuizQuestion[] = [
  {
    id: 's31-q1',
    question: 'The exterior (Grassman) algebra ∧V is:',
    options: ['A vector space', 'An algebra with an alternating product', 'A field', 'A module only'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The exterior algebra has an alternating (wedge) product satisfying v ∧ v = 0.'
  },
  {
    id: 's31-q2',
    question: 'v ∧ w equals:',
    options: ['w ∧ v', '-w ∧ v', 'v + w', 'v · w'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The wedge product is anti-commutative: v ∧ w = -w ∧ v.'
  },
  {
    id: 's31-q3',
    question: 'If dim(V) = n, then dim(∧ᵏV) equals:',
    options: ['n', 'k', 'C(n,k) = n!/(k!(n-k)!)', 'nᵏ'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The k-th exterior power has dimension "n choose k" = C(n,k).'
  }
];

// Chapter 5 Comprehensive Quiz
export const chapter05Quiz: QuizQuestion[] = [
  {
    id: 'ch05-q1',
    question: 'det(cA) for an n × n matrix A equals:',
    options: ['c·det(A)', 'cⁿ·det(A)', 'det(A)/c', 'c + det(A)'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each of n rows is multiplied by c, so det(cA) = cⁿ det(A).'
  },
  {
    id: 'ch05-q2',
    question: 'Cramer\'s rule expresses the solution of Ax = b in terms of:',
    options: ['Inverses only', 'Ratios of determinants', 'Eigenvalues', 'Traces'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'xᵢ = det(Aᵢ)/det(A) where Aᵢ has the i-th column replaced by b.'
  },
  {
    id: 'ch05-q3',
    question: 'The determinant of an upper triangular matrix is:',
    options: ['0', '1', 'The product of diagonal entries', 'The sum of diagonal entries'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For triangular matrices, det = product of diagonal entries.'
  },
  {
    id: 'ch05-q4',
    question: 'If A is obtained from B by adding a multiple of one row to another:',
    options: ['det(A) = -det(B)', 'det(A) = 0', 'det(A) = det(B)', 'det(A) = 2det(B)'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Adding a multiple of one row to another doesn\'t change the determinant.'
  },
  {
    id: 'ch05-q5',
    question: 'det of a 2 × 2 matrix [[a,b],[c,d]] equals:',
    options: ['a + d', 'ac + bd', 'ad - bc', 'ab - cd'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'det([[a,b],[c,d]]) = ad - bc.'
  },
  {
    id: 'ch05-q6',
    question: 'The determinant is used to compute:',
    options: ['Only eigenvalues', 'Area/volume scaling, invertibility, eigenvalues', 'Only row rank', 'Only column rank'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Determinants determine invertibility, scaling of areas/volumes, and appear in eigenvalue computations.'
  },
  {
    id: 'ch05-q7',
    question: 'For the exterior algebra ∧V with dim(V) = n, the total dimension of ∧V is:',
    options: ['n', 'n!', '2ⁿ', 'n²'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'dim(∧V) = Σₖ C(n,k) = 2ⁿ.'
  },
  {
    id: 'ch05-q8',
    question: 'A square matrix with determinant 0 is called:',
    options: ['Invertible', 'Singular', 'Orthogonal', 'Unitary'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A singular matrix has determinant zero and is not invertible.'
  },
  {
    id: 'ch05-q9',
    question: 'The adjugate (classical adjoint) of A satisfies:',
    options: ['A · adj(A) = det(A) · I', 'adj(A) = A⁻¹', 'adj(A) = Aᵀ', 'A + adj(A) = I'],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A · adj(A) = adj(A) · A = det(A) · I.'
  },
  {
    id: 'ch05-q10',
    question: 'If det(A) = 5, then det(2A) for a 3 × 3 matrix equals:',
    options: ['10', '8', '40', '125'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'det(2A) = 2³ · det(A) = 8 · 5 = 40.'
  }
];
