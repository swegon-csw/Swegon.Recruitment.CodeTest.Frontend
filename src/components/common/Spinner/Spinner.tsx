import styles from './Spinner.module.css';
import classNames from 'classnames';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'white';
  className?: string;
}

export default function Spinner({ size = 'medium', color = 'primary', className }: SpinnerProps) {
  return (
    <div
      className={classNames(styles.spinner, styles[size], styles[color], className)}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
