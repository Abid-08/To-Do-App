import { Navigate } from 'react-router-dom'

const HomeRoute = ({ children }) => {
    return (!localStorage.getItem('token') ? children : <Navigate to='/home' />);
}

export default HomeRoute;