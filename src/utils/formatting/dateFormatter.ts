import { format, parseISO, formatDistanceToNow, isValid } from 'date-fns';

/**
 * Format a date string or Date object to a readable format
 */
export function formatDate(date: string | Date, formatStr: string = 'PPP'): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) {
      return 'Invalid date';
    }
    return format(dateObj, formatStr);
  } catch (error) {
    return 'Invalid date';
  }
}

/**
 * Format a date to show relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: string | Date): string {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) {
      return 'Invalid date';
    }
    return formatDistanceToNow(dateObj, { addSuffix: true });
  } catch (error) {
    return 'Invalid date';
  }
}

/**
 * Format a date for API requests (ISO format)
 */
export function formatDateForAPI(date: Date): string {
  return date.toISOString();
}
