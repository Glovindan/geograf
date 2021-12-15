import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { useHttp } from '../../hooks/http.hook'

import styles from './MapPage.module.css';
import { Button } from "../../components/Button/Button";

export const MapPage = () => {
    const [isMap, setMap] = useState(false);
    const [list, setList] = useState();
    const { request, loading, error } = useHttp();
    const [mineral, setMineral] = useState();
    const [mineralCoords, setMineralCoords] = useState([]);

    const getMineralInfo = async (id) => {
        const res = await request(
            `user/getMineral?id=${id}`,
            'GET',
        );

        return res.message
    }

    const getList = async () => {
        const res = await request(
            'user/getMineralAllList',
            'GET',
            {},
            {}
        );

        setList(res.message);
    }

    const handlerListClick = async (id) => {
        const mineral = await getMineralInfo(id);
        setMineralCoords(mineral.coords?.split(';').map(coorditane => coorditane.split(',')));
        setMineral(mineral);
        setMap(true);
    }

    useEffect(() => {
        getList();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {!isMap ? (
                    !loading &&
                    <>
                        <h3>Выберите минерал, чтобы посмотреть, где он добывается</h3>
                        <div className={styles.list}>
                            {list && list.map(l => {
                                return (
                                    <div
                                        key={l._id}
                                        className={styles.element}
                                        onClick={() => handlerListClick(l._id)}
                                    >
                                        {l.title}
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        <Button text={'Назад'} onClick={() => setMap(false)} />
                        <div></div>
                        <YMaps>
                            <Map
                                className={styles.map}
                                defaultState={{ center: [55.75, 37.57], zoom: 4 }}
                                height="100%"
                                width="100%"
                            >
                                {!loading && mineralCoords?.length > 0 && mineralCoords.map((m, i) => {
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
