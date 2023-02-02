

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import '../styles/SearchBar.css'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const [games, setGames] = useState('')
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
    }, [getGames])
    const onChange = (event) => {
        setSearchValue(event.target.value)
    }
    const onSearch = (searchItem) => {
        setSearchValue(searchItem)
    }

    return (
        <div className="search-context">
            <div className="search-context-inner">
                <p id="look-up-symbol">{<BsSearch />}</p>
                <input type="text" value={searchValue} onChange={onChange} id="search" autoComplete="off" placeholder="Search game titles" />
                <Link to={`/details/${searchValue}`}>
                    <button onClick={() => <Link to={`/details/${searchValue}`}></Link>} id="search-submit">Search</button>
                </Link>
            </div>
            <div className="drop-down-list">
                {Object.values(games).filter((game) => {
                    const searchItem = searchValue.toLowerCase()
                    const gameTitle = game.title.toLowerCase()
                    return (searchItem && gameTitle.startsWith(searchItem) && gameTitle !== searchItem)
                })
                    .slice(0, 8)
                    .map((game, idx) => (
                        <div onClick={() => onSearch(game)} className="drop-down-row" key={idx}>
                            <Link style={{ textDecoration: 'none' }} key={game._id} to={`/review/${game._id}`}>
                                <div className='drop-down-info'>
                                    <img id="search-image" style={{ borderRadius: '10px' }} src={game.image} alt="" />
                                    <div>
                                        <div id="search-title" style={{ textDecoration: 'none' }}>{game.title}</div>
                                        <p className='game-info-search'><span className='age-rating'>{game.agerating}</span></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search