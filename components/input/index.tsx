import React from 'react';
import styles from './input.module.css';
import { InputProps } from './input.types';

export const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${styles.input} ${error ? styles.error : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className={styles.errorMessage}>{error}</p>
      )}
    </div>
  );
};

export default Input;