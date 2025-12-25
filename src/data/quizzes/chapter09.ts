// Chapter 9: Operators on Inner Product Spaces (Sections 50-55)
// Based on Hoffman & Kunze Chapter 9
import type { QuizQuestion } from './types';

// Section 50: Introduction
export const section50Quiz: QuizQuestion[] = [
  {
    id: 's50-q1',
    question: 'Chapter 9 extends the study of operators to include:',
    options: ['Only real spaces', 'Sesquilinear forms and their operators', 'Only finite fields', 'Matrices only'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This chapter develops the theory of sesquilinear forms and associated operators.'
  },
  {
    id: 's50-q2',
    question: 'A sesquilinear form is linear in one argument and:',
    options: ['Linear in the other', 'Conjugate-linear in the other', 'Constant in the other', 'Zero in the other'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Sesquilinear means linear in one variable and conjugate-linear in the other.'
  }
];

// Section 51: Forms on Inner Product Spaces
export const section51Quiz: QuizQuestion[] = [
  {
    id: 's51-q1',
    question: 'Every sesquilinear form f on a finite-dimensional inner product space can be written as:',
    options: ['f(u,v) = ⟨Tu,v⟩ for unique operator T', 'f(u,v) = ||u|| ||v||', 'f(u,v) = 0', 'f(u,v) = ⟨u,v⟩'],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The form f corresponds uniquely to an operator T via f(u,v) = ⟨Tu,v⟩.'
  },
  {
    id: 's51-q2',
    question: 'The matrix of a sesquilinear form relative to an orthonormal basis is:',
    options: ['Always diagonal', 'The same as the operator matrix', 'Always symmetric', 'Not well-defined'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For orthonormal basis, the form\'s matrix equals the associated operator\'s matrix.'
  }
];

// Section 52: Positive Forms
export const section52Quiz: QuizQuestion[] = [
  {
    id: 's52-q1',
    question: 'A sesquilinear form f is positive semi-definite if:',
    options: ['f(v,v) = 0 for all v', 'f(v,v) ≥ 0 for all v', 'f(v,v) < 0 for some v', 'f = 0'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Positive semi-definite means f(v,v) ≥ 0 for all v.'
  },
  {
    id: 's52-q2',
    question: 'A positive operator T satisfies:',
    options: ['T > 0', '⟨Tv,v⟩ ≥ 0 for all v', 'T is invertible', 'T = T²'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'T is positive if ⟨Tv,v⟩ ≥ 0 for all v (equivalently, T = T* and all eigenvalues ≥ 0).'
  },
  {
    id: 's52-q3',
    question: 'Every positive operator has a unique positive:',
    options: ['Inverse', 'Square root', 'Transpose', 'Determinant'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Every positive operator T has a unique positive square root √T.'
  }
];

// Section 53: More on Forms
export const section53Quiz: QuizQuestion[] = [
  {
    id: 's53-q1',
    question: 'The polar decomposition writes T as:',
    options: ['T = UP where U is unitary and P is positive', 'T = T* + iT', 'T = D + N', 'T = LU'],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Polar decomposition: T = UP (or PU) with U unitary and P positive.'
  },
  {
    id: 's53-q2',
    question: 'In T = UP, P equals:',
    options: ['T', '√(T*T)', 'T*', 'I'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'P = √(T*T) is the unique positive square root of T*T.'
  }
];

// Section 54: Spectral Theory
export const section54Quiz: QuizQuestion[] = [
  {
    id: 's54-q1',
    question: 'The spectral decomposition of normal T writes T as:',
    options: ['Sum of nilpotent operators', 'Sum λᵢEᵢ where Eᵢ are orthogonal projections', 'Product of reflections', 'T = I'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'T = Σ λᵢEᵢ where λᵢ are eigenvalues and Eᵢ are orthogonal projections onto eigenspaces.'
  },
  {
    id: 's54-q2',
    question: 'The spectral projections Eᵢ satisfy:',
    options: ['Eᵢ² = 0', 'EᵢEⱼ = δᵢⱼEᵢ and ΣEᵢ = I', 'Eᵢ = T', 'Eᵢ are nilpotent'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Spectral projections are mutually orthogonal idempotents summing to I.'
  },
  {
    id: 's54-q3',
    question: 'For normal T, f(T) for polynomial f is computed via:',
    options: ['Matrix multiplication', 'f(T) = Σ f(λᵢ)Eᵢ', 'Diagonalization only', 'Cannot be computed'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'f(T) = Σ f(λᵢ)Eᵢ (functional calculus via spectral decomposition).'
  }
];

// Section 55: Further Properties of Normal Operators
export const section55Quiz: QuizQuestion[] = [
  {
    id: 's55-q1',
    question: 'A normal operator on a real inner product space:',
    options: ['Is always diagonalizable over ℝ', 'May have complex eigenvalues (coming in conjugate pairs)', 'Has no eigenvalues', 'Is always zero'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Real normal operators may have complex eigenvalue pairs; still orthogonally block-diagonalizable.'
  },
  {
    id: 's55-q2',
    question: 'On a real space, a normal operator can be put in form with blocks of size:',
    options: ['Only 1', '1 or 2', 'Arbitrary', 'n'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Real normal operators have orthogonal canonical form with 1×1 (real eigenvalue) and 2×2 blocks (complex pairs).'
  },
  {
    id: 's55-q3',
    question: 'The 2×2 blocks for complex eigenvalue pair a ± bi have the form:',
    options: ['[[a,b],[b,a]]', '[[a,-b],[b,a]]', '[[a,0],[0,b]]', '[[1,0],[0,1]]'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Complex pair a ± bi gives block [[a,-b],[b,a]] representing rotation-scaling.'
  }
];

// Chapter 9 Comprehensive Quiz
export const chapter09Quiz: QuizQuestion[] = [
  {
    id: 'ch09-q1',
    question: 'A sesquilinear form f is Hermitian if:',
    options: ['f(u,v) = f(v,u)', 'f(u,v) = conjugate of f(v,u)', 'f(u,v) = -f(v,u)', 'f = 0'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hermitian means f(u,v) = f(v,u)* (conjugate symmetry).'
  },
  {
    id: 'ch09-q2',
    question: 'T is positive iff:',
    options: ['T is invertible', 'T = T* and all eigenvalues are ≥ 0', 'T² = T', 'det(T) > 0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Positive means self-adjoint with non-negative eigenvalues.'
  },
  {
    id: 'ch09-q3',
    question: 'The singular values of T are:',
    options: ['Eigenvalues of T', 'Eigenvalues of T*T', 'Square roots of eigenvalues of T*T', 'Entries of T'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Singular values = √eigenvalues of T*T.'
  },
  {
    id: 'ch09-q4',
    question: 'The singular value decomposition writes T as:',
    options: ['UDV where U, V unitary and D diagonal with singular values', 'T = T*', 'LU', 'QR'],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'SVD: T = UΣV* where U, V unitary and Σ has singular values on diagonal.'
  },
  {
    id: 'ch09-q5',
    question: 'The operator norm ||T|| equals:',
    options: ['trace(T)', 'det(T)', 'The largest singular value', 'The sum of eigenvalues'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '||T|| = max||v||=1 ||Tv|| = largest singular value.'
  },
  {
    id: 'ch09-q6',
    question: 'For T self-adjoint, e^{iT} is:',
    options: ['Self-adjoint', 'Unitary', 'Positive', 'Zero'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If T = T*, then (e^{iT})* = e^{-iT*} = e^{-iT} = (e^{iT})⁻¹, so e^{iT} is unitary.'
  },
  {
    id: 'ch09-q7',
    question: 'Polar decomposition T = UP is unique when:',
    options: ['Always', 'T is invertible', 'T is normal', 'Never'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'U is unique when T is invertible; otherwise P is unique but U may not be.'
  },
  {
    id: 'ch09-q8',
    question: '||T||² equals:',
    options: ['trace(T)', 'det(T)', 'Largest eigenvalue of T*T', 'Sum of singular values'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '||T||² = ||T*T|| = largest eigenvalue of T*T.'
  },
  {
    id: 'ch09-q9',
    question: 'The spectral radius of T is:',
    options: ['||T||', 'max|λ| over eigenvalues λ', 'trace(T)', 'det(T)'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Spectral radius = max{|λ| : λ is an eigenvalue of T}.'
  },
  {
    id: 'ch09-q10',
    question: 'For normal T, the spectral radius equals:',
    options: ['0', '1', '||T||', 'trace(T)'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For normal operators, spectral radius = operator norm.'
  }
];
