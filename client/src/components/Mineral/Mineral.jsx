import React from 'react'

import styles from './Mineral.module.css';

export const Mineral = ({id, imageURL, title}) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={imageURL} alt="not-cat" />
            <div className={styles.textWrapper}>
                <h3 className={styles.heading}>{title}</h3>
            </div>
        </div>
    )
}
