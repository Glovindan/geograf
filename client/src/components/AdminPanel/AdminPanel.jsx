import React from 'react'
import { Button } from '../Button/Button'

import styles from './AdminPanel.module.css';

export const AdminPanel = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonsWrapper}>
                <Button text={'Добавить'} />
                <Button text={'Редактировать'} />
                <Button text={'Удалить'} />
            </div>
        </div>
    )
}
