// =============================================================================
// COURSE CONFIGURATION
// =============================================================================
// Advanced Linear Algebra - Based on Hoffman & Kunze (2nd Edition)
// =============================================================================

import type { CourseId } from '@magic-internet-math/shared';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 */
export const COURSE_ID: CourseId = 'advlinalg';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Advanced Linear Algebra';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'A rigorous treatment of linear algebra based on Hoffman & Kunze, covering vector spaces, linear transformations, polynomials, determinants, canonical forms, and inner product spaces.';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'cyan';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = '🔷';

/**
 * Base path for routing (must match vite.config.ts)
 */
export const BASE_PATH = '/advanced-linalg/';

/**
 * Hub URL - main Magic Internet Math landing page
 */
export const HUB_URL = 'https://mathacademy-cyan.vercel.app';

/**
 * External links
 */
export const LINKS = {
  hub: HUB_URL,
  home: '/',
  leaderboard: `${BASE_PATH}#/leaderboard`,
  theorems: `${BASE_PATH}#/theorems`,
  interactive: `${BASE_PATH}#/interactive`,
} as const;

/**
 * Feature flags - enable/disable features per course
 */
export const FEATURES = {
  gamification: true,
  leaderboard: true,
  nostrAuth: true,
  quizzes: true,
  interactiveModules: true,
  theoremIndex: true,
} as const;
