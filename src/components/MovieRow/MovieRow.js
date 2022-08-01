import React, {useState} from 'react'
import "./MovieRow.css"
import NavigateBefore from '../images/chevron-left-solid.svg'
import NavigateNext from "../images/chevron-right-solid.svg"

const MovieRow = ({title, items}) => {
  const [scrollX, setScrollX] = useState(0)
  const handleRightClick = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 150
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollX(x)
  }
  const handleLeftClick = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }
  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className="movieRow__left" onClick={handleLeftClick}>
        <img src={NavigateBefore} alt="Voltar" />
      </div>
      <div className="movieRow__right" onClick={handleRightClick}>
        <img src={NavigateNext} alt="Voltar" />   
      </div>
      <div className="movieRow__listarea">
        <div className="movieRow__list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}> 
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow__item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow