import { useState } from "react";
import { Navigate} from 'react-router-dom'

const PrivateROute = ({children}) => {

    const [jwt, setJwt] = useState(localStorage.getItem('token'))

    return ( 
        jwt ? children : <Navigate to='/' />
     );
}
 
export default PrivateROute;