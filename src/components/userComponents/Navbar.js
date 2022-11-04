import { Link } from "react-router-dom";
import '../../index.css'

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <h1>TodoList</h1>
      <div className="links">
        <Link to="/home">Home</Link>
        <div class="dropdown">
          <button class="dropbtn"><img className='userphotoNav' src={user.userImage} alt='photo'/>{user.firstName} {user.lastName}</button>
          <div class="dropdown-content">
            <Link to="/user">Details</Link>
            <Link to="/" onClick={() => localStorage.removeItem('token')} >Logout</Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;