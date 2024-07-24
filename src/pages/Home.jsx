import classNames from 'classnames'
import React from 'react'
import { ArticleList, PopularTags } from '../components'
import { useArticlesQuery, useAuth } from '../hooks'

const initialFilters = { tag: '', offset: null, feed: false }

function Home() {
  const { isAuth } = useAuth()
  const [filters, setFilters] = React.useState({ ...initialFilters, feed: isAuth })
  const { isArticlesLoading, articles, ArticlesError } = useArticlesQuery();


  React.useEffect(() => {
    setFilters({ ...initialFilters, feed: isAuth })
  }, [isAuth])

  function onTagClick(tag) {
    setFilters({ ...initialFilters, tag })
  }

  function onGlobalFeedClick() {
    setFilters(initialFilters)
  }

  function onFeedClick() {
    setFilters({ ...initialFilters, feed: true })
  }

  return (
    <div className="home-page">
      {/* <div className="banner" div style={{ background: 'rgba(255,220,50, 0.4)', backdropFilter: 'blur(100px)', height: '30vh' }}>
        <div className="container">
          <h1 className="logo-font">BLOGGING</h1>
          <p><i>Knowledge is power, Information is liberating</i></p>
        </div>
      </div> */}
      <div className="banner" style={{ background: 'rgba(255,220,50, 0.4)', backdropFilter: 'blur(100px)', height: '30vh' }}>
    <div className="container">
      <h1 className="logo-font" style={{ 
          fontFamily: 'Arial, sans-serif', 
          fontSize: '50px', 
          fontWeight: 'bold', 
          color: 'black' 
        }}>
        BLOGGING
      </h1>
      <p><i><mark><b>Knowledge is power, Information is liberating!</b></mark></i></p>
    </div>
  </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {isAuth && (
                  <li className="nav-item">
                    <button
                      onClick={onFeedClick}
                      type="button"
                      className={classNames('nav-link', {
                        active: filters.feed,
                      })}
                    >
                      <b>Your Feed</b>
                    </button>
                  </li>
                )}


              </ul>
            </div>
            <ArticleList />
          </div>
          <div className='col-md-3'>
            <PopularTags />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home

