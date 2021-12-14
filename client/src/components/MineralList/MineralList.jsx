import React from 'react'

import { Mineral } from '../Mineral/Mineral';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

import { ROUTES } from '../../constants/routes';

import styles from './MineralList.module.css';


export const MineralList = ({ list, loading }) => {
    return (
        <div className={styles.wrapper}>
            {loading ? <Loader /> :
            list.length > 0 && list.map((mineral, index) => {
                return (
                    <Link key={index} to={ROUTES.MINERAL_PAGE + '/' + mineral._id}>
                        <Mineral {...mineral} />
                    </Link>
                )
            })}
        </div>
    )
}
