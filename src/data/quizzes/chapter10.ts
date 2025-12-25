// Chapter 10: Bilinear Forms (Sections 56-59)
// Based on Hoffman & Kunze Chapter 10
import type { QuizQuestion } from './types';

// Section 56: Bilinear Forms
export const section56Quiz: QuizQuestion[] = [
  {
    id: 's56-q1',
    question: 'A bilinear form f on V is:',
    options: ['Linear in one variable', 'Linear in both variables', 'Quadratic', 'Constant'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bilinear means linear in each of two arguments separately.'
  },
  {
    id: 's56-q2',
    question: 'The matrix of bilinear form f relative to basis {v₁,...,vₙ} has (i,j) entry:',
    options: ['f(vᵢ,vⱼ)', 'f(vᵢ) + f(vⱼ)', '⟨vᵢ,vⱼ⟩', 'δᵢⱼ'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The matrix [f] has entries [f]ᵢⱼ = f(vᵢ,vⱼ).'
  },
  {
    id: 's56-q3',
    question: 'Under change of basis by P, the matrix B of f transforms to:',
    options: ['PBP', 'P⁻¹BP', 'PᵀBP', 'B'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Bilinear form matrix transforms as B → PᵀBP under basis change P.'
  },
  {
    id: 's56-q4',
    question: 'A bilinear form f is non-degenerate if:',
    options: ['f = 0', 'The only v with f(v,w) = 0 for all w is v = 0', 'f(v,v) > 0 for all v', 'f is symmetric'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Non-degenerate means the associated linear map V → V* is an isomorphism.'
  }
];

// Section 57: Symmetric Bilinear Forms
export const section57Quiz: QuizQuestion[] = [
  {
    id: 's57-q1',
    question: 'A bilinear form f is symmetric if:',
    options: ['f(u,v) = -f(v,u)', 'f(u,v) = f(v,u)', 'f(u,u) = 0', 'f is zero'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Symmetric means f(u,v) = f(v,u) for all u, v.'
  },
  {
    id: 's57-q2',
    question: 'Every symmetric bilinear form over a field of characteristic ≠ 2 can be diagonalized to:',
    options: ['The identity matrix', 'A diagonal matrix', 'A triangular matrix', 'The zero matrix'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Symmetric bilinear forms can be diagonalized (diagonal matrix relative to some basis).'
  },
  {
    id: 's57-q3',
    question: 'Sylvester\'s law of inertia states that for a real symmetric form, the signature (p, q, r) is:',
    options: ['Basis-dependent', 'An invariant of the form', 'Always (n, 0, 0)', 'Not defined'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The signature (# positive, # negative, # zero diagonal entries) is an invariant.'
  },
  {
    id: 's57-q4',
    question: 'The rank of a symmetric bilinear form is:',
    options: ['Always n', 'The rank of its matrix', 'Always 0', 'Undefined'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The rank is the rank of the representing matrix (or n minus the dimension of the radical).'
  }
];

// Section 58: Skew-Symmetric Bilinear Forms
export const section58Quiz: QuizQuestion[] = [
  {
    id: 's58-q1',
    question: 'A bilinear form f is skew-symmetric (alternating) if:',
    options: ['f(u,v) = f(v,u)', 'f(u,v) = -f(v,u)', 'f(u,u) = 1', 'f is symmetric'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Skew-symmetric means f(u,v) = -f(v,u), which implies f(v,v) = 0.'
  },
  {
    id: 's58-q2',
    question: 'For a skew-symmetric form over any field, f(v,v) equals:',
    options: ['1', '-1', '0', 'Varies'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'f(v,v) = -f(v,v) implies 2f(v,v) = 0; if char ≠ 2, then f(v,v) = 0.'
  },
  {
    id: 's58-q3',
    question: 'A non-degenerate skew-symmetric form can only exist on spaces of dimension:',
    options: ['Any', 'Odd', 'Even', 'Prime'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Non-degenerate skew-symmetric forms require even dimension (they come in pairs).'
  },
  {
    id: 's58-q4',
    question: 'The standard symplectic form on ℝ²ⁿ has matrix:',
    options: ['I', '[[0,I],[-I,0]]', 'A diagonal matrix', 'The zero matrix'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Standard symplectic form has block matrix [[0,I],[-I,0]].'
  }
];

// Section 59: Groups Preserving Bilinear Forms
export const section59Quiz: QuizQuestion[] = [
  {
    id: 's59-q1',
    question: 'The orthogonal group O(n) preserves:',
    options: ['Any bilinear form', 'The standard inner product on ℝⁿ', 'Only the zero form', 'Determinant'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'O(n) = {A : AᵀA = I} preserves the standard inner product.'
  },
  {
    id: 's59-q2',
    question: 'The unitary group U(n) consists of:',
    options: ['Orthogonal matrices', 'Matrices A with A*A = I', 'Symmetric matrices', 'Nilpotent matrices'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'U(n) = {A ∈ M_n(ℂ) : A*A = I} preserves the standard Hermitian form.'
  },
  {
    id: 's59-q3',
    question: 'The symplectic group Sp(2n) preserves:',
    options: ['The inner product', 'A non-degenerate skew-symmetric form', 'The determinant', 'Eigenvalues'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Sp(2n) preserves the standard symplectic (skew-symmetric) form.'
  },
  {
    id: 's59-q4',
    question: 'The Lorentz group preserves:',
    options: ['Euclidean distance', 'The Minkowski metric (signature (1,3) or (3,1))', 'The zero form', 'Volume'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Lorentz group preserves the indefinite Minkowski inner product of special relativity.'
  },
  {
    id: 's59-q5',
    question: 'det(A) for A ∈ O(n) equals:',
    options: ['0', '1', '±1', 'n'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'det(A)² = det(AᵀA) = det(I) = 1, so det(A) = ±1.'
  }
];

// Chapter 10 Comprehensive Quiz
export const chapter10Quiz: QuizQuestion[] = [
  {
    id: 'ch10-q1',
    question: 'The radical of a bilinear form f is:',
    options: ['ker(f)', '{v : f(v,w) = 0 for all w}', 'V', '{0}'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The radical is the set of vectors orthogonal to everything under f.'
  },
  {
    id: 'ch10-q2',
    question: 'A form is non-degenerate iff its radical is:',
    options: ['V', '{0}', 'One-dimensional', 'Undefined'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Non-degenerate means trivial radical.'
  },
  {
    id: 'ch10-q3',
    question: 'Two real symmetric matrices represent equivalent forms iff they have:',
    options: ['The same entries', 'The same signature', 'The same determinant', 'The same trace'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Real symmetric bilinear forms are classified by their signature.'
  },
  {
    id: 'ch10-q4',
    question: 'The special orthogonal group SO(n) is O(n) ∩:',
    options: ['U(n)', 'Matrices with det = 1', 'Symmetric matrices', 'Nilpotent matrices'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'SO(n) = {A ∈ O(n) : det(A) = 1} (orientation-preserving orthogonal maps).'
  },
  {
    id: 'ch10-q5',
    question: 'The dimension of Sp(2n) as a Lie group is:',
    options: ['2n', 'n²', 'n(2n+1)', '4n²'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'dim(Sp(2n)) = n(2n+1).'
  },
  {
    id: 'ch10-q6',
    question: 'Over ℂ, all non-degenerate symmetric bilinear forms on ℂⁿ are:',
    options: ['Different', 'Equivalent (congruent)', 'Not comparable', 'All positive definite'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Over ℂ, any non-degenerate symmetric form is congruent to the sum of squares.'
  },
  {
    id: 'ch10-q7',
    question: 'The Gram matrix of vectors v₁,...,vₖ in an inner product space has (i,j) entry:',
    options: ['⟨vᵢ,vⱼ⟩', 'vᵢᵀvⱼ', 'δᵢⱼ', '0'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Gram matrix G has Gᵢⱼ = ⟨vᵢ,vⱼ⟩.'
  },
  {
    id: 'ch10-q8',
    question: 'The pseudo-orthogonal group O(p,q) preserves a form of signature:',
    options: ['(n,0)', '(p,q)', '(0,0)', '(1,1) only'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'O(p,q) preserves the indefinite form with p positive and q negative signs.'
  },
  {
    id: 'ch10-q9',
    question: 'The quadratic form associated to symmetric bilinear form f is:',
    options: ['f(v,w)', 'f(v,v)', 'f + f*', '||f||'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The quadratic form is Q(v) = f(v,v).'
  },
  {
    id: 'ch10-q10',
    question: 'From quadratic form Q, the bilinear form f can be recovered (char ≠ 2) via:',
    options: ['f(u,v) = Q(u+v)', 'f(u,v) = ½[Q(u+v) - Q(u) - Q(v)]', 'f(u,v) = Q(u)Q(v)', 'Cannot be recovered'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Polarization identity: f(u,v) = ½[Q(u+v) - Q(u) - Q(v)].'
  }
];
