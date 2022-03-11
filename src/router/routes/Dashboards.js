import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../custom-views/Home/Dashboard')),
    meta: {
      authRoute: true
    }
  }
]

export default DashboardRoutes
