import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'; 

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <div className="title-left">
        <Link to="/rosters" className='title-link'>
        <h1>RosterGenius</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/rosters">Your Rosters</Link>
        <span className="divider"></span>
        <Link to="/rosters/new">Create Roster</Link>
      </div>
      <div className="user-info">
        <div className="logout">
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
        <div className="welcome">
          Welcome, {user.name}
        </div>
      </div>
    </nav>
  );
}



