// Minimal className combiner — this project has no other conditional-class-merging
// needs, so no clsx/tailwind-merge dependency; just filters and joins.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
