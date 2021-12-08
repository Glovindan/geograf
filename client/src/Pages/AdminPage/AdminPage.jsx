import React from 'react'
import { AdminPanel } from '../../components/AdminPanel/AdminPanel'
import { AdminSelect } from '../../components/AdminSelect/AdminSelect'

import { Auth } from '../../components/Auth/Auth'
import { MineralForm } from '../../components/MineralForm/MineralForm'

export const AdminPage = () => {
    return (
        <>
            {/* <Auth /> */}
            <AdminPanel />
            {/* <AdminSelect textAbout={'Выберите минерал который надо удалить'} /> */}
            <MineralForm />
        </>
    )
}
