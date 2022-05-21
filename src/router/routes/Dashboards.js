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
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/sub-service/:id',
        component: lazy(() => import('../../custom-views/SubServiceView/SubServiceView')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/order/:id',
        component: lazy(() => import('../../custom-views/OrderDetailsView/OrderDetailsView')),
        layout: 'BlankLayout'
    }
]

export default DashboardRoutes
