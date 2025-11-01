// Centralized nav visibility flags.
// Flip any value to true/false to show/hide items in the header.
export const navVisibility = {
  home: false,
  projects: true,
  blog: false,
  about: true,
  contact: true,
  resume: true,
} as const;

export type NavKey = keyof typeof navVisibility;