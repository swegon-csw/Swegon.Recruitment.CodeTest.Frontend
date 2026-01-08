import { useState, ChangeEvent } from 'react';
import { FormState, ValidationRules } from '@/types/form.types';
import { validateField } from '@/utils/validation/formValidation';

/**
 * Hook for managing form state and validation
 */
export function useForm<T extends Record<string, unknown>>(
  initialValues: T,
  validationRules?: ValidationRules<T>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof T) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));

    // Validate field if rules exist and field is touched
    if (validationRules?.[field] && touched[field]) {
      const error = validateField(value, validationRules[field]);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: keyof T) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate field on blur
    if (validationRules?.[field]) {
      const error = validateField(values[field], validationRules[field]);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const setValue = (field: keyof T, value: unknown) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!validationRules) return true;

    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    for (const field in validationRules) {
      const error = validateField(values[field], validationRules[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  const formState: FormState<T> = {
    values,
    errors,
    touched,
    dirty: Object.keys(touched).length > 0,
    isValid: Object.keys(errors).length === 0,
    isSubmitting,
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    formState,
    handleChange,
    handleBlur,
    setValue,
    setIsSubmitting,
    validateForm,
    reset,
  };
}
