// Chapter 8: Inner Product Spaces (Sections 45-49)
// Based on Hoffman & Kunze Chapter 8
import type { QuizQuestion } from './types';

// Section 45: Inner Products
export const section45Quiz: QuizQuestion[] = [
  {
    id: 's45-q1',
    question: 'An inner product on a real vector space is:',
    options: ['Linear in both arguments', 'Symmetric, positive definite, and bilinear', 'Always zero', 'A linear transformation'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A real inner product is symmetric bilinear and positive definite: ⟨v,v⟩ > 0 for v ≠ 0.'
  },
  {
    id: 's45-q2',
    question: 'A complex inner product satisfies ⟨u,v⟩ = :',
    options: ['⟨v,u⟩', 'Conjugate of ⟨v,u⟩', '-⟨v,u⟩', '0'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Complex inner products are conjugate-symmetric (Hermitian): ⟨u,v⟩ = ⟨v,u⟩*.'
  },
  {
    id: 's45-q3',
    question: 'The standard inner product on ℂⁿ is:',
    options: ['Σ uᵢvᵢ', 'Σ uᵢv̄ᵢ', 'Σ ūᵢvᵢ', 'Σ |uᵢ|'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '⟨u,v⟩ = Σ uᵢv̄ᵢ (sum of products with conjugate of second argument).'
  },
  {
    id: 's45-q4',
    question: 'Positive definiteness means ⟨v,v⟩ is:',
    options: ['Always zero', '> 0 for all v', '≥ 0 with = 0 only when v = 0', 'Negative'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '⟨v,v⟩ ≥ 0 for all v, and ⟨v,v⟩ = 0 iff v = 0.'
  }
];

// Section 46: Inner Product Spaces
export const section46Quiz: QuizQuestion[] = [
  {
    id: 's46-q1',
    question: 'The norm ||v|| induced by an inner product is:',
    options: ['⟨v,v⟩', '√⟨v,v⟩', '|⟨v,v⟩|', '⟨v,v⟩²'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '||v|| = √⟨v,v⟩.'
  },
  {
    id: 's46-q2',
    question: 'Vectors u and v are orthogonal if:',
    options: ['||u|| = ||v||', '⟨u,v⟩ = 0', 'u = v', 'u + v = 0'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Orthogonal means ⟨u,v⟩ = 0.'
  },
  {
    id: 's46-q3',
    question: 'The Gram-Schmidt process produces:',
    options: ['Eigenvalues', 'An orthonormal basis from any basis', 'The determinant', 'The trace'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gram-Schmidt orthogonalizes and normalizes a given basis.'
  },
  {
    id: 's46-q4',
    question: 'The Cauchy-Schwarz inequality states:',
    options: ['|⟨u,v⟩| ≤ ||u|| + ||v||', '|⟨u,v⟩| ≤ ||u|| · ||v||', '|⟨u,v⟩| ≥ ||u|| · ||v||', '⟨u,v⟩ = ||u|| · ||v||'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '|⟨u,v⟩| ≤ ||u|| ||v|| with equality iff u and v are linearly dependent.'
  },
  {
    id: 's46-q5',
    question: 'For an orthonormal basis {e₁,...,eₙ}, ⟨eᵢ,eⱼ⟩ equals:',
    options: ['1 for all i,j', '0 for all i,j', 'δᵢⱼ (1 if i=j, 0 otherwise)', 'n'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Orthonormal means ⟨eᵢ,eⱼ⟩ = δᵢⱼ.'
  }
];

// Section 47: Linear Functionals and Adjoints
export const section47Quiz: QuizQuestion[] = [
  {
    id: 's47-q1',
    question: 'The Riesz representation theorem says every linear functional f on a finite-dimensional inner product space has the form:',
    options: ['f(v) = ⟨v,u⟩ for unique u', 'f(v) = ||v||', 'f(v) = 0', 'f(v) = trace(v)'],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Every linear functional equals f(v) = ⟨v,u⟩ for a unique u.'
  },
  {
    id: 's47-q2',
    question: 'The adjoint T* of operator T satisfies:',
    options: ['T*T = I', '⟨Tv,w⟩ = ⟨v,T*w⟩', 'T* = T', 'T* = T⁻¹'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The adjoint satisfies ⟨Tv,w⟩ = ⟨v,T*w⟩ for all v, w.'
  },
  {
    id: 's47-q3',
    question: '(T*)* equals:',
    options: ['I', 'T*', 'T', '0'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The adjoint of the adjoint is the original operator.'
  },
  {
    id: 's47-q4',
    question: 'The matrix of T* relative to an orthonormal basis is:',
    options: ['The same as T', 'The transpose of T\'s matrix', 'The conjugate transpose', 'The inverse'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For orthonormal bases, [T*] = [T]* (conjugate transpose).'
  }
];

// Section 48: Unitary Operators
export const section48Quiz: QuizQuestion[] = [
  {
    id: 's48-q1',
    question: 'A unitary operator U satisfies:',
    options: ['U² = I', 'U*U = UU* = I', 'U = U*', 'U = 0'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Unitary means U*U = UU* = I, i.e., U* = U⁻¹.'
  },
  {
    id: 's48-q2',
    question: 'Unitary operators preserve:',
    options: ['Only length', 'Only angles', 'Inner products (hence lengths and angles)', 'Nothing'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '⟨Uv,Uw⟩ = ⟨v,w⟩ for unitary U, preserving inner products.'
  },
  {
    id: 's48-q3',
    question: 'Eigenvalues of a unitary operator have absolute value:',
    options: ['0', '1', '> 1', '< 1'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If Uv = λv and U is unitary, then |λ| = 1.'
  },
  {
    id: 's48-q4',
    question: 'An orthogonal matrix (real case) satisfies:',
    options: ['AᵀA = AAᵀ = I', 'A = Aᵀ', 'A² = I', 'det(A) = 0'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Orthogonal matrices satisfy AᵀA = I (unitary with real entries).'
  }
];

// Section 49: Normal Operators
export const section49Quiz: QuizQuestion[] = [
  {
    id: 's49-q1',
    question: 'T is normal if:',
    options: ['T = T*', 'TT* = T*T', 'T² = I', 'T is invertible'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Normal means T commutes with its adjoint: TT* = T*T.'
  },
  {
    id: 's49-q2',
    question: 'Self-adjoint (Hermitian) operators satisfy:',
    options: ['T = -T*', 'T = T*', 'T² = T', 'TT* = 0'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Self-adjoint means T = T*.'
  },
  {
    id: 's49-q3',
    question: 'The spectral theorem for normal operators says:',
    options: ['Normal operators are nilpotent', 'Normal operators on complex spaces are unitarily diagonalizable', 'Normal operators have no eigenvalues', 'Normal operators equal zero'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A normal operator on a complex inner product space is diagonalizable by a unitary change of basis.'
  },
  {
    id: 's49-q4',
    question: 'Eigenvalues of a self-adjoint operator are:',
    options: ['Complex', 'Real', 'Purely imaginary', 'Zero'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Self-adjoint operators have all real eigenvalues.'
  },
  {
    id: 's49-q5',
    question: 'Eigenvectors of a normal operator for distinct eigenvalues are:',
    options: ['Equal', 'Orthogonal', 'Parallel', 'Not related'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Eigenvectors for distinct eigenvalues of a normal operator are orthogonal.'
  }
];

// Chapter 8 Comprehensive Quiz
export const chapter08Quiz: QuizQuestion[] = [
  {
    id: 'ch08-q1',
    question: 'The parallelogram law states ||u+v||² + ||u-v||² equals:',
    options: ['||u||² + ||v||²', '2||u||² + 2||v||²', '4||u|| ||v||', '0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '||u+v||² + ||u-v||² = 2||u||² + 2||v||² (parallelogram law).'
  },
  {
    id: 'ch08-q2',
    question: 'The orthogonal complement W⊥ of subspace W consists of:',
    options: ['Vectors in W', 'Vectors orthogonal to every vector in W', 'W itself', '{0}'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'W⊥ = {v : ⟨v,w⟩ = 0 for all w ∈ W}.'
  },
  {
    id: 'ch08-q3',
    question: 'dim(W) + dim(W⊥) equals:',
    options: ['0', 'dim(W)', 'dim(V)', '2·dim(W)'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'V = W ⊕ W⊥, so dim(W) + dim(W⊥) = dim(V).'
  },
  {
    id: 'ch08-q4',
    question: 'The projection onto W along W⊥ is:',
    options: ['Not unique', 'The orthogonal projection', 'The identity', 'Zero'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The orthogonal projection projects onto W with null space W⊥.'
  },
  {
    id: 'ch08-q5',
    question: 'For orthogonal projection P, P* equals:',
    options: ['I - P', '-P', 'P', 'P²'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Orthogonal projections are self-adjoint: P* = P.'
  },
  {
    id: 'ch08-q6',
    question: 'det of a unitary matrix has absolute value:',
    options: ['0', '1', 'n', 'Varies'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '|det(U)| = 1 for unitary U since det(U)*det(U*) = det(U)det(U)* = |det(U)|² = 1.'
  },
  {
    id: 'ch08-q7',
    question: 'Skew-Hermitian (T* = -T) operators have eigenvalues that are:',
    options: ['Real', 'Purely imaginary', 'Positive', 'Zero'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If T* = -T and Tv = λv, then λ = -λ*, so λ is purely imaginary.'
  },
  {
    id: 'ch08-q8',
    question: 'QR decomposition expresses A as:',
    options: ['Diagonal times lower triangular', 'Unitary times upper triangular', 'Lower times upper triangular', 'Sum of rank-1 matrices'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A = QR where Q is unitary (orthogonal for real) and R is upper triangular.'
  },
  {
    id: 'ch08-q9',
    question: 'The distance from v to subspace W is minimized by:',
    options: ['Any point in W', 'The orthogonal projection of v onto W', 'The zero vector', 'v itself'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The closest point in W to v is the orthogonal projection Pᵂv.'
  },
  {
    id: 'ch08-q10',
    question: 'On ℝⁿ with standard inner product, symmetric matrices are:',
    options: ['Never diagonalizable', 'Orthogonally diagonalizable', 'Nilpotent', 'Unitary'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Real symmetric matrices are orthogonally diagonalizable (spectral theorem).'
  }
];
