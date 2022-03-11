import {lazy} from 'react'

const DashboardRoutes = [
    // Dashboards
    {
        path: '/home',
        component: lazy(() => import('../../custom-views/Home/Dashboard')),
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
    }
]

export default DashboardRoutes
