import React, { useEffect, useState } from 'react'
import Tmdb from "./components/Tmdb"
import MovieRow from './components/MovieRow/MovieRow'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'
import Header from './components/Header/Header'
import Loading from './components/LoadingPage/Loading'
import "./styles/style.css"

const App = () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)
      let originals = list.filter(i => i.slug === "originals")
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv")
      setFeaturedData(chosenInfo)
    }
    loadAll()
  }, [])
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])
    
  return (
    <div className="page">
      <Header black={blackHeader} />
      { featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {movieList.length <= 0  && 
        <Loading />
      }
      <footer>
        <span>Desenvolvido por Bruno Max</span>
        <span>Direitos de imagem a Netflix</span>
        <span>GitHub: @bruno-oli</span>
      </footer>
    </div>
  )
}

export default App