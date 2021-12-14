import React, { useState, useEffect } from 'react'
import { AdminPanel } from '../../components/AdminPanel/AdminPanel'
import { AdminSelect } from '../../components/AdminSelect/AdminSelect'

import { Auth } from '../../components/Auth/Auth'

import { LOCAL_STORAGE_KEY } from '../../constants/constants'

import styles from './AdminPage.module.css';

export const AdminPage = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (token) setIsAuth(true);
    }, [isAuth])

    return (
        <>
            <div className={styles.content}>
                {isAuth ? (
                    <AdminPanel
                        onExit={() => {
                            setIsAuth(false);    
                        }}
                    />
                ) : (
                    <Auth onSuccessAuth={() => {
                        setIsAuth(true);
                    }} />
                )}
            </div>
            {/* <AdminSelect textAbout={'Выберите минерал который надо удалить'} /> */}
            {/* <MineralForm /> */}
        </>
    )
}
