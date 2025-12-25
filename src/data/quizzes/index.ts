/**
 * Quiz Questions Index - Advanced Linear Algebra (Hoffman & Kunze)
 *
 * Export all section and chapter quizzes from this file.
 */

import type { QuizQuestion } from '@magic-internet-math/shared';

export type { QuizQuestion } from './types';

// =============================================================================
// CHAPTER QUIZ EXPORTS
// =============================================================================

// Chapter 1: Linear Equations (Sections 1-6)
export * from './chapter01';

// Chapter 2: Vector Spaces (Sections 7-12)
export * from './chapter02';

// Chapter 3: Linear Transformations (Sections 13-19)
export * from './chapter03';

// Chapter 4: Polynomials (Sections 20-24)
export * from './chapter04';

// Chapter 5: Determinants (Sections 25-31)
export * from './chapter05';

// Chapter 6: Elementary Canonical Forms (Sections 32-39)
export * from './chapter06';

// Chapter 7: The Rational and Jordan Forms (Sections 40-44)
export * from './chapter07';

// Chapter 8: Inner Product Spaces (Sections 45-49)
export * from './chapter08';

// Chapter 9: Operators on Inner Product Spaces (Sections 50-55)
export * from './chapter09';

// Chapter 10: Bilinear Forms (Sections 56-59)
export * from './chapter10';

// =============================================================================
// IMPORTS FOR QUIZ MAPS
// =============================================================================

import { 
  section01Quiz, section02Quiz, section03Quiz, section04Quiz, section05Quiz, section06Quiz,
  chapter01Quiz 
} from './chapter01';

import { 
  section07Quiz, section08Quiz, section09Quiz, section10Quiz, section11Quiz, section12Quiz,
  chapter02Quiz 
} from './chapter02';

import { 
  section13Quiz, section14Quiz, section15Quiz, section16Quiz, section17Quiz, section18Quiz, section19Quiz,
  chapter03Quiz 
} from './chapter03';

import { 
  section20Quiz, section21Quiz, section22Quiz, section23Quiz, section24Quiz,
  chapter04Quiz 
} from './chapter04';

import { 
  section25Quiz, section26Quiz, section27Quiz, section28Quiz, section29Quiz, section30Quiz, section31Quiz,
  chapter05Quiz 
} from './chapter05';

import { 
  section32Quiz, section33Quiz, section34Quiz, section35Quiz, section36Quiz, section37Quiz, section38Quiz, section39Quiz,
  chapter06Quiz 
} from './chapter06';

import { 
  section40Quiz, section41Quiz, section42Quiz, section43Quiz, section44Quiz,
  chapter07Quiz 
} from './chapter07';

import { 
  section45Quiz, section46Quiz, section47Quiz, section48Quiz, section49Quiz,
  chapter08Quiz 
} from './chapter08';

import { 
  section50Quiz, section51Quiz, section52Quiz, section53Quiz, section54Quiz, section55Quiz,
  chapter09Quiz 
} from './chapter09';

import { 
  section56Quiz, section57Quiz, section58Quiz, section59Quiz,
  chapter10Quiz 
} from './chapter10';

// =============================================================================
// SECTION QUIZ MAP
// =============================================================================

export const sectionQuizzes: Record<string, QuizQuestion[]> = {
  // Chapter 1
  '01': section01Quiz,
  '02': section02Quiz,
  '03': section03Quiz,
  '04': section04Quiz,
  '05': section05Quiz,
  '06': section06Quiz,
  // Chapter 2
  '07': section07Quiz,
  '08': section08Quiz,
  '09': section09Quiz,
  '10': section10Quiz,
  '11': section11Quiz,
  '12': section12Quiz,
  // Chapter 3
  '13': section13Quiz,
  '14': section14Quiz,
  '15': section15Quiz,
  '16': section16Quiz,
  '17': section17Quiz,
  '18': section18Quiz,
  '19': section19Quiz,
  // Chapter 4
  '20': section20Quiz,
  '21': section21Quiz,
  '22': section22Quiz,
  '23': section23Quiz,
  '24': section24Quiz,
  // Chapter 5
  '25': section25Quiz,
  '26': section26Quiz,
  '27': section27Quiz,
  '28': section28Quiz,
  '29': section29Quiz,
  '30': section30Quiz,
  '31': section31Quiz,
  // Chapter 6
  '32': section32Quiz,
  '33': section33Quiz,
  '34': section34Quiz,
  '35': section35Quiz,
  '36': section36Quiz,
  '37': section37Quiz,
  '38': section38Quiz,
  '39': section39Quiz,
  // Chapter 7
  '40': section40Quiz,
  '41': section41Quiz,
  '42': section42Quiz,
  '43': section43Quiz,
  '44': section44Quiz,
  // Chapter 8
  '45': section45Quiz,
  '46': section46Quiz,
  '47': section47Quiz,
  '48': section48Quiz,
  '49': section49Quiz,
  // Chapter 9
  '50': section50Quiz,
  '51': section51Quiz,
  '52': section52Quiz,
  '53': section53Quiz,
  '54': section54Quiz,
  '55': section55Quiz,
  // Chapter 10
  '56': section56Quiz,
  '57': section57Quiz,
  '58': section58Quiz,
  '59': section59Quiz,
};

// =============================================================================
// CHAPTER QUIZ MAP
// =============================================================================

export const chapterQuizzes: Record<string, QuizQuestion[]> = {
  '01': chapter01Quiz,
  '02': chapter02Quiz,
  '03': chapter03Quiz,
  '04': chapter04Quiz,
  '05': chapter05Quiz,
  '06': chapter06Quiz,
  '07': chapter07Quiz,
  '08': chapter08Quiz,
  '09': chapter09Quiz,
  '10': chapter10Quiz,
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get quiz by section number
 */
export function getSectionQuiz(sectionNumber: number): QuizQuestion[] | undefined {
  const key = sectionNumber.toString().padStart(2, '0');
  return sectionQuizzes[key];
}

/**
 * Get quiz by chapter number
 */
export function getChapterQuiz(chapterNumber: number): QuizQuestion[] | undefined {
  const key = chapterNumber.toString().padStart(2, '0');
  return chapterQuizzes[key];
}
