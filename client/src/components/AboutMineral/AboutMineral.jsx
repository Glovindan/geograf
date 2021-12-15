import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

import { useHttp } from '../../hooks/http.hook';
import { ROUTES } from '../../constants/routes';

import styles from './AboutMineral.module.css';

export const AboutMineral = () => {
    const [mineral, setMineral] = useState();
    const { request, loading, error } = useHttp();
    const { id } = useParams();

    const getMineral = async () => {
        const res = await request(
            `user/getMineral?id=${id}`,
            'GET',
        );
        
        setMineral(res.message);
    }

    useEffect(() => {
        getMineral();
    }, [])
    
    return (
        loading ? <Loader /> :
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={mineral?.imageURL} alt="main-polite-cat" />
                </div>
                <h2>{mineral?.title}</h2>
                <h3>{mineral?.companies}</h3>
                <h4>{mineral?.coords}</h4>
                <p>
                    {mineral?.description}
                </p>
                <Link to={ROUTES.MAIN_PAGE}>
                    <Button text={'Назад'} />
                </Link>
            </div>
        </div>
    )
}
