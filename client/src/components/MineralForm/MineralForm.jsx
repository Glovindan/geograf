import React, { useState } from 'react'
import { useAlert  } from 'react-alert'

import { useHttp } from '../../hooks/http.hook'

import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

import styles from './MineralForm.module.css'
import { LOCAL_STORAGE_KEY } from '../../constants/constants'

export const MineralForm = ({ onBackClick, mineral = {}, isCreate }) => {
    const alert = useAlert();
    const { 
        name = '', 
        about = '', 
        company = '', 
        image = '', 
        coordinate = '' 
    } = mineral;


    const [mineralName, setMineralName] = useState(name);
    const [mineralAbout, setMineralAbout] = useState(about);
    const [mineralCompany, setMineralCompany] = useState(company);
    const [mineralImage, setMineralImage] = useState(image);
    const [mineralCoordinate, setMineralCoordinate] = useState(coordinate);

    const { error, loading, request } = useHttp();

    const handleMineralName = (event) => {
        setMineralName(event.target.value);
    }

    const handleMineralAbout = (event) => {
        setMineralAbout(event.target.value);
    }

    const handleMineralCompany = (event) => {
        setMineralCompany(event.target.value);
    }

    const handleMineralImage = (event) => {
        setMineralImage(event.target.value);
    }

    const handleMineralCoordinate = (event) => {
        setMineralCoordinate(event.target.value);
    }

    const requestHandler = async () => {
        if (
            mineralName.length === 0 || 
            mineralImage.length === 0 ||
            mineralAbout.length === 0 ||
            mineralCompany.length === 0 ||
            mineralCoordinate.length === 0
            ) {
                alert.error('Все поля должны быть заполнены!')
                return;
            }

        try {
            if (isCreate) {
                await request(
                    'admin/create',
                    'POST',
                    {
                        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`
                    },
                    {
                        title: mineralName,
                        imageURL: mineralImage,
                        description: mineralAbout,
                        companies: mineralCompany,
                        coords: mineralCoordinate
                    }
                );
                alert.info('Минерал добавлен');
            } else {
                await request(
                    'admin/edit',
                    'POST',
                    {
                        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`
                    },
                    {
                        id: mineral.id,
                        title: mineralName,
                        imageURL: mineralImage,
                        description: mineralAbout,
                        companies: mineralCompany,
                        coords: mineralCoordinate
                    }
                );
                alert.info('Минерал обновлен');
            }
        } catch (e) {
            alert.error(e);
        }

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
                    text={'Введите компании по добыче минерала'}
                    name={'mineralCompany'}
                    labelText={'Компании'}
                    type={'text'}
                    value={mineralCompany}
                    onChange={handleMineralCompany}
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
                    text={'x.x, y.y; i.i, j.j; . . .'}
                    name={'mineralCoordinate'}
                    labelText={'Координаты минерала'}
                    type={'text'}
                    value={mineralCoordinate}
                    onChange={handleMineralCoordinate}
                />
                <div className={styles.btns}>
                    <Button text='Назад' onClick={onBackClick} />
                    {!loading &&
                        <Button text='Отправить' onClick={requestHandler} />
                    }
                </div>
            </div>
        </div>
    )
}
