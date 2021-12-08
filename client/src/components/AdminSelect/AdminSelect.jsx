import React from 'react'
import { Button } from '../Button/Button'

import styles from './AdminSelect.module.css'

const mock = ['кот', 'ещё кот', 'другой кот', 'четвёртый кот', 'me', 'michael']

export const AdminSelect = ({ textAbout }) => {

    return (
        <div className={styles.wrapper}>
            <Button text={'Назад'} />
            <h4 className={styles.heading}>{textAbout}</h4>
            <div className={styles.list}>
                {mock.map(m => {
                    return (
                        <div 
                            className={styles.element}
                            onClick={() => console.log('qwe', m)}
                        >
                            {m}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
