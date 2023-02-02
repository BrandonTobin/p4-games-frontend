

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaRegHandPointRight } from "react-icons/fa";
import Search from './Search'
import Carousel from './Carousel'
import GameCarousel from './GameCarousel';
import '../styles/HeaderHomepage.css'
import logo from '../images/gamesradar_owler_20190209_163111_original.jpg'
import { getUserToken, setUserToken, clearUserToken, decodeToken } from "../utils/authToken"

function Games(props) {
  const navigate = useNavigate()
  const token = getUserToken()
  const [games, setGames] = useState([])
  const BASE_URL = 'http://localhost:3000/game'
  const getGames = async () => {
    try {
      const response = await fetch(BASE_URL)
      const allGames = await response.json()
      setGames(allGames)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getGames()
  }, [])

  const gameTitleList = []
  const gameImageList = []
  const gameDescList = []
  const gameID = []
  for (let i = 0; i < games.length; i++) {
    gameTitleList.push(games[i].title)
    gameImageList.push(games[i].image)
    gameDescList.push(games[i].desc)
    gameID.push(games[i]._id)
  }
  function logout() {
    clearUserToken();
    navigate('/')
  }

  return (
    <div className='main-page'>
      <div className='header-homepage'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <div className="homepage">
            <Link to={`/`}>
              <img src={logo} className='header-logo'></img>
            </Link>
          </div>
        </Link>
        <Search gameList={gameTitleList} />
        {token ?
          <div className='avatar-logout-button'>
            <img src="https://i.ytimg.com/vi/1SdtvZ-Lrh0/maxresdefault.jpg" id="avatar-image" />
            <div className='button-box'>
              <button type="button" onClick={logout} className='btn btn-outline-warning'>Logout</button>
            </div>
          </div> : <a id="login-box" href="/auth">LOGIN REGISTER</a>}
      </div>
      <div className='content'>
        <Carousel gameList={gameTitleList} gameImage={gameImageList} />
      </div>
      <Link style={{ textDecoration: "none" }} to="/viewAllTopRatedGames">
        <h1 className='top-rated-games'><div className="View-All" textDecoration="none">All Games</div></h1>
      </Link>
      <div className='bottom-half'>
        <div className="games-carousel-bar">
          <GameCarousel image={gameImageList} title={gameTitleList} desc={gameDescList} id={gameID} />
        </div>
      </div>
    </div>
  )
}
export default Games