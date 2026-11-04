// Ghana/Accra is UTC+0 year-round (no DST)  pin the target with an explicit
// offset so every visitor worldwide counts down to the same Accra midnight,
// rather than each visitor's own local midnight (a bare ISO string without a
// timezone designator parses as *local* time, which would silently produce a
// different day-count per visitor timezone).
export const FLAGSHIP_EVENT_DATE = new Date("2026-12-11T00:00:00+00:00");

export function daysUntil(target: Date, now: Date = new Date()): number {
  return Math.max(0, Math.ceil((target.getTime() - now.getTime()) / 86_400_000));
}
