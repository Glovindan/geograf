import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>География</h1>
                <div className={styles.buttonsWrapper}>
                    <Link to={ROUTES.ADMIN_PAGE}>
                        Админка
                    </Link>
                    <Link to={ROUTES.MAP_PAGE}>
                        Карта
                    </Link>
                    <Link to={ROUTES.MAIN_PAGE}>
                        Домой
                    </Link>
                </div>
            </div>
        </div>
    )
}
