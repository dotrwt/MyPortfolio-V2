/**
 * Simple className utility - merges class names, filtering falsy values.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
