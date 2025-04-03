import React from 'react';
import styles from './card.module.css';
import { CardProps } from './card.types';

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;