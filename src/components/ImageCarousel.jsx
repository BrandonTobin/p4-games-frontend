import { useState, useEffect } from 'react';
import React from "react"
import { Carousel } from "react-bootstrap"
import '../styles/Carousel.css'

function ImageCarousel(props) {
    const urlGame = "https://p4-games.herokuapp.com/game"
    const [game, setGame] = useState(null)
        useEffect(() => {
        fetch(urlGame)
            .then((response) => response.json())
            .then((json) => {
                setGame(json)
            })
            .catch(console.error)
    }, [])

    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);};
        if (!game){
            return(<h1>NO GAMES</h1>)
        }else{
            const eachGame = game.map((games, imageIndex) =>
                
                <Carousel.Item key={imageIndex} interval={3000}>
                `<a href={`/review/${games._id}`}>
                    <img
                        className="carousel"
                        src={games.image}
                        alt="First image"
                    />
                    </a>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            )
    return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {eachGame}
            </Carousel>
    );
        }
}

export default ImageCarousel