import type { Festival } from "@/data/festivals";

function toISO(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/**
 * Computes the next occurrence of a fixed annual month/day (optionally a
 * multi-day range) on or after `reference`. Used for Event startDate/endDate
 * so festival pages don't need re-editing every year.
 */
export function nextOccurrence(
  fixedDate: NonNullable<Festival["fixedDate"]>,
  reference: Date = new Date()
): { startDate: string; endDate: string } {
  const refYear = reference.getFullYear();
  const refMonth = reference.getMonth() + 1;
  const refDay = reference.getDate();

  const endMonth = fixedDate.endMonth ?? fixedDate.month;
  const endDay = fixedDate.endDay ?? fixedDate.day;
  const spansYearEnd = endMonth < fixedDate.month || (endMonth === fixedDate.month && endDay < fixedDate.day);

  let year = refYear;
  const isPast =
    fixedDate.month < refMonth || (fixedDate.month === refMonth && fixedDate.day < refDay);
  if (isPast) year += 1;

  const startDate = toISO(year, fixedDate.month, fixedDate.day);
  const endDate = toISO(spansYearEnd ? year + 1 : year, endMonth, endDay);

  return { startDate, endDate };
}
