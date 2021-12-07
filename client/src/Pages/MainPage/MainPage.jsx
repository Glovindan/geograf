import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'

import { MineralList } from '../../components/MineralList/MineralList';

import styles from './MainPage.module.css';

export const MainPage = () => {
    const alert = useAlert();

    useEffect(() => {
        alert.show('Oh look, an alert!');
        alert.info('info');
        alert.error('error');
    }, []);

    return (
        <>
            <div className={styles.mineralList}>
                <MineralList />
            </div>
        </>
    )
}
