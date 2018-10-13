import React from 'react'
import {Router, Route,  IndexRoute, Redirect, hashHistory} from 'react-router'
import appContainer from './pages/appContainer'
import Index from './pages/index'
import Hot from './pages/hot'
import Movie from './pages/movie'
import Book from './pages/book'
import Music from './pages/music'

const RootRoter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ appContainer }>
      <IndexRoute component={ Index }/>
      <Route path="hot" component={ Hot }/>
      <Route path="movie" component={ Movie }/>
      <Route path="book" component={ Book }/>
      <Route path="music" component={ Music }/>
    </Route>
  </Router>
)
export default RootRoter

