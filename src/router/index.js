import React from 'react'
import { Redirect } from 'react-router-dom'


const Listy = React.lazy(_=> import('../pages/listy'))
const Detail = React.lazy(_=> import('../pages/detail'))


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/home"/>
        )
    },
    {
        path: "/home",
        component: Listy,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: ()=> (
                    <Redirect to="/discover/recommend"/>
                )
            },
        ]
    },
    {
        path: "/detail/:id",
        component: Detail
    }
    /* {
        path: "/mine",
        component: LocaMine
    },
    {
        path: "/friend",
        component: LocaFriend
    }, */
]

export default routes