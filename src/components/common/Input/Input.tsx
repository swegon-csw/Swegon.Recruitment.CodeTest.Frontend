import { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, className, ...props }, ref) => {
    const inputClasses = classNames(
      styles.input,
      {
        [styles.error]: error,
        [styles.fullWidth]: fullWidth,
      },
      className
    );

    return (
      <div className={classNames(styles.container, { [styles.fullWidth]: fullWidth })}>
        {label && (
          <label className={styles.label} htmlFor={props.id}>
            {label}
            {props.required && <span className={styles.required}>*</span>}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <span className={styles.errorText}>{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
