import { SelectHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.css';

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  options: Option[];
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, error, helperText, fullWidth = false, className, ...props }, ref) => {
    const selectClasses = classNames(
      styles.select,
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
        <select ref={ref} className={selectClasses} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className={styles.errorText}>{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
