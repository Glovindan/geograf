import React, {useEffect, useState} from 'react'
import { Mineral } from '../Mineral/Mineral';
import { Button } from "../Button/Button";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import styles from './MineralList.module.css';

import { useHttp } from '../../hooks/http.hook';
import { Loader } from '../Loader/Loader';

export const MineralList = () => {
    const { request, loading, error } = useHttp();
    const [list, setList] = useState([]);

    const getMineralList = async () => {
        const res = await request(
            'user/getMineralsList',
            'GET',
            {},
            {
                page: 0
            }
        )

        setList(res.message);
    }

    useEffect(() => {
        getMineralList();
    }, []);

    return (
        <div className={styles.wrapper}>
            {loading ? <Loader /> :
            list.length > 0 && list.map((mineral, index) => {
                console.log(mineral);
                return (
                    <Link key={index} to={ROUTES.MINERAL_PAGE + '/' + mineral._id}>
                        <Mineral {...mineral} />
                    </Link>
                )
            })}
        </div>
    )
}
