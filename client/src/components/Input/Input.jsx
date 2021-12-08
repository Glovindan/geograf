import React from 'react'

import styles from './Input.module.css';

export const Input = ({
    text,
    name,
    labelText,
    type,
    value,
    onChange
}) => {
    return (
        <div className={styles.wrapper}>
            {labelText && <label className={styles.label} htmlFor={name}>
                {labelText}
            </label>}
            <input
                className={styles.input}
                placeholder={text}
                type={type}
                value={value}
                onChange={onChange}
                id={name}
                name={name}
            />
        </div>
    )
}
