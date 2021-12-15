import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'

import { MineralList } from '../../components/MineralList/MineralList';
import { Button } from "../../components/Button/Button";

import { useHttp } from '../../hooks/http.hook';

import styles from './MainPage.module.css';

export const MainPage = () => {
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const [sortMode, setSortMode] = useState('1');
    const [isAscending, setAscending] = useState('1');
    const [isOver, setIsOver] = useState(false);
    const alert = useAlert();
    const { request, loading, error } = useHttp();

    // useEffect(() => {
    // alert.show('Oh look, an alert!');
    // alert.info('info');
    // alert.error('error');
    // }, []);

    const getMineralList = async (page, sortMode, isAscending) => {
        console.log('getMineralList');
        const res = await request(
            `user/getMineralsList?page=${page}&sortMode=${sortMode}&isAscending=${isAscending}`,
            'GET',
            {},
            {}
        )

        if (res.message.length === 0) {
            setIsOver(true);
        }

        setList(res.message);
    }

    useEffect(() => {
        console.log('useEffect');
        getMineralList(page, sortMode, isAscending);
    }, []);


    const nextPage = () => {
        console.log('nextPage')
        setPage((prev) => {
            prev = prev + 1;
            getMineralList(prev, sortMode, isAscending);
            return prev;
        })
    }

    const prevPage = () => {
        console.log('prevPage')
        setIsOver(false);
        if (page === 1) {
            alert.info('Туда нельзя 0_о');
            return;
        }

        setPage((prev) => {
            prev = prev - 1;
            getMineralList(prev, sortMode, isAscending);
            return prev;
        })
    }

    const handleSortMode = async () => {
        setSortMode((prev) => {
            prev = prev === '1' ? '0' : '1';
            getMineralList(page, prev, isAscending);
            return prev;
        })
    }

    const handleAscendingMode = async () => {
        setAscending((prev) => {
            prev = prev === '1' ? '0' : '1';
            getMineralList(page, sortMode, prev);
            return prev;
        })
    }

    return (
        <div className={styles.wrapper}>
            {!isOver &&
                <>
                    <h3>Сортировка</h3>
                    <div className={styles.sortButtons}>
                        <Button
                            text={sortMode === '1' ? 'По количеству месторождений' : 'По алфавиту'}
                            onClick={handleSortMode}
                        />
                        <Button
                            text={isAscending === '1' ? 'По возрастанию' : 'По убыванию'}
                            onClick={handleAscendingMode}
                        />
                    </div>
                </>}
            <div className={styles.mineralListWrapper}>
                <MineralList list={list} loading={loading} />
            </div>
            <div className={styles.navButtons}>
                <Button text="Предыдущая страница" onClick={prevPage} />
                {!isOver && <Button text="Следующая страница" onClick={nextPage} />}
            </div>
        </div>
    )
}
