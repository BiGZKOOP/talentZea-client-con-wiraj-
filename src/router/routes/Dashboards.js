import {lazy} from 'react'

const DashboardRoutes = [
    // Dashboards
    {
        path: '/home',
        component: lazy(() => import('../../custom-views/Home/Dashboard')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/service/:id',
        component: lazy(() => import('../../custom-views/MainService/MainServiceView')),
        meta: {
            authRoute: true
        }
    },
    {
        path: '/sub-service/:id',
        component: lazy(() => import('../../custom-views/SubServiceView/SubServiceView')),
        meta: {
            authRoute: true
        }
    }
]

export default DashboardRoutes
