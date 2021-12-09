import React, {useState} from 'react'
import { Mineral } from '../Mineral/Mineral';
import { Button } from "../Button/Button";
import styles from './MineralList.module.css';
import { useFetch, Provider } from "use-http";

const mock = [{
        "_id": "61b116a598572aa63abe6df7",
        "title": "berkshire_practical_logistical.ivu",
        "imageURL": "https://picsum.photos/200/300?random=1"
    },
    {
        "_id": "61b116ff98572aa63abe6df9",
        "title": "soluta",
        "imageURL": "https://picsum.photos/200/300?random=2"
    },
    {
        "_id": "61b1170098572aa63abe6dfb",
        "title": "nulla",
        "imageURL": "https://picsum.photos/200/300?random=3"
    },
    {
        "_id": "61b1170d98572aa63abe6dfd",
        "title": "autem",
        "imageURL": "https://picsum.photos/200/300?random=4"
    },
    {
        "_id": "61b1170f98572aa63abe6dff",
        "title": "in",
        "imageURL": "https://picsum.photos/200/300?random=5"
    },
    {
        "_id": "61b1171098572aa63abe6e01",
        "title": "facere",
        "imageURL": "https://picsum.photos/200/300?random=6"
    },
    {
        "_id": "61b1171298572aa63abe6e03",
        "title": "tempora",
        "imageURL": "https://picsum.photos/200/300?random=7"
    },
    {
        "_id": "61b1171398572aa63abe6e05",
        "title": "sint",
        "imageURL": "https://picsum.photos/200/300?random=8"
    },
    {
        "_id": "61b1174d98572aa63abe6e07",
        "title": "et",
        "imageURL": "https://picsum.photos/200/300?random=9"
    },
    {
        "_id": "61b1174f98572aa63abe6e09",
        "title": "maxime",
        "imageURL": "https://picsum.photos/200/300?random=10"
    }
];

export const MineralList = () => {
    //Щитпост
    // const [page, setPage] = useState(1)
    // const { loading, error, data: elements } = useFetch(`/user/getMineralsPage?page=${page}`, {
    //     onNewData: (currUsers, newUsers) => [...currUsers, ...newUsers],
    //     data: []
    // }, [page])

    return (
        <div className={styles.wrapper}>
            {mock.map((mineral) => {
                return (
                    <Mineral key={mineral._id} {...mineral} />
                )
            })}
        </div>
    )
}
