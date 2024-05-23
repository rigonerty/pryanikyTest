import { AuthPage } from "../pages/AuthPage/AuthPage"
import { TablePage } from "../pages/TablePage/TablePage"


export const isRoutes = [
    {path:"/auth", component: <AuthPage/>, isAuthNeeded:false},
    {path:"/table", component: <TablePage/>, isAuthNeeded:true}
]


