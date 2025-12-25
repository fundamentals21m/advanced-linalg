// Chapter 6: Elementary Canonical Forms (Sections 32-39)
// Based on Hoffman & Kunze Chapter 6
import type { QuizQuestion } from './types';

// Section 32: Introduction
export const section32Quiz: QuizQuestion[] = [
  {
    id: 's32-q1',
    question: 'The goal of studying canonical forms is to:',
    options: ['Make matrices larger', 'Find simple matrix representatives for linear operators', 'Avoid using matrices', 'Compute determinants'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Canonical forms provide the simplest possible matrix representation of a linear operator.'
  },
  {
    id: 's32-q2',
    question: 'Two matrices represent the same linear operator iff they are:',
    options: ['Equal', 'Similar', 'Transpose of each other', 'Have the same trace'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Similar matrices (A = P⁻¹BP) represent the same operator in different bases.'
  }
];

// Section 33: Characteristic Values
export const section33Quiz: QuizQuestion[] = [
  {
    id: 's33-q1',
    question: 'λ is an eigenvalue of T iff:',
    options: ['T(v) = v for some v', 'T(v) = λv for some non-zero v', 'det(T) = λ', 'trace(T) = λ'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An eigenvalue λ satisfies T(v) = λv for some non-zero eigenvector v.'
  },
  {
    id: 's33-q2',
    question: 'The characteristic polynomial of T is:',
    options: ['det(T)', 'det(T - λI)', 'trace(T - λI)', 'det(T)λ'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The characteristic polynomial is f(λ) = det(T - λI) or det(λI - T).'
  },
  {
    id: 's33-q3',
    question: 'The eigenvalues of T are the:',
    options: ['Diagonal entries', 'Roots of the characteristic polynomial', 'Entries of T', 'Pivots'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Eigenvalues are exactly the roots of the characteristic polynomial.'
  },
  {
    id: 's33-q4',
    question: 'If V is n-dimensional over F, the characteristic polynomial has degree:',
    options: ['1', 'n - 1', 'n', '2n'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The characteristic polynomial has degree n = dim(V).'
  }
];

// Section 34: Annihilating Polynomials
export const section34Quiz: QuizQuestion[] = [
  {
    id: 's34-q1',
    question: 'A polynomial p annihilates T if:',
    options: ['p(T) = I', 'p(T) = 0', 'p(λ) = 0 for some eigenvalue', 'deg(p) = n'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'p annihilates T means p(T) = 0 (the zero operator).'
  },
  {
    id: 's34-q2',
    question: 'The minimal polynomial of T is:',
    options: ['The characteristic polynomial', 'The monic polynomial of least degree annihilating T', 'Always degree 1', 'Not unique'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The minimal polynomial is the unique monic polynomial of smallest degree that annihilates T.'
  },
  {
    id: 's34-q3',
    question: 'The Cayley-Hamilton theorem states:',
    options: ['Every matrix is diagonalizable', 'The minimal polynomial equals the characteristic polynomial', 'Every operator is annihilated by its characteristic polynomial', 'Eigenvalues are always real'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Cayley-Hamilton: if f is the characteristic polynomial of T, then f(T) = 0.'
  },
  {
    id: 's34-q4',
    question: 'The minimal polynomial divides:',
    options: ['Nothing', 'Every annihilating polynomial', 'Only the characteristic polynomial', 'The trace'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The minimal polynomial divides every polynomial that annihilates T.'
  }
];

// Section 35: Invariant Subspaces
export const section35Quiz: QuizQuestion[] = [
  {
    id: 's35-q1',
    question: 'A subspace W is T-invariant if:',
    options: ['T(W) = V', 'T(W) ⊆ W', 'W ⊆ T(V)', 'T(W) = {0}'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'W is T-invariant if T maps W into itself: T(w) ∈ W for all w ∈ W.'
  },
  {
    id: 's35-q2',
    question: 'The eigenspace for eigenvalue λ is:',
    options: ['Always 1-dimensional', 'T-invariant', 'Equal to V', 'Empty'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Eigenspaces ker(T - λI) are always T-invariant.'
  },
  {
    id: 's35-q3',
    question: '{0} and V are called:',
    options: ['Proper subspaces', 'Trivial invariant subspaces', 'Eigenspaces', 'Generalized eigenspaces'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '{0} and V are trivially T-invariant for any T.'
  }
];

// Section 36: Simultaneous Triangulation; Simultaneous Diagonalization
export const section36Quiz: QuizQuestion[] = [
  {
    id: 's36-q1',
    question: 'T is triangulable if:',
    options: ['T has all eigenvalues in F', 'There exists a basis with respect to which the matrix is upper triangular', 'T is diagonalizable', 'T = 0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'T is triangulable iff there\'s a basis giving an upper triangular matrix.'
  },
  {
    id: 's36-q2',
    question: 'A family of operators is simultaneously diagonalizable if:',
    options: ['Each is diagonalizable', 'They all commute and each is diagonalizable', 'They have the same eigenvalues', 'They are all zero'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Simultaneous diagonalizability requires commuting diagonalizable operators.'
  }
];

// Section 37: Direct-Sum Decompositions
export const section37Quiz: QuizQuestion[] = [
  {
    id: 's37-q1',
    question: 'V = W₁ ⊕ W₂ (direct sum) means:',
    options: ['W₁ = W₂', 'V = W₁ + W₂ and W₁ ∩ W₂ = {0}', 'W₁ ⊆ W₂', 'dim(V) = 2'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Direct sum means V is the sum and the intersection is trivial.'
  },
  {
    id: 's37-q2',
    question: 'A projection E satisfies:',
    options: ['E² = I', 'E² = E', 'E = 0', 'E² = -E'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A projection is idempotent: E² = E.'
  },
  {
    id: 's37-q3',
    question: 'If V = W₁ ⊕ W₂, the projection onto W₁ along W₂ is:',
    options: ['Not unique', 'Uniquely determined', 'Always zero', 'The identity'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The direct sum decomposition uniquely determines the projections.'
  }
];

// Section 38: Invariant Direct Sums
export const section38Quiz: QuizQuestion[] = [
  {
    id: 's38-q1',
    question: 'If V = W₁ ⊕ ... ⊕ Wₖ with each Wᵢ T-invariant, then T is determined by:',
    options: ['Its action on W₁ only', 'Its restriction to each Wᵢ', 'Its trace', 'Its determinant'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'T is completely determined by its restrictions T|_{Wᵢ} to the invariant subspaces.'
  },
  {
    id: 's38-q2',
    question: 'The matrix of T relative to a basis compatible with V = W₁ ⊕ ... ⊕ Wₖ is:',
    options: ['Diagonal', 'Block diagonal', 'Upper triangular', 'The identity'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With basis vectors from each Wᵢ grouped together, the matrix is block diagonal.'
  }
];

// Section 39: The Primary Decomposition Theorem
export const section39Quiz: QuizQuestion[] = [
  {
    id: 's39-q1',
    question: 'The primary decomposition theorem says if the minimal polynomial factors as p₁^{r₁}...pₖ^{rₖ}:',
    options: ['T is diagonalizable', 'V = ker(p₁(T)^{r₁}) ⊕ ... ⊕ ker(pₖ(T)^{rₖ})', 'T = 0', 'All eigenvalues are distinct'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Primary decomposition: V decomposes as a direct sum of primary components ker(pᵢ(T)^{rᵢ}).'
  },
  {
    id: 's39-q2',
    question: 'The generalized eigenspace for λ is:',
    options: ['ker(T - λI)', 'ker((T - λI)ⁿ) for sufficiently large n', 'V', '{0}'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The generalized eigenspace is ker((T - λI)^k) for large enough k.'
  },
  {
    id: 's39-q3',
    question: 'T is diagonalizable iff the minimal polynomial:',
    options: ['Has degree n', 'Equals the characteristic polynomial', 'Has no repeated roots', 'Is constant'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'T is diagonalizable iff the minimal polynomial splits into distinct linear factors.'
  }
];

// Chapter 6 Comprehensive Quiz
export const chapter06Quiz: QuizQuestion[] = [
  {
    id: 'ch06-q1',
    question: 'The sum of eigenvalues equals:',
    options: ['det(T)', 'trace(T)', 'rank(T)', '0'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The trace equals the sum of eigenvalues (with multiplicity).'
  },
  {
    id: 'ch06-q2',
    question: 'The product of eigenvalues equals:',
    options: ['trace(T)', 'det(T)', 'rank(T)', 'nullity(T)'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The determinant equals the product of eigenvalues (with multiplicity).'
  },
  {
    id: 'ch06-q3',
    question: 'T is nilpotent if:',
    options: ['T = 0', 'Tᵏ = 0 for some k', 'T has eigenvalue 0', 'T is invertible'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Nilpotent means some power of T is zero.'
  },
  {
    id: 'ch06-q4',
    question: 'The only eigenvalue of a nilpotent operator is:',
    options: ['1', '-1', '0', 'No eigenvalues'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If T is nilpotent and Tv = λv with v ≠ 0, then 0 = Tᵏv = λᵏv, so λ = 0.'
  },
  {
    id: 'ch06-q5',
    question: 'Similar matrices have:',
    options: ['Different eigenvalues', 'The same characteristic polynomial', 'Different ranks', 'The same entries'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Similar matrices share eigenvalues, characteristic polynomial, trace, determinant, rank.'
  },
  {
    id: 'ch06-q6',
    question: 'A matrix is diagonalizable iff:',
    options: ['It is symmetric', 'It has n linearly independent eigenvectors', 'It is invertible', 'det ≠ 0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'An n × n matrix is diagonalizable iff it has n linearly independent eigenvectors.'
  },
  {
    id: 'ch06-q7',
    question: 'Eigenvectors for distinct eigenvalues are:',
    options: ['Equal', 'Linearly independent', 'Orthogonal', 'Parallel'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Eigenvectors corresponding to distinct eigenvalues are always linearly independent.'
  },
  {
    id: 'ch06-q8',
    question: 'The algebraic multiplicity of eigenvalue λ is:',
    options: ['dim(ker(T - λI))', 'The multiplicity of λ as root of characteristic polynomial', 'Always 1', 'The trace'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Algebraic multiplicity = power of (x - λ) in the characteristic polynomial.'
  },
  {
    id: 'ch06-q9',
    question: 'Geometric multiplicity ≤ algebraic multiplicity is:',
    options: ['Sometimes true', 'Always true', 'Never true', 'True only for symmetric matrices'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Geometric multiplicity (dim of eigenspace) is always ≤ algebraic multiplicity.'
  },
  {
    id: 'ch06-q10',
    question: 'By Cayley-Hamilton, an n × n matrix A satisfies:',
    options: ['A = 0', 'Aⁿ = 0', 'The characteristic polynomial equation', 'A is invertible'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If p(λ) is the characteristic polynomial of A, then p(A) = 0.'
  }
];
