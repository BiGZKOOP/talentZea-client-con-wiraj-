import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../custom-views/dashboard/Dashboard')),
    meta: {
      authRoute: true
    }
  }
]

export default DashboardRoutes
