import React, { Component } from 'react'
import { render } from 'react-dom'
import RootRouter from './routes'

import './style/App.less'
import './style/base.less'
import './style/BookList.less'
import './style/ColumnHeader.less'
import './style/Home.less'
import './style/ListLoadMore.less'
import './style/Login.less'
import './style/MovieDetail.less'
import './style/MovieMenu.less'
import './style/Music.less'
import './style/NewsList.less'
import './style/Pages.less'
import './style/Spot.less'
import './style/TopList.less'
import './style/MovieItem.less'
import './style/MovieColumn.less'

render(
    <div>{RootRouter}</div>,
    document.getElementById('app')
)