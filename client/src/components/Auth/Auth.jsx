import React from 'react'

import styles from './Auth.module.css';

export const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <input type="text" placeholder={'Логин'} />
                <input type="password" name="password" id="password" placeholder={'Пароль'} />
                <button className={styles.btn}>Кнопка</button>
            </div>
        </div>
    )
}
