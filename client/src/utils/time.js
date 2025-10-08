// utils/time.js
export function toUtcIso(input) {
  if (!input) return null;

  // If it's already a Date
  if (input instanceof Date) return input.toISOString();

  // Coerce to string
  const s = String(input).trim();

  // If it already has Z or an explicit offset, assume it’s precise
  if (/[zZ]$/.test(s) || /[+-]\d{2}:\d{2}$/.test(s)) return s;

  // If it's like "YYYY-MM-DD HH:mm[:ss]" make it ISO
  const fixed = s.includes(" ") ? s.replace(" ", "T") : s;

  // Let JS parse as local time, then convert that moment to UTC ISO
  const d = new Date(fixed);
  if (isNaN(d.getTime())) return null; // bad input
  return d.toISOString();
}
