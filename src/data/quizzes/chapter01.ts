// Chapter 1: Linear Equations (Sections 1-6)
// Based on Hoffman & Kunze Chapter 1
import type { QuizQuestion } from './types';

// Section 1: Fields
export const section01Quiz: QuizQuestion[] = [
  {
    id: 's01-q1',
    question: 'A field F must satisfy how many basic axioms for addition and multiplication?',
    options: ['6', '7', '8', '9'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A field satisfies 9 axioms: commutativity, associativity, identity, and inverses for both operations, plus distributivity.'
  },
  {
    id: 's01-q2',
    question: 'Which of the following is NOT a field?',
    options: ['The rational numbers ℚ', 'The real numbers ℝ', 'The integers ℤ', 'The complex numbers ℂ'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The integers are not a field because non-zero integers (except ±1) do not have multiplicative inverses in ℤ.'
  },
  {
    id: 's01-q3',
    question: 'A subfield of ℂ must contain:',
    options: ['Only 0', 'Only 1', 'Both 0 and 1', 'Neither 0 nor 1'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A subfield must contain the additive identity 0 and the multiplicative identity 1.'
  },
  {
    id: 's01-q4',
    question: 'If F has characteristic p > 0, then:',
    options: ['p is composite', '1 + 1 + ... + 1 (p times) = 0', 'F is finite', 'F contains ℚ'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The characteristic p is the smallest positive integer such that p·1 = 0 in F.'
  },
  {
    id: 's01-q5',
    question: 'The set {a + b√2 : a, b ∈ ℚ} is:',
    options: ['Not closed under multiplication', 'Not a field', 'A subfield of ℝ', 'Equal to ℝ'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is ℚ(√2), a subfield of ℝ. It is closed under all field operations.'
  }
];

// Section 2: Systems of Linear Equations
export const section02Quiz: QuizQuestion[] = [
  {
    id: 's02-q1',
    question: 'A system of linear equations is homogeneous if:',
    options: ['All coefficients are equal', 'All constant terms are zero', 'It has a unique solution', 'It has infinitely many solutions'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A homogeneous system has all constant terms equal to zero: Ax = 0.'
  },
  {
    id: 's02-q2',
    question: 'Two systems of linear equations are equivalent if:',
    options: ['They have the same coefficients', 'Each equation in one is a linear combination of equations in the other', 'They have the same number of equations', 'They have the same number of unknowns'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Equivalent systems have each equation in one system expressible as a linear combination of equations in the other, and vice versa.'
  },
  {
    id: 's02-q3',
    question: 'If two systems are equivalent, then they have:',
    options: ['The same coefficients', 'The same constant terms', 'Exactly the same solutions', 'At least one common solution'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Equivalent systems have exactly the same solution set (Theorem 1).'
  },
  {
    id: 's02-q4',
    question: 'A homogeneous system always has:',
    options: ['No solutions', 'A unique solution', 'At least the trivial solution', 'Infinitely many solutions'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The trivial solution x₁ = x₂ = ... = xₙ = 0 always satisfies Ax = 0.'
  }
];

// Section 3: Matrices and Elementary Row Operations
export const section03Quiz: QuizQuestion[] = [
  {
    id: 's03-q1',
    question: 'An m × n matrix A is a function from:',
    options: ['F to F', '{1,...,m} × {1,...,n} to F', 'Fⁿ to Fᵐ', 'F to Fⁿ'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A matrix A assigns to each pair (i,j) with 1 ≤ i ≤ m, 1 ≤ j ≤ n a scalar Aᵢⱼ in F.'
  },
  {
    id: 's03-q2',
    question: 'Which is NOT an elementary row operation?',
    options: ['Multiply a row by a non-zero scalar', 'Add a multiple of one row to another', 'Interchange two rows', 'Add two rows and store in a third row'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The three elementary row operations are: scalar multiplication of a row, adding a multiple of one row to another, and interchanging rows.'
  },
  {
    id: 's03-q3',
    question: 'Every elementary row operation is:',
    options: ['Irreversible', 'Reversible by an operation of the same type', 'Only applicable to square matrices', 'Commutative with other operations'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each elementary row operation has an inverse of the same type (Theorem 2).'
  },
  {
    id: 's03-q4',
    question: 'If A and B are row-equivalent, the systems AX = 0 and BX = 0 have:',
    options: ['No common solutions', 'At least one common solution', 'Exactly the same solutions', 'Solutions differing by a constant'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Row-equivalent matrices give equivalent homogeneous systems with identical solution sets (Theorem 3).'
  },
  {
    id: 's03-q5',
    question: 'A matrix is row-reduced if:',
    options: ['All entries are 0 or 1', 'The first non-zero entry in each row is 1, and that column has all other entries 0', 'It is upper triangular', 'It is the identity matrix'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Row-reduced means: (a) leading entries are 1, (b) columns with leading 1s have zeros elsewhere.'
  }
];

// Section 4: Row-Reduced Echelon Matrices
export const section04Quiz: QuizQuestion[] = [
  {
    id: 's04-q1',
    question: 'In a row-reduced echelon matrix, the leading 1s must:',
    options: ['Be on the diagonal', 'Move strictly to the right as rows increase', 'All be in the same column', 'Be in consecutive columns'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The "echelon" condition requires that the column index of the leading 1 increases as we go down rows.'
  },
  {
    id: 's04-q2',
    question: 'Every matrix is row-equivalent to:',
    options: ['The identity matrix', 'A unique row-reduced echelon matrix', 'Multiple row-reduced echelon matrices', 'No row-reduced matrix'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every matrix is row-equivalent to a unique row-reduced echelon matrix.'
  },
  {
    id: 's04-q3',
    question: 'In a row-reduced echelon matrix, all zero rows appear:',
    options: ['At the top', 'At the bottom', 'Anywhere', 'In the middle'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Zero rows are placed at the bottom in echelon form.'
  },
  {
    id: 's04-q4',
    question: 'The number of non-zero rows in the row-reduced echelon form equals:',
    options: ['The number of unknowns', 'The rank of the matrix', 'The number of solutions', 'The dimension of the null space'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The number of non-zero rows (pivot rows) equals the rank of the matrix.'
  }
];

// Section 5: Matrix Multiplication
export const section05Quiz: QuizQuestion[] = [
  {
    id: 's05-q1',
    question: 'If A is m × n and B is n × p, then AB is:',
    options: ['m × p', 'n × n', 'p × m', 'Undefined'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Matrix multiplication AB gives an m × p matrix when A is m × n and B is n × p.'
  },
  {
    id: 's05-q2',
    question: 'Matrix multiplication is:',
    options: ['Commutative', 'Associative', 'Both commutative and associative', 'Neither commutative nor associative'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Matrix multiplication is associative (ABC = A(BC)) but NOT commutative (AB ≠ BA in general).'
  },
  {
    id: 's05-q3',
    question: 'The entry (AB)ᵢⱼ equals:',
    options: ['AᵢⱼBᵢⱼ', 'Σₖ AᵢₖBₖⱼ', 'Σₖ AₖᵢBⱼₖ', 'AᵢⱼBⱼᵢ'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '(AB)ᵢⱼ = Σₖ AᵢₖBₖⱼ is the dot product of row i of A with column j of B.'
  },
  {
    id: 's05-q4',
    question: 'If AB and BA are both defined and square, then:',
    options: ['AB = BA always', 'AB and BA have the same size', 'AB and BA have the same rank', 'AB and BA may have different sizes'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'If A is m × n and B is n × m, then AB is m × m and BA is n × n, which may differ.'
  }
];

// Section 6: Invertible Matrices
export const section06Quiz: QuizQuestion[] = [
  {
    id: 's06-q1',
    question: 'A square matrix A is invertible if there exists B such that:',
    options: ['AB = I', 'BA = I', 'AB = BA = I', 'A + B = I'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A is invertible if there exists B with AB = BA = I. Such B is denoted A⁻¹.'
  },
  {
    id: 's06-q2',
    question: 'If A is invertible, then (A⁻¹)⁻¹ equals:',
    options: ['I', 'A', 'Aᵀ', '(Aᵀ)⁻¹'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inverse of the inverse is the original matrix: (A⁻¹)⁻¹ = A.'
  },
  {
    id: 's06-q3',
    question: 'If A and B are both invertible, then (AB)⁻¹ equals:',
    options: ['A⁻¹B⁻¹', 'B⁻¹A⁻¹', '(BA)⁻¹', 'AB⁻¹'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '(AB)⁻¹ = B⁻¹A⁻¹. The order reverses!'
  },
  {
    id: 's06-q4',
    question: 'An n × n matrix A is invertible if and only if:',
    options: ['A has n non-zero entries', 'The row-reduced echelon form of A is I', 'A is symmetric', 'A has positive entries'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A is invertible iff its row-reduced echelon form is the identity matrix.'
  },
  {
    id: 's06-q5',
    question: 'Elementary matrices are:',
    options: ['Never invertible', 'Always invertible', 'Invertible only if square', 'Invertible only if symmetric'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every elementary matrix is invertible, with its inverse being another elementary matrix of the same type.'
  }
];

// Chapter 1 Comprehensive Quiz
export const chapter01Quiz: QuizQuestion[] = [
  {
    id: 'ch01-q1',
    question: 'The field of rational numbers ℚ is a subfield of:',
    options: ['Only ℝ', 'Only ℂ', 'Both ℝ and ℂ', 'Neither ℝ nor ℂ'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'ℚ ⊂ ℝ ⊂ ℂ, so ℚ is a subfield of both ℝ and ℂ.'
  },
  {
    id: 'ch01-q2',
    question: 'Row-equivalence of matrices is:',
    options: ['Reflexive only', 'Symmetric only', 'Transitive only', 'An equivalence relation'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Row-equivalence is reflexive, symmetric, and transitive, hence an equivalence relation.'
  },
  {
    id: 'ch01-q3',
    question: 'If A is m × n with m < n, then AX = 0 has:',
    options: ['No solutions', 'Only the trivial solution', 'Infinitely many solutions', 'Cannot be determined'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If m < n, there are more unknowns than equations, so there are free variables and infinitely many solutions.'
  },
  {
    id: 'ch01-q4',
    question: 'The product of two invertible n × n matrices is:',
    options: ['Never invertible', 'Always invertible', 'Invertible only if they commute', 'Sometimes invertible'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If A and B are invertible, then AB is invertible with (AB)⁻¹ = B⁻¹A⁻¹.'
  },
  {
    id: 'ch01-q5',
    question: 'For a field F of characteristic zero:',
    options: ['F is finite', 'F contains a copy of ℚ', '1 = 0 in F', 'F has exactly two elements'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Fields of characteristic zero contain a copy of the rationals.'
  },
  {
    id: 'ch01-q6',
    question: 'The number of pivot columns in the row-reduced echelon form of A equals:',
    options: ['The number of rows of A', 'The number of columns of A', 'The rank of A', 'The nullity of A'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The number of pivot columns equals the rank of the matrix.'
  },
  {
    id: 'ch01-q7',
    question: 'If AB = I and BA = I for square matrices A and B, then:',
    options: ['A and B are unique', 'B is the unique inverse of A', 'A = B', 'A and B are both symmetric'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The inverse of a matrix, when it exists, is unique.'
  },
  {
    id: 'ch01-q8',
    question: 'An elementary row operation on an augmented matrix [A|b] corresponds to:',
    options: ['Changing the unknowns', 'Forming a linear combination of equations', 'Adding a new equation', 'Removing an equation'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Elementary row operations correspond to taking linear combinations of the equations in the system.'
  },
  {
    id: 'ch01-q9',
    question: 'The set of all 2 × 2 matrices over ℝ is:',
    options: ['A field', 'Not closed under multiplication', 'Closed under multiplication but not a field', 'Equal to ℝ⁴ as a field'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'M₂(ℝ) is closed under addition and multiplication but is not a field (non-zero matrices may fail to be invertible, and multiplication is not commutative).'
  },
  {
    id: 'ch01-q10',
    question: 'If the row-reduced echelon form of A has r non-zero rows and A is m × n, then the solution space of AX = 0 has dimension:',
    options: ['r', 'm - r', 'n - r', 'n'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The dimension of the null space (solution space of AX = 0) is n - r, where r is the rank.'
  }
];
