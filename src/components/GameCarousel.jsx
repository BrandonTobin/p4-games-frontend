import React, { useRef } from "react";
import Carousel from "react-slick";
import '../styles/HeaderHomepage.css'
import { Link } from "react-router-dom";

function GameCarousel(props) {
    const arrowRef = useRef(null)
    let settings = {
        className: "center",
        centermode: true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Carousel ref={arrowRef} {...settings}>
                <Link to={`review/${props.id[5]}`} key={props.id}>
                    <div className='each-game'>
                        <img className="each-game-img" src={props.image[5]} alt="" />
                        <h3 className="h3-in-each-game"></h3>
                    </div>
                </Link>
                <Link to={`review/${props.id[7]}`} key={props.id}>
                    <div className='each-game'>
                        <img className="each-game-img" src={props.image[7]} alt="" />
                        <h3 className="h3-in-each-game"></h3>
                    </div>
                </Link>
                <Link to={`review/${props.id[3]}`} key={props.id}>
                    <div className='each-game'>
                        <img className="each-game-img" src={props.image[3]} alt="" />
                        <h3 className="h3-in-each-game"></h3>
                    </div>
                </Link>
                <Link to={`review/${props.id[props.id.length - 1]}`} key={props.id}>
                    <div className='each-game'>
                        <img className="each-game-img" src={props.image[props.image.length - 1]} alt="" />
                        <h3 className="h3-in-each-game"></h3>
                    </div>
                </Link>
                <Link to={`review/${props.id[6]}`} key={props.id}>
                    <div className='each-game'>
                        <img className="each-game-img" src={props.image[6]} alt="" />
                        <h3 className="h3-in-each-game"></h3>
                    </div>
                </Link>
                <Link to={`review/${props.id[4]}`} key={props.id}>
                    <div className='each-game'>
                        <img className="each-game-img" src={props.image[4]} alt="" />
                        <h3 className="h3-in-each-game"></h3>
                    </div>
                </Link>
                <Link to={`review/${props.id[8]}`} key={props.id}>
                    <div className='each-game'>
                        <img className="each-game-img" src={props.image[8]} alt="" />
                        <h3 className="h3-in-each-game"></h3>
                    </div>
                </Link>
                <Link to={`review/${props.id[1]}`} key={props.id}>
                <div className='each-game'>
                    <img className="each-game-img" src={props.image[1]} alt="" />
                    <h3 className="h3-in-each-game"></h3>
                </div>
                </Link>
            </Carousel>
        </>
    )
}
export default GameCarousel