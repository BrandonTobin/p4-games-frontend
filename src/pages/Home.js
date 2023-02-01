import React, { useState, useEffect } from 'react';

const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>⬅</button>
        <button onClick={next}>⮕</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  )
}

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Video Game Spot!</h1>
      <p className="home-description">
        Upload your favorite video games and review them here.
      </p>
      <div className="home-slideshow">
        <Slideshow
          imgs={[
            'https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png',
            'https://m.media-amazon.com/images/M/MV5BZWYxY2VmN2ItNjNlNi00ZmM0LWEwMjEtMTE1NGQxMGVhMWQxXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg',
            'https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg',
            'https://evoww.com/wp-content/uploads/2020/09/682-valorant-cover.png',
            'https://m.media-amazon.com/images/M/MV5BNzQwZmU2MWQtODM2Ni00YTZjLWJiNzQtZTA0MDBiMzk1YjMzXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
            'https://images.gog-statics.com/4d9bd303b2c344f01c600b2bac654cde424fb7a8e7f3fb3325661ce99484e436.jpg'
          ]}
        />
      </div>
    </div>
  );
}

export default Home;
