import React, { useState } from 'react'

import { LOCAL_STORAGE_KEY } from '../../constants/constants';
import { Button } from '../Button/Button'
import { MineralForm } from '../MineralForm/MineralForm';

import styles from './AdminPanel.module.css';

export const AdminPanel = ({ onExit }) => {
    const [ isAddMineral, setIsAddMineral ] = useState(false);
    const [ isEditMineral, setIsEditMineral ] = useState(false);
    const [ isDeleteMineral, setIsDeleteMineral ] = useState(false);

    const handleExitClick = () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        onExit();
    }

    const handleAddMineralClick = () => {
        setIsAddMineral(true);
    }
    
    const handleEditMineralClick = () => {
        setIsEditMineral(true);
    }

    const handleDeleteMineralClick = () => {
        setIsDeleteMineral(true);
    }

    return (
        <div className={styles.wrapper}>
            {!isAddMineral && !isEditMineral && !isDeleteMineral ? (
                <div className={styles.buttonsWrapper}>
                    <Button text={'Добавить'} onClick={handleAddMineralClick}/>
                    <Button text={'Редактировать'} onClick={handleEditMineralClick} />
                    <Button text={'Удалить'} onClick={handleDeleteMineralClick} />
                    <Button text={'Выйти из аккаунта'} onClick={handleExitClick} />
                </div>
            ) : (
                isAddMineral && <MineralForm onBackClick={() => setIsAddMineral(false)} /> ||
                isEditMineral && <div>Edit mineral</div> ||
                isDeleteMineral && <div>Delete mineral</div>
            )}
        </div>
    )
}
