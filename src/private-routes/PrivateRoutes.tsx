import { Navigate, Outlet } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

const PrivateRoutes = () => {
    console.log(getAuth())
    console.log(getAuth().currentUser?.uid)
return (
    true ? <Outlet/> : <Navigate to='/login'/>
  )
}

//TODO popravi ovo sranje ovo smece jedno dzubre MRS govno jedno nelogicno

export default PrivateRoutes;