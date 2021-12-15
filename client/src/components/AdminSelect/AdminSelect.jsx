import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { Button } from '../Button/Button'
import { Loader } from '../Loader/Loader'

import { useHttp } from '../../hooks/http.hook'
import { LOCAL_STORAGE_KEY } from '../../constants/constants'

import styles from './AdminSelect.module.css'
import { MineralForm } from '../MineralForm/MineralForm'

export const AdminSelect = ({ isDelete, textAbout, onBackClick }) => {
    const [list, setList] = useState([]);
    const [mineral, setMineral] = useState(null);
    const [isEditMineral, setEditMineral] = useState(false);
    const { request, loading, error } = useHttp();
    const alert = useAlert();

    const getList = async () => {
        const res = await request(
            'user/getMineralAllList',
            'GET',
            {},
            {}
        );

        setList(res.message);
    }

    const deleteMineral = async (id) => {
        const delRes = await request(
            'admin/delete',
            'POST',
            {
                authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`
            },
            {
                id: id
            }
        );

        if (delRes.status !== 200) {
            alert.error('Ошибка, хе-хе');
        }

        const listRes = await request(
            'user/getMineralAllList',
            'GET',
            {},
            {}
        );

        if (listRes.status !== 200) {
            alert.error('Ошибка при обновлении, попробуйте обновить страницу вручную');
        }

        alert.info('Всё чётко, бро!');
        setList(listRes.message);
    }

    const getMineralInfo = async (id) => {
        const res = await request(
            `user/getMineral?id=${id}`,
            'GET',
        );

        return res.message
    }

    const editMineral = async (id) => {
        const mineral = await getMineralInfo(id);
        setMineral({
            id: id,
            name: mineral.title,
            about: mineral.description,
            company: mineral.companies,
            image: mineral.imageURL,
            coordinate: mineral.coords
        })

        setEditMineral(true);
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        loading ? (
            <Loader />
        ) : (
            !isEditMineral ? (
                <div className={styles.wrapper}>
                    <Button text={'Назад'} onClick={onBackClick} />
                    <h4 className={styles.heading}>{textAbout}</h4>
                    <div className={styles.list}>
                        {list.map(l => {
                            return (
                                <div
                                    key={l._id} 
                                    className={styles.element}
                                    onClick={() => isDelete ? deleteMineral(l._id) : editMineral(l._id)}
                                >
                                    {l.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                !loading && <MineralForm onBackClick={() => setEditMineral(false)} mineral={mineral} />
            )
        )
    )
}
