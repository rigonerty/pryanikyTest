import { Routes, Route} from 'react-router-dom'
import { isRoutes} from './router'
import { RequireAuth } from './RequireAuth'
import { ProtectRoute } from './ProtectRoute'
import { useAppSelector } from '../hooks/reduxHooks'
export const AppRouter = () => {
  return (
        <Routes>
            {
              isRoutes.map((a)=>{
                  if(a.isAuthNeeded){
                    return <Route path={a.path} element={<RequireAuth>{a.component}</RequireAuth>} key={a.path}/>
                  }
                  return <Route path={a.path} element={a.component} key={a.path}/>
                })              
            }
            <Route path='*' element={<ProtectRoute/>}/>
        </Routes>
  )
}
