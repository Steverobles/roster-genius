import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CreateRoster from '../CreateRoster/CreateRoster';
import YourRosters from '../YourRosters/YourRosters';
import RosterDetails from '../RosterDetails/RosterDetails'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/rosters/new" element={<CreateRoster />} />
              <Route path="/rosters" element={<YourRosters />} />
              <Route path='/rosters/:rosterId' element = {<RosterDetails/>}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
