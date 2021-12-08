import React, { useState } from 'react'
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

import styles from './Auth.module.css';

export const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        setLogin(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Input
                    text={'Логин'}
                    type={'text'}
                    value={login}
                    onChange={handleLogin}
                />
                <Input
                    text={'Пароль'}
                    type={'password'}
                    value={password}
                    onChange={handlePassword}
                />
                <Button text={'Войти'} />
            </div>
        </div>
    )
}
