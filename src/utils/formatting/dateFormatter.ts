import { format, isValid, parseISO } from "date-fns";

export function formatDate(date: string | Date, formatStr: string = "PPP"): string {
  try {
    const dateObj = typeof date === "string" ? parseISO(date) : date;
    if (!isValid(dateObj)) {
      return "Invalid date";
    }
    return format(dateObj, formatStr);
  } catch {
    return "Invalid date";
  }
}

export function formatDateForAPI(date: Date): string {
  return date.toISOString();
}
