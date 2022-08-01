import React from 'react'
import "./Header.css"


const Header = ({black}) => {
  return (
    <header className={black && "header__black"}>
      <div className="header__logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix" />
        </a>
      </div>
      <div className="header__user">
        <a href="/">
          <img src="https://occ-0-6174-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVdopoc4DhJ9M4hert4MN_F1EbR5f7rDgDjhPSqx0nRvGQvcD9zL1In0fwJumR96g-0ir2WORbrmQZ6OkfyCZtQryMVbqUWwKw.png?r=e6e" alt="Perfil" />
        </a>
      </div>
    </header>
  )
}

export default Header