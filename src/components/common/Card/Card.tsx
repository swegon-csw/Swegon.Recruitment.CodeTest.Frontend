import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'medium',
  className,
  onClick,
}: CardProps) {
  const cardClasses = classNames(
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    {
      [styles.clickable]: onClick,
    },
    className
  );

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
}
