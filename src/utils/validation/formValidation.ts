import { ValidationRule } from '@/types/form.types';
import * as validators from './validators';

/**
 * Validate a single field value against a validation rule
 */
export function validateField<T>(value: T, rule?: ValidationRule<T>): string | undefined {
  if (!rule) {
    return undefined;
  }

  // Required validation
  if (rule.required && !validators.isRequired(value as never)) {
    return 'This field is required';
  }

  // Skip further validation if value is empty and not required
  if (!value && !rule.required) {
    return undefined;
  }

  // String length validation
  if (typeof value === 'string') {
    if (!validators.isValidLength(value, rule.minLength, rule.maxLength)) {
      if (rule.minLength && rule.maxLength) {
        return `Must be between ${rule.minLength} and ${rule.maxLength} characters`;
      } else if (rule.minLength) {
        return `Must be at least ${rule.minLength} characters`;
      } else if (rule.maxLength) {
        return `Must be at most ${rule.maxLength} characters`;
      }
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return 'Invalid format';
    }
  }

  // Number range validation
  if (typeof value === 'number') {
    if (!validators.isInRange(value, rule.min ?? -Infinity, rule.max ?? Infinity)) {
      if (rule.min !== undefined && rule.max !== undefined) {
        return `Must be between ${rule.min} and ${rule.max}`;
      } else if (rule.min !== undefined) {
        return `Must be at least ${rule.min}`;
      } else if (rule.max !== undefined) {
        return `Must be at most ${rule.max}`;
      }
    }
  }

  // Custom validation
  if (rule.custom) {
    return rule.custom(value);
  }

  return undefined;
}

/**
 * Validate an entire form object
 */
export function validateForm<T extends Record<string, unknown>>(
  values: T,
  rules: Partial<Record<keyof T, ValidationRule>>
): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const key in rules) {
    const error = validateField(values[key], rules[key]);
    if (error) {
      errors[key] = error;
    }
  }

  return errors;
}
