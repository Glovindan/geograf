import React from 'react';

import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>География</h1>
                <div className={styles.buttonsWrapper}>
                    <p>Админка</p>
                    <p>Домой</p>
                </div>
            </div>
        </div>
    )
}
