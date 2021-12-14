import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'

import { MineralList } from '../../components/MineralList/MineralList';
import { Button } from "../../components/Button/Button";

import { useHttp } from '../../hooks/http.hook';

import styles from './MainPage.module.css';

export const MainPage = () => {
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    const alert = useAlert();
    const { request, loading, error } = useHttp();

    // useEffect(() => {
        // alert.show('Oh look, an alert!');
        // alert.info('info');
        // alert.error('error');
    // }, []);

    const getMineralList = async (page) => {
        const res = await request(
            'user/getMineralsList',
            'GET',
            {
                page: page
            },
            {}
        )

        setList(res.message);
    }

    useEffect(() => {
        getMineralList(page);
    }, []);


    const nextPage = () => {
        setPage((prev) => {
            prev = prev + 1;
            getMineralList(prev);
            return prev;
        })
    }

    const prevPage = () => {
        setPage((prev) => {
            if (prev === 1) {
                alert.info('Туда нельзя 0_о');
                return;
            }
            prev = prev - 1;
            getMineralList(prev);
            return prev;
        })
    }

    return (
        <>
            <div className={styles.mineralList}>
                <MineralList list={list} loading={loading} />
                <div className={styles.navButtons}>
                    <Button text="Предыдущая страница" onClick={prevPage} />
                    <Button text="Следующая страница" onClick={nextPage} />
                </div>
            </div>
        </>
    )
}
