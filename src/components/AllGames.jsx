import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Search from "./Search"
import '../styles/AllGames.css'
import logo from '../images/game-review-final.jpeg'
import { getUserToken } from '../utils/authToken'

const token = getUserToken()
function AllGames(props) {
    const [games, setGames] = useState([])
    const BASE_URL = `https://p4-games.herokuapp.com/game`
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
                <Search />
                {token ? <img src="https://i.ytimg.com/vi/1SdtvZ-Lrh0/maxresdefault.jpg" id="avatar-image" />:<a id="login-box" href="/auth">Login Register</a>}
            </div>

                <h1 className='all-games-title'>All Games</h1>
            <div className="All-Games">
            {games.map((game) => (
                <Link to={`/review/${game._id}`} style={{ textDecoration: 'none' }} key={game._id}>
                    <div className="card-game">
                        <div className="card-image">
                            <img className="card-each-image"src={game.image} alt={game.title} />
                        </div>
                        <div className="card-title">
                            <h3>{game.title}</h3>
                        </div>
                    </div>
                </Link>
            ))
            }
            </div>
        </div>
    )
}

export default AllGames