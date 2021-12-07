import React from 'react'

import styles from './Mineral.module.css';

export const Mineral = ({ image, heading, about }) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={image} alt="polite-cat" />
            <div className={styles.textWrapper}>
                <h3 className={styles.heading}>{heading}</h3>
                <p className={styles.about}>{about}</p>
            </div>
        </div>
    )
}
