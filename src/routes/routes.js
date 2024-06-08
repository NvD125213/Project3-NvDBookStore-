import Admin from '../pages/admin/home/index'
import Category from '../component/admin/category'

const publicRoutes = [
    {path: '/admin', exact: true, component: Admin},
    {path: '/admin/category', exact: true, component: Category}

]

export default publicRoutes