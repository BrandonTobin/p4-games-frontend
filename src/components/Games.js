

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Search from './Search'
import ImageCarousel from './ImageCarousel'
import GameCarousel from './GameCarousel';
import '../styles/HeaderHomepage.css'
import logo from '../images/game-review-final.jpeg'
import { getUserToken, setUserToken, clearUserToken, decodeToken } from "../utils/authToken"

function Games(props) {
  const navigate = useNavigate()
  const token = getUserToken()
  const [games, setGames] = useState([])
  const BASE_URL = 'https://p4-games.herokuapp.com/game'
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
        <ImageCarousel gameList={gameTitleList} gameImage={gameImageList} />
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