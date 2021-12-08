import React, { useState } from 'react'

import { useHttp } from '../../hooks/http.hook'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

import styles from './MineralForm.module.css'

export const MineralForm = () => {
    const [mineralName, setMineralName] = useState('');
    const [mineralAbout, setMineralAbout] = useState('');
    const [mineralImage, setMineralImage] = useState('');
    const [mineralCoordinate, setMineralCoordinate] = useState('');

    const { error, loading, request } = useHttp();

    const handleMineralName = (event) => {
        setMineralName(event.target.value);
    }

    const handleMineralAbout = (event) => {
        setMineralAbout(event.target.value);
    }

    const handleMineralImage = (event) => {
        setMineralImage(event.target.value);
    }

    const handleMineralCoordinate = (event) => {
        setMineralCoordinate(event.target.value);
    }

    const requestHandler = async () => {
        await request(
            'admin/login',
            'POST',
            {},
            {
                login: "test",
                password: "test"
            }
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Input
                    text={'Введите название минерала'}
                    name={'mineralName'}
                    labelText={'Назваение минерала'}
                    type={'text'}
                    value={mineralName}
                    onChange={handleMineralName}
                />
                <Input
                    text={'Введите описание минерала'}
                    name={'mineralAbout'}
                    labelText={'Описание минерала'}
                    type={'text'}
                    value={mineralAbout}
                    onChange={handleMineralAbout}
                />
                <Input
                    text={'Введите URL для картинки'}
                    name={'mineralAbout'}
                    labelText={'URL картинки'}
                    type={'text'}
                    value={mineralImage}
                    onChange={handleMineralImage}
                />
                <Input
                    text={'Введите координаты минерала'}
                    name={'mineralCoordinate'}
                    labelText={'Координаты минерала'}
                    type={'text'}
                    value={mineralCoordinate}
                    onChange={handleMineralCoordinate}
                />
                <div className={styles.btns}>
                    <Button text='Назад' />
                    <Button text='Отправить' onClick={requestHandler} />
                </div>
            </div>
        </div>
    )
}
