// Chapter 3: Linear Transformations (Sections 13-19)
// Based on Hoffman & Kunze Chapter 3
import type { QuizQuestion } from './types';

// Section 13: Linear Transformations
export const section13Quiz: QuizQuestion[] = [
  {
    id: 's13-q1',
    question: 'A function T: V → W is a linear transformation if:',
    options: ['T is bijective', 'T(αv + βw) = αT(v) + βT(w) for all scalars α, β and vectors v, w', 'T(0) = 0', 'T is surjective'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'T is linear iff it preserves linear combinations: T(αv + βw) = αT(v) + βT(w).'
  },
  {
    id: 's13-q2',
    question: 'The kernel (null space) of a linear transformation T: V → W is:',
    options: ['{v ∈ V : T(v) = 0}', '{w ∈ W : T(v) = w for some v}', 'V', 'W'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'ker(T) = {v ∈ V : T(v) = 0}, the set of vectors mapping to zero.'
  },
  {
    id: 's13-q3',
    question: 'The image (range) of T: V → W is:',
    options: ['All of W', 'A subspace of W', 'Equal to V', 'The zero vector only'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Im(T) = {T(v) : v ∈ V} is always a subspace of W.'
  },
  {
    id: 's13-q4',
    question: 'T is injective (one-to-one) if and only if:',
    options: ['T is surjective', 'ker(T) = {0}', 'Im(T) = W', 'T is the identity'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'T is injective iff the only vector mapping to 0 is the zero vector itself.'
  },
  {
    id: 's13-q5',
    question: 'For T: V → W linear, dim(ker T) + dim(Im T) equals:',
    options: ['dim(W)', 'dim(V)', 'dim(V) + dim(W)', '0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'This is the rank-nullity theorem: nullity(T) + rank(T) = dim(V).'
  }
];

// Section 14: The Algebra of Linear Transformations
export const section14Quiz: QuizQuestion[] = [
  {
    id: 's14-q1',
    question: 'The set L(V, W) of all linear transformations from V to W is:',
    options: ['A group', 'A ring', 'A vector space over F', 'Just a set'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'L(V, W) is a vector space under pointwise addition and scalar multiplication.'
  },
  {
    id: 's14-q2',
    question: 'If T: V → W and U: W → X are linear, then UT: V → X is:',
    options: ['Not defined', 'Linear', 'Nonlinear', 'Equal to TU'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The composition of linear transformations is linear.'
  },
  {
    id: 's14-q3',
    question: 'The set L(V, V) of linear operators on V forms:',
    options: ['A field', 'A vector space only', 'An algebra', 'Neither'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'L(V, V) is an algebra: a vector space with a compatible multiplication (composition).'
  },
  {
    id: 's14-q4',
    question: 'Composition of linear transformations is:',
    options: ['Commutative', 'Associative', 'Both', 'Neither'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Composition is associative but generally NOT commutative.'
  }
];

// Section 15: Isomorphism
export const section15Quiz: QuizQuestion[] = [
  {
    id: 's15-q1',
    question: 'A linear transformation T: V → W is an isomorphism if T is:',
    options: ['Injective', 'Surjective', 'Bijective and linear', 'Continuous'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An isomorphism is a bijective linear transformation.'
  },
  {
    id: 's15-q2',
    question: 'Two finite-dimensional vector spaces over F are isomorphic iff:',
    options: ['They have the same elements', 'They have the same dimension', 'One contains the other', 'They are equal'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Finite-dimensional spaces over the same field are isomorphic iff they have equal dimension.'
  },
  {
    id: 's15-q3',
    question: 'If T: V → W is an isomorphism, then T⁻¹ is:',
    options: ['Not linear', 'Linear', 'Not defined', 'Only partially defined'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse of an isomorphism is also a linear isomorphism.'
  },
  {
    id: 's15-q4',
    question: 'The relation "V is isomorphic to W" is:',
    options: ['Not symmetric', 'Not transitive', 'An equivalence relation', 'Not reflexive'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Isomorphism is reflexive (identity), symmetric (inverse), and transitive (composition).'
  }
];

// Section 16: Representation of Transformations by Matrices
export const section16Quiz: QuizQuestion[] = [
  {
    id: 's16-q1',
    question: 'If T: V → W is linear and B, B\' are ordered bases for V, W, the matrix [T]_{B\',B} has:',
    options: ['Rows from T applied to B', 'Columns that are coordinate vectors of T(v_i)', 'All 1s', 'All 0s'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The jth column of [T]_{B\',B} is the coordinate vector of T(v_j) relative to B\'.'
  },
  {
    id: 's16-q2',
    question: 'If A is the matrix of T: V → V relative to basis B, and P is a change-of-basis matrix, the matrix relative to the new basis is:',
    options: ['PAP', 'P⁻¹AP', 'AP⁻¹', 'PA'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Under change of basis by P, the matrix transforms as P⁻¹AP.'
  },
  {
    id: 's16-q3',
    question: 'Two matrices A and B are similar if:',
    options: ['A = B', 'B = P⁻¹AP for some invertible P', 'AB = BA', 'A + B = 0'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Similar matrices represent the same linear operator in different bases.'
  },
  {
    id: 's16-q4',
    question: 'Similar matrices have:',
    options: ['The same entries', 'The same rank, determinant, and eigenvalues', 'The same size only', 'Nothing in common'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Similar matrices share all basis-independent properties: rank, determinant, trace, eigenvalues, etc.'
  }
];

// Section 17: Linear Functionals
export const section17Quiz: QuizQuestion[] = [
  {
    id: 's17-q1',
    question: 'A linear functional on V is a linear transformation from V to:',
    options: ['V', 'V × V', 'F (the scalar field)', 'Any vector space'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A linear functional maps vectors to scalars: f: V → F.'
  },
  {
    id: 's17-q2',
    question: 'The dual space V* of V is:',
    options: ['Equal to V', 'The space of all linear functionals on V', 'Always infinite-dimensional', 'A subspace of V'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V* = L(V, F) is the space of all linear functionals on V.'
  },
  {
    id: 's17-q3',
    question: 'If dim(V) = n, then dim(V*) equals:',
    options: ['0', '1', 'n', 'n²'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dual space has the same dimension as the original space.'
  },
  {
    id: 's17-q4',
    question: 'The annihilator of a subspace W ⊆ V is:',
    options: ['A subspace of V', 'A subspace of V*', 'Equal to W', 'Equal to V*'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Ann(W) = {f ∈ V* : f(w) = 0 for all w ∈ W} is a subspace of V*.'
  }
];

// Section 18: The Double Dual
export const section18Quiz: QuizQuestion[] = [
  {
    id: 's18-q1',
    question: 'The double dual V** is:',
    options: ['Equal to V', 'The dual of V*', 'Always larger than V', 'Not a vector space'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V** = (V*)* is the dual of the dual space.'
  },
  {
    id: 's18-q2',
    question: 'The canonical map from V to V** is:',
    options: ['Not injective', 'An isomorphism when V is finite-dimensional', 'The zero map', 'Not linear'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The canonical embedding v ↦ ê_v is an isomorphism when dim(V) < ∞.'
  },
  {
    id: 's18-q3',
    question: 'For finite-dimensional V, V is naturally isomorphic to V** via:',
    options: ['Any isomorphism', 'A basis-dependent isomorphism', 'The canonical evaluation map', 'The identity'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The canonical isomorphism sends v to the evaluation functional ê_v(f) = f(v).'
  }
];

// Section 19: The Transpose of a Linear Transformation
export const section19Quiz: QuizQuestion[] = [
  {
    id: 's19-q1',
    question: 'If T: V → W is linear, the transpose Tᵗ maps:',
    options: ['V* → W*', 'W* → V*', 'V → W*', 'W → V'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The transpose Tᵗ: W* → V* is defined by (Tᵗg)(v) = g(T(v)).'
  },
  {
    id: 's19-q2',
    question: 'The matrix of Tᵗ relative to dual bases is:',
    options: ['The same as T', 'The transpose of the matrix of T', 'The inverse of the matrix of T', 'Unrelated to T'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The matrix of Tᵗ is the transpose of the matrix of T (relative to dual bases).'
  },
  {
    id: 's19-q3',
    question: '(ST)ᵗ equals:',
    options: ['TᵗSᵗ', 'SᵗTᵗ', '(Sᵗ)(Tᵗ)', 'Tᵗ + Sᵗ'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The transpose reverses the order of composition: (ST)ᵗ = TᵗSᵗ.'
  }
];

// Chapter 3 Comprehensive Quiz
export const chapter03Quiz: QuizQuestion[] = [
  {
    id: 'ch03-q1',
    question: 'The zero transformation T(v) = 0 for all v is:',
    options: ['Not linear', 'Linear but not injective', 'An isomorphism', 'Not well-defined'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The zero map is linear but has kernel = V, so it\'s not injective (unless V = {0}).'
  },
  {
    id: 'ch03-q2',
    question: 'If T: ℝ³ → ℝ² is linear and surjective, then dim(ker T) equals:',
    options: ['0', '1', '2', '3'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By rank-nullity: 3 = dim(ker T) + dim(Im T) = dim(ker T) + 2, so dim(ker T) = 1.'
  },
  {
    id: 'ch03-q3',
    question: 'Matrix multiplication corresponds to:',
    options: ['Addition of transformations', 'Composition of transformations', 'Scalar multiplication', 'Taking transpose'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If A and B represent T and U, then AB represents TU (composition).'
  },
  {
    id: 'ch03-q4',
    question: 'An n × n matrix represents an isomorphism iff it is:',
    options: ['Symmetric', 'Diagonal', 'Invertible', 'Upper triangular'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A linear operator is an isomorphism iff its matrix (in any basis) is invertible.'
  },
  {
    id: 'ch03-q5',
    question: 'The dual basis {f₁,...,fₙ} of {v₁,...,vₙ} satisfies:',
    options: ['fᵢ(vⱼ) = 0 for all i,j', 'fᵢ(vⱼ) = δᵢⱼ (Kronecker delta)', 'fᵢ(vⱼ) = 1 for all i,j', 'fᵢ = vᵢ'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dual basis is defined by fᵢ(vⱼ) = δᵢⱼ = 1 if i=j, 0 otherwise.'
  },
  {
    id: 'ch03-q6',
    question: 'rank(T) + nullity(T) = dim(V) is called:',
    options: ['The fundamental theorem', 'The rank-nullity theorem', 'Sylvester\'s law', 'The dimension formula'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'This is the rank-nullity theorem (or dimension theorem).'
  },
  {
    id: 'ch03-q7',
    question: 'If dim(V) = dim(W) and T: V → W is linear, then:',
    options: ['T is always an isomorphism', 'T injective ⟺ T surjective ⟺ T isomorphism', 'T is never an isomorphism', 'T must be the zero map'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For equal finite dimensions, injective ⟺ surjective ⟺ bijective.'
  },
  {
    id: 'ch03-q8',
    question: 'dim(Ann(W)) equals:',
    options: ['dim(W)', 'dim(V) - dim(W)', 'dim(V*)', '0'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For W ⊆ V: dim(Ann(W)) = dim(V*) - dim(W) = dim(V) - dim(W).'
  },
  {
    id: 'ch03-q9',
    question: 'The identity map I: V → V has matrix relative to any basis:',
    options: ['The zero matrix', 'A diagonal matrix with all diagonal entries equal to n', 'The identity matrix I_n', 'Depends on the basis'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The identity transformation always has the identity matrix as its representation.'
  },
  {
    id: 'ch03-q10',
    question: 'If A and B are similar matrices, then:',
    options: ['A = B', 'They have the same characteristic polynomial', 'They have different ranks', 'One is the transpose of the other'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Similar matrices represent the same operator and share the characteristic polynomial.'
  }
];
