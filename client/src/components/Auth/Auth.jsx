import React, { useState } from 'react'
import { useAlert } from 'react-alert';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useHttp } from '../../hooks/http.hook';

import styles from './Auth.module.css';
import { LOCAL_STORAGE_KEY } from '../../constants/constants';

export const Auth = ({ onSuccessAuth }) => {
    const alert = useAlert();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const { request, loading, error } = useHttp();

    const handleLogin = (event) => {
        setLogin(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleButtonClick =  async () => {
        try {
            const res = await request(
                'admin/login',
                'POST',
                {},
                {
                    login: login,
                    password: password
                }
            )
    
            if (res.status != 200) {
                alert.error('Ошибочка вышла, хех :)');
                return;
            }

            localStorage.setItem(LOCAL_STORAGE_KEY, res.token);
            alert.show(res.message);
            onSuccessAuth();
        } catch (e) {
            alert.error('Ошибочка вышла, хех :)');
        }
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
                <Button text={'Войти'} onClick={handleButtonClick} />
            </div>
        </div>
    )
}
