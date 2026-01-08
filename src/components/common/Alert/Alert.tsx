import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Alert.module.css';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function Alert({ type = 'info', children, onClose, className }: AlertProps) {
  return (
    <div className={classNames(styles.alert, styles[type], className)} role="alert">
      <div className={styles.content}>{children}</div>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose} aria-label="Close alert">
          ×
        </button>
      )}
    </div>
  );
}
