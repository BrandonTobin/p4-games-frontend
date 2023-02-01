import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import AboutUs from "./pages/AboutUs";
import UserDetails from "./components/UserDetails";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <nav className="nav">
        <Link id="home" to="/">
          <div> Home </div>
        </Link>
        <Link id="feed" to="/feed">
          <div> Games </div>
        </Link>
        <Link id="authors" to="/authors">
          <div> Users </div>
        </Link>
        <Link id="aboutus" to="/aboutus">
          <div> About Us </div>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/:id" element={<Reviews />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;