import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Games from './components/Games';
import GameDetails from './components/GameDetails';
import ReviewDetails from './components/ReviewDetails';
import AllGames from './components/AllGames'
import AuthRegister from './components/AuthRegister';
import Auth from './components/Auth'
import { UserContext } from './data';
import { useState } from 'react';

function App() {
  const { Provider: UserInfo } = UserContext

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className="App">
      <UserInfo value={{
        isAuthenticated,
        currentUser,
        setAuth: setIsAuthenticated,
        setUser: setCurrentUser
      }}>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/register" element={<AuthRegister />} />
          <Route path="/viewAllTopRatedGames" element={<AllGames />} />
          <Route path="/review/:id" element={<GameDetails />} />
          <Route path="/review/edit/:id" element={<ReviewDetails />} />
        </Routes>
      </UserInfo>
    </div>
  );
}

export default App;