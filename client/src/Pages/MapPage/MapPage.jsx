import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { useHttp } from '../../hooks/http.hook'

import { LOCAL_STORAGE_KEY } from '../../constants/constants';
import styles from './MapPage.module.css';
import { Button } from "../../components/Button/Button";

const mockCoord = [[55.75, 37.57], [25.75, 37.57], [55.75, 17.57], [15.75, 17.57]]

export const MapPage = () => {
    const [isMap, setMap] = useState(false);
    const [list, setList] = useState();
    const { request, loading, error } = useHttp();

    const getMineralInfo = async (id) => {
        const res = await request(
            `user/getMineral?id=${id}`,
            'GET',
        );

        return res.message
    }

    const getList = async () => {
        const res = await request(
            'user/getMineralsList',
            'GET',
            {
                page: 1
            },
            {}
        );

        setList(res.message);
    }

    useEffect(() => {
        getList();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {!isMap ? (
                    !loading &&
                    <div className={styles.list}>
                        {list && list.map(l => {
                            return (
                                <div
                                    key={l._id}
                                    className={styles.element}
                                    onClick={() => setMap(true)}
                                >
                                    {l.title}
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <>
                        <Button text={'Назад'} onClick={() => setMap(false)} />
                        <YMaps>
                            <Map
                                className={styles.map}
                                defaultState={{ center: [55.75, 37.57], zoom: 4 }}
                                height="100%"
                                width="100%"
                            >
                                {mockCoord.map((m, i) => {
                                    return (
                                        <Placemark key={i} geometry={m} />
                                    )
                                })}
                            </Map>
                        </YMaps>
                    </>
                )}
            </div>
        </div>
    )
}
