// Chapter 2: Vector Spaces (Sections 7-12)
// Based on Hoffman & Kunze Chapter 2
import type { QuizQuestion } from './types';

// Section 7: Vector Spaces
export const section07Quiz: QuizQuestion[] = [
  {
    id: 's07-q1',
    question: 'A vector space V over a field F must satisfy how many axioms?',
    options: ['6', '8', '10', '12'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A vector space satisfies 8 axioms: 4 for addition (closure, associativity, identity, inverses) and 4 relating scalar multiplication to vector addition.'
  },
  {
    id: 's07-q2',
    question: 'In a vector space V over F, the zero vector is:',
    options: ['Any vector', 'The scalar 0', 'Unique', 'Not required to exist'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The zero vector in a vector space is unique and satisfies v + 0 = v for all v ∈ V.'
  },
  {
    id: 's07-q3',
    question: 'The set F^n (n-tuples from F) is a vector space over F with dimension:',
    options: ['1', 'n', 'n²', 'Infinite'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'F^n has dimension n over F, with the standard basis e₁, ..., eₙ.'
  },
  {
    id: 's07-q4',
    question: 'For any vector v and scalar c = 0:',
    options: ['cv = v', 'cv = 0', 'cv is undefined', 'cv = -v'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '0·v = 0 for any vector v (where the result is the zero vector).'
  },
  {
    id: 's07-q5',
    question: 'The set of all polynomials over F is a vector space that is:',
    options: ['Finite-dimensional', 'Infinite-dimensional', 'Not a vector space', 'Zero-dimensional'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The polynomial ring F[x] is infinite-dimensional as a vector space over F.'
  }
];

// Section 8: Subspaces
export const section08Quiz: QuizQuestion[] = [
  {
    id: 's08-q1',
    question: 'A non-empty subset W of V is a subspace if and only if:',
    options: ['W contains 0', 'W is closed under addition and scalar multiplication', 'W equals V', 'W is finite'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'W is a subspace iff it is closed under vector addition and scalar multiplication (which implies 0 ∈ W).'
  },
  {
    id: 's08-q2',
    question: 'The intersection of any collection of subspaces is:',
    options: ['Empty', 'Not a subspace', 'A subspace', 'Equal to V'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The intersection of any collection of subspaces is itself a subspace.'
  },
  {
    id: 's08-q3',
    question: 'The subspace spanned by a set S is:',
    options: ['The largest subspace containing S', 'The smallest subspace containing S', 'Equal to S', 'The empty set'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'span(S) is the smallest subspace containing S, consisting of all linear combinations of elements of S.'
  },
  {
    id: 's08-q4',
    question: 'If W₁ and W₂ are subspaces, then W₁ ∪ W₂ is a subspace:',
    options: ['Always', 'Never', 'Only if one contains the other', 'Only if they are equal'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'W₁ ∪ W₂ is a subspace iff W₁ ⊆ W₂ or W₂ ⊆ W₁.'
  }
];

// Section 9: Bases and Dimension
export const section09Quiz: QuizQuestion[] = [
  {
    id: 's09-q1',
    question: 'A set of vectors is linearly independent if:',
    options: ['They span V', 'The only linear combination equal to 0 is the trivial one', 'They are orthogonal', 'There are n of them'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Vectors v₁,...,vₖ are linearly independent iff c₁v₁ + ... + cₖvₖ = 0 implies all cᵢ = 0.'
  },
  {
    id: 's09-q2',
    question: 'A basis for V is a set that is:',
    options: ['Linearly independent', 'Spanning', 'Both linearly independent and spanning', 'Orthogonal'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A basis is a linearly independent set that spans the entire space.'
  },
  {
    id: 's09-q3',
    question: 'If V has a basis with n elements, then every basis of V has:',
    options: ['At most n elements', 'At least n elements', 'Exactly n elements', 'More than n elements'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All bases of a vector space have the same cardinality, which defines the dimension.'
  },
  {
    id: 's09-q4',
    question: 'Any linearly independent set in a finite-dimensional V can be:',
    options: ['Made smaller', 'Extended to a basis', 'Made orthogonal', 'Reduced to a single vector'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Any linearly independent set can be extended to a basis by adding appropriate vectors.'
  },
  {
    id: 's09-q5',
    question: 'If dim(V) = n and S has more than n vectors, then S is:',
    options: ['A basis', 'Linearly independent', 'Linearly dependent', 'Spanning'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Any set with more vectors than the dimension must be linearly dependent.'
  }
];

// Section 10: Coordinates
export const section10Quiz: QuizQuestion[] = [
  {
    id: 's10-q1',
    question: 'If B = {v₁,...,vₙ} is an ordered basis for V, the coordinate vector of v relative to B is:',
    options: ['v itself', 'The tuple (c₁,...,cₙ) where v = c₁v₁ + ... + cₙvₙ', 'The basis B', 'A matrix'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The coordinate vector [v]_B gives the unique scalars expressing v as a linear combination of the basis vectors.'
  },
  {
    id: 's10-q2',
    question: 'The coordinate map from V to F^n (relative to a basis B) is:',
    options: ['Not injective', 'Not surjective', 'An isomorphism', 'Not linear'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The coordinate map is a linear isomorphism between V and F^n.'
  },
  {
    id: 's10-q3',
    question: 'If v has coordinates (1, 2, 3) relative to basis B, and (2, 1, 0) relative to basis B\', then:',
    options: ['v = 0', 'B = B\'', 'The coordinates depend on the basis', 'v is not in V'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The same vector can have different coordinate representations relative to different bases.'
  }
];

// Section 11: Summary of Row-Equivalence
export const section11Quiz: QuizQuestion[] = [
  {
    id: 's11-q1',
    question: 'The row space of a matrix A is:',
    options: ['The span of the columns of A', 'The span of the rows of A', 'The null space of A', 'The column space of Aᵀ'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The row space is the subspace of F^n spanned by the rows of A.'
  },
  {
    id: 's11-q2',
    question: 'Row-equivalent matrices have:',
    options: ['The same column space', 'The same row space', 'The same null space', 'All of the above'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Row-equivalent matrices have the same row space (but not necessarily the same column space).'
  },
  {
    id: 's11-q3',
    question: 'The rank of a matrix equals:',
    options: ['The number of rows', 'The number of columns', 'The dimension of the row space', 'The number of zero rows'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rank(A) = dim(row space) = dim(column space) = number of pivots.'
  },
  {
    id: 's11-q4',
    question: 'For an m × n matrix A, rank(A) + nullity(A) equals:',
    options: ['m', 'n', 'm + n', 'mn'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The rank-nullity theorem: rank(A) + dim(null space) = n (number of columns).'
  }
];

// Section 12: Computations Concerning Subspaces
export const section12Quiz: QuizQuestion[] = [
  {
    id: 's12-q1',
    question: 'To find a basis for the span of vectors v₁,...,vₖ, one can:',
    options: ['Just use all vectors', 'Row reduce the matrix with these vectors as rows', 'Add the zero vector', 'Subtract the vectors'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Row reduction identifies which vectors form a basis for the span.'
  },
  {
    id: 's12-q2',
    question: 'The dimension of W₁ + W₂ satisfies:',
    options: ['dim(W₁ + W₂) = dim(W₁) + dim(W₂)', 'dim(W₁ + W₂) = dim(W₁) + dim(W₂) - dim(W₁ ∩ W₂)', 'dim(W₁ + W₂) = max(dim(W₁), dim(W₂))', 'dim(W₁ + W₂) = dim(W₁ ∩ W₂)'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dimension formula: dim(W₁ + W₂) = dim(W₁) + dim(W₂) - dim(W₁ ∩ W₂).'
  }
];

// Chapter 2 Comprehensive Quiz
export const chapter02Quiz: QuizQuestion[] = [
  {
    id: 'ch02-q1',
    question: 'If V is a vector space over ℝ with dim(V) = n, then V is isomorphic to:',
    options: ['ℝ', 'ℝⁿ', 'ℂⁿ', 'Any field'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every n-dimensional real vector space is isomorphic to ℝⁿ.'
  },
  {
    id: 'ch02-q2',
    question: 'The subspace {0} has dimension:',
    options: ['0', '1', 'Undefined', '-1'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The zero subspace has dimension 0 (empty basis).'
  },
  {
    id: 'ch02-q3',
    question: 'If dim(V) = n and W is a proper subspace of V, then:',
    options: ['dim(W) = n', 'dim(W) > n', 'dim(W) < n', 'dim(W) is undefined'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A proper subspace has strictly smaller dimension than the ambient space.'
  },
  {
    id: 'ch02-q4',
    question: 'A set of n vectors in an n-dimensional space V is a basis iff it is:',
    options: ['Linearly independent', 'Spanning', 'Either linearly independent or spanning', 'Orthogonal'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For n vectors in an n-dimensional space, linear independence is equivalent to being spanning.'
  },
  {
    id: 'ch02-q5',
    question: 'The null space of an m × n matrix is a subspace of:',
    options: ['Fᵐ', 'Fⁿ', 'F^(m×n)', 'F'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The null space consists of n-tuples x satisfying Ax = 0, so it\'s a subspace of Fⁿ.'
  },
  {
    id: 'ch02-q6',
    question: 'If A is m × n with rank r, the dimension of the column space is:',
    options: ['m', 'n', 'r', 'm - r'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dimension of the column space equals the rank r.'
  },
  {
    id: 'ch02-q7',
    question: 'Vectors v₁, v₂, v₃ are linearly dependent iff:',
    options: ['v₁ + v₂ + v₃ = 0', 'One is a linear combination of the others', 'They span a 3-dimensional space', 'All are zero'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Linear dependence means at least one vector is a linear combination of the others.'
  },
  {
    id: 'ch02-q8',
    question: 'The standard basis for ℝ³ is:',
    options: ['{(1,0,0), (0,1,0), (0,0,1)}', '{(1,1,1)}', 'Any three vectors', '{(1,0,0), (1,1,0)}'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The standard basis consists of the unit vectors e₁, e₂, e₃.'
  },
  {
    id: 'ch02-q9',
    question: 'If W₁ ∩ W₂ = {0} and dim(W₁) = 2, dim(W₂) = 3, then dim(W₁ + W₂) equals:',
    options: ['2', '3', '5', '6'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'By the dimension formula: dim(W₁ + W₂) = 2 + 3 - 0 = 5.'
  },
  {
    id: 'ch02-q10',
    question: 'Every finite-dimensional vector space has:',
    options: ['A unique basis', 'No basis', 'At least one basis', 'Infinitely many bases'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A finite-dimensional space (dim > 0) has infinitely many bases.'
  }
];
