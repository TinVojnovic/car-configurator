import { Navigate, Outlet } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { userAtoms } from "../states/atoms";
import { useRecoilValue } from 'recoil';

const PrivateRoutes = () => {
  const getValue = useRecoilValue(userAtoms.currentUserUid);
  
  console.log(getValue)
  console.log(getAuth().currentUser?.uid)

  return (
    true ? <Outlet /> : <Navigate to='/login' />
  )
}

//TODO popravi ovo sranje ovo smece jedno dzubre MRS govno jedno nelogicno

export default PrivateRoutes;