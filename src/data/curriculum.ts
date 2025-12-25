// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Advanced Linear Algebra - Based on Hoffman & Kunze (2nd Edition)
// A rigorous treatment suitable for advanced undergraduates and graduates
// =============================================================================

/**
 * Individual section within a chapter
 */
export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

/**
 * Chapter (Part) containing multiple sections
 */
export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

/**
 * Complete curriculum structure
 * Based on Hoffman & Kunze "Linear Algebra" (2nd Edition, 1971)
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // CHAPTER 1: Linear Equations
  // ==========================================================================
  {
    id: 1,
    title: 'Linear Equations',
    slug: 'linear-equations',
    sections: [
      {
        id: 1,
        title: '1.1 Fields',
        slug: 'fields',
        description: 'Definition of fields, field axioms, subfields of complex numbers, and field characteristics.',
      },
      {
        id: 2,
        title: '1.2 Systems of Linear Equations',
        slug: 'systems-of-linear-equations',
        description: 'Linear systems, homogeneous systems, linear combinations of equations, and equivalent systems.',
      },
      {
        id: 3,
        title: '1.3 Matrices and Elementary Row Operations',
        slug: 'matrices-elementary-row-operations',
        description: 'Matrix notation, elementary row operations, row equivalence, and row-reduced matrices.',
      },
      {
        id: 4,
        title: '1.4 Row-Reduced Echelon Matrices',
        slug: 'row-reduced-echelon',
        description: 'Row-reduced echelon form, uniqueness theorem, and systematic solution methods.',
      },
      {
        id: 5,
        title: '1.5 Matrix Multiplication',
        slug: 'matrix-multiplication',
        description: 'Definition and properties of matrix multiplication, associativity, and distributivity.',
      },
      {
        id: 6,
        title: '1.6 Invertible Matrices',
        slug: 'invertible-matrices',
        description: 'Matrix inverses, conditions for invertibility, and computational methods.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 2: Vector Spaces
  // ==========================================================================
  {
    id: 2,
    title: 'Vector Spaces',
    slug: 'vector-spaces',
    sections: [
      {
        id: 7,
        title: '2.1 Vector Spaces',
        slug: 'vector-space-definition',
        description: 'Definition of vector spaces over a field, vector space axioms, and examples.',
      },
      {
        id: 8,
        title: '2.2 Subspaces',
        slug: 'subspaces',
        description: 'Subspace criteria, intersection and sum of subspaces, and the subspace spanned by a set.',
      },
      {
        id: 9,
        title: '2.3 Bases and Dimension',
        slug: 'bases-dimension',
        description: 'Linear independence, spanning sets, bases, and dimension of vector spaces.',
      },
      {
        id: 10,
        title: '2.4 Coordinates',
        slug: 'coordinates',
        description: 'Coordinate systems relative to a basis and coordinate vectors.',
      },
      {
        id: 11,
        title: '2.5 Summary of Row-Equivalence',
        slug: 'row-equivalence-summary',
        description: 'Row space, column space, and rank of a matrix.',
      },
      {
        id: 12,
        title: '2.6 Computations Concerning Subspaces',
        slug: 'subspace-computations',
        description: 'Practical methods for finding bases, intersections, and sums of subspaces.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 3: Linear Transformations
  // ==========================================================================
  {
    id: 3,
    title: 'Linear Transformations',
    slug: 'linear-transformations',
    sections: [
      {
        id: 13,
        title: '3.1 Linear Transformations',
        slug: 'linear-transformation-definition',
        description: 'Definition, examples, and basic properties of linear transformations.',
      },
      {
        id: 14,
        title: '3.2 The Algebra of Linear Transformations',
        slug: 'algebra-linear-transformations',
        description: 'Addition, scalar multiplication, and composition of linear transformations.',
      },
      {
        id: 15,
        title: '3.3 Isomorphism',
        slug: 'isomorphism',
        description: 'Isomorphisms of vector spaces, conditions for isomorphism, and dimension.',
      },
      {
        id: 16,
        title: '3.4 Representation of Transformations by Matrices',
        slug: 'matrix-representation',
        description: 'Matrix representation relative to ordered bases and change of basis.',
      },
      {
        id: 17,
        title: '3.5 Linear Functionals',
        slug: 'linear-functionals',
        description: 'Linear functionals, the dual space, and annihilators.',
      },
      {
        id: 18,
        title: '3.6 The Double Dual',
        slug: 'double-dual',
        description: 'The double dual space and the canonical isomorphism.',
      },
      {
        id: 19,
        title: '3.7 The Transpose of a Linear Transformation',
        slug: 'transpose-transformation',
        description: 'Definition and properties of the transpose (adjoint) transformation.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 4: Polynomials
  // ==========================================================================
  {
    id: 4,
    title: 'Polynomials',
    slug: 'polynomials',
    sections: [
      {
        id: 20,
        title: '4.1 Algebras',
        slug: 'algebras',
        description: 'Definition of algebras, subalgebras, and algebra homomorphisms.',
      },
      {
        id: 21,
        title: '4.2 The Algebra of Polynomials',
        slug: 'algebra-polynomials',
        description: 'Polynomial algebra over a field, degree, and polynomial arithmetic.',
      },
      {
        id: 22,
        title: '4.3 Lagrange Interpolation',
        slug: 'lagrange-interpolation',
        description: 'Lagrange interpolation formula and polynomial fitting.',
      },
      {
        id: 23,
        title: '4.4 Polynomial Ideals',
        slug: 'polynomial-ideals',
        description: 'Ideals in polynomial rings, the division algorithm, and greatest common divisors.',
      },
      {
        id: 24,
        title: '4.5 The Prime Factorization of a Polynomial',
        slug: 'prime-factorization',
        description: 'Irreducible polynomials and unique factorization in polynomial rings.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 5: Determinants
  // ==========================================================================
  {
    id: 5,
    title: 'Determinants',
    slug: 'determinants',
    sections: [
      {
        id: 25,
        title: '5.1 Commutative Rings',
        slug: 'commutative-rings',
        description: 'Commutative rings with identity and polynomial rings over commutative rings.',
      },
      {
        id: 26,
        title: '5.2 Determinant Functions',
        slug: 'determinant-functions',
        description: 'Axiomatic definition of determinants: multilinear, alternating functions.',
      },
      {
        id: 27,
        title: '5.3 Permutations and the Uniqueness of Determinants',
        slug: 'permutations-uniqueness',
        description: 'Permutation groups, sign of permutation, and uniqueness of the determinant.',
      },
      {
        id: 28,
        title: '5.4 Additional Properties of Determinants',
        slug: 'determinant-properties',
        description: 'Cofactors, expansion by rows/columns, and determinant of products.',
      },
      {
        id: 29,
        title: '5.5 Modules',
        slug: 'modules',
        description: 'Modules over commutative rings and free modules.',
      },
      {
        id: 30,
        title: '5.6 Multilinear Functions',
        slug: 'multilinear-functions',
        description: 'General multilinear and alternating functions on modules.',
      },
      {
        id: 31,
        title: '5.7 The Grassman Ring',
        slug: 'grassman-ring',
        description: 'Exterior algebra (Grassman ring) and its properties.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 6: Elementary Canonical Forms
  // ==========================================================================
  {
    id: 6,
    title: 'Elementary Canonical Forms',
    slug: 'elementary-canonical-forms',
    sections: [
      {
        id: 32,
        title: '6.1 Introduction',
        slug: 'canonical-introduction',
        description: 'Overview of canonical forms and similarity of matrices.',
      },
      {
        id: 33,
        title: '6.2 Characteristic Values',
        slug: 'characteristic-values',
        description: 'Eigenvalues, eigenvectors, and the characteristic polynomial.',
      },
      {
        id: 34,
        title: '6.3 Annihilating Polynomials',
        slug: 'annihilating-polynomials',
        description: 'Minimal polynomials and the Cayley-Hamilton theorem.',
      },
      {
        id: 35,
        title: '6.4 Invariant Subspaces',
        slug: 'invariant-subspaces',
        description: 'T-invariant subspaces and their properties.',
      },
      {
        id: 36,
        title: '6.5 Simultaneous Triangulation; Simultaneous Diagonalization',
        slug: 'simultaneous-diagonalization',
        description: 'Conditions for simultaneous triangulation and diagonalization.',
      },
      {
        id: 37,
        title: '6.6 Direct-Sum Decompositions',
        slug: 'direct-sum-decompositions',
        description: 'Direct sums of subspaces and projection operators.',
      },
      {
        id: 38,
        title: '6.7 Invariant Direct Sums',
        slug: 'invariant-direct-sums',
        description: 'Decomposition into T-invariant direct summands.',
      },
      {
        id: 39,
        title: '6.8 The Primary Decomposition Theorem',
        slug: 'primary-decomposition',
        description: 'Primary decomposition and generalized eigenspaces.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 7: The Rational and Jordan Forms
  // ==========================================================================
  {
    id: 7,
    title: 'The Rational and Jordan Forms',
    slug: 'rational-jordan-forms',
    sections: [
      {
        id: 40,
        title: '7.1 Cyclic Subspaces and Annihilators',
        slug: 'cyclic-subspaces',
        description: 'Cyclic subspaces and T-annihilators of vectors.',
      },
      {
        id: 41,
        title: '7.2 Cyclic Decompositions and the Rational Form',
        slug: 'rational-form',
        description: 'Cyclic decomposition theorem and rational canonical form.',
      },
      {
        id: 42,
        title: '7.3 The Jordan Form',
        slug: 'jordan-form',
        description: 'Jordan canonical form and Jordan blocks.',
      },
      {
        id: 43,
        title: '7.4 Computation of Invariant Factors',
        slug: 'invariant-factors',
        description: 'Smith normal form and computation of invariant factors.',
      },
      {
        id: 44,
        title: '7.5 Summary; Semi-Simple Operators',
        slug: 'semi-simple-operators',
        description: 'Summary of canonical forms and semi-simple (diagonalizable) operators.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 8: Inner Product Spaces
  // ==========================================================================
  {
    id: 8,
    title: 'Inner Product Spaces',
    slug: 'inner-product-spaces',
    sections: [
      {
        id: 45,
        title: '8.1 Inner Products',
        slug: 'inner-products',
        description: 'Definition of inner products, real and complex cases, and examples.',
      },
      {
        id: 46,
        title: '8.2 Inner Product Spaces',
        slug: 'inner-product-space-properties',
        description: 'Norm, orthogonality, Gram-Schmidt orthogonalization, and orthonormal bases.',
      },
      {
        id: 47,
        title: '8.3 Linear Functionals and Adjoints',
        slug: 'adjoints',
        description: 'The adjoint of a linear operator and the Riesz representation theorem.',
      },
      {
        id: 48,
        title: '8.4 Unitary Operators',
        slug: 'unitary-operators',
        description: 'Unitary and orthogonal operators, isometries, and their properties.',
      },
      {
        id: 49,
        title: '8.5 Normal Operators',
        slug: 'normal-operators',
        description: 'Normal operators and the spectral theorem for normal operators.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 9: Operators on Inner Product Spaces
  // ==========================================================================
  {
    id: 9,
    title: 'Operators on Inner Product Spaces',
    slug: 'operators-inner-product-spaces',
    sections: [
      {
        id: 50,
        title: '9.1 Introduction',
        slug: 'operators-introduction',
        description: 'Overview of operators on inner product spaces and sesquilinear forms.',
      },
      {
        id: 51,
        title: '9.2 Forms on Inner Product Spaces',
        slug: 'forms-inner-product',
        description: 'Sesquilinear forms and their relationship to linear operators.',
      },
      {
        id: 52,
        title: '9.3 Positive Forms',
        slug: 'positive-forms',
        description: 'Positive semi-definite forms and positive operators.',
      },
      {
        id: 53,
        title: '9.4 More on Forms',
        slug: 'more-on-forms',
        description: 'Polar decomposition and further properties of forms.',
      },
      {
        id: 54,
        title: '9.5 Spectral Theory',
        slug: 'spectral-theory',
        description: 'Spectral decomposition and the spectral theorem.',
      },
      {
        id: 55,
        title: '9.6 Further Properties of Normal Operators',
        slug: 'normal-operator-properties',
        description: 'Advanced properties of normal operators on real and complex spaces.',
      },
    ],
  },
  // ==========================================================================
  // CHAPTER 10: Bilinear Forms
  // ==========================================================================
  {
    id: 10,
    title: 'Bilinear Forms',
    slug: 'bilinear-forms',
    sections: [
      {
        id: 56,
        title: '10.1 Bilinear Forms',
        slug: 'bilinear-forms-definition',
        description: 'Definition and matrix representation of bilinear forms.',
      },
      {
        id: 57,
        title: '10.2 Symmetric Bilinear Forms',
        slug: 'symmetric-bilinear-forms',
        description: 'Symmetric forms, diagonalization, and Sylvester\'s law of inertia.',
      },
      {
        id: 58,
        title: '10.3 Skew-Symmetric Bilinear Forms',
        slug: 'skew-symmetric-forms',
        description: 'Skew-symmetric (alternating) forms and canonical forms.',
      },
      {
        id: 59,
        title: '10.4 Groups Preserving Bilinear Forms',
        slug: 'groups-preserving-forms',
        description: 'Orthogonal, unitary, symplectic, and Lorentz groups.',
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get section by ID
 */
export function getSectionById(id: number): Section | undefined {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === id);
    if (section) return section;
  }
  return undefined;
}

/**
 * Get part (chapter) containing a section
 */
export function getPartBySectionId(sectionId: number): Part | undefined {
  return curriculum.find((part) =>
    part.sections.some((section) => section.id === sectionId)
  );
}

/**
 * Get adjacent sections (previous and next)
 */
export function getAdjacentSections(sectionId: number): {
  prev: Section | null;
  next: Section | null;
} {
  const allSections = curriculum.flatMap((part) => part.sections);
  const index = allSections.findIndex((s) => s.id === sectionId);

  return {
    prev: index > 0 ? allSections[index - 1] : null,
    next: index < allSections.length - 1 ? allSections[index + 1] : null,
  };
}

/**
 * Get total number of sections
 */
export function getTotalSections(): number {
  return curriculum.reduce((total, part) => total + part.sections.length, 0);
}

/**
 * Get all sections as a flat array
 */
export function getAllSections(): Section[] {
  return curriculum.flatMap((part) => part.sections);
}

/**
 * Get section index (position in course)
 */
export function getSectionIndex(sectionId: number): number {
  const allSections = getAllSections();
  return allSections.findIndex((s) => s.id === sectionId);
}
