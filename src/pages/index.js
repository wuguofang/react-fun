import React, {Component} from 'react'
import {Carousel, Card, BackTop, Icon} from 'antd'
import { Link } from 'react-router'
import MovieColumn from '../components/Movie/MovieColumn'
import HotColumn from '../components/Hot/HotColumn'
import MusicColumn from '../components/Music/MusicColumn'
import BookColumn from '../components/Book/BookColumn'

export default class Index extends Component {
  render() {
    return (
      <div>
        <div className='wrap'>
          <Card className='home'>
            <Carousel autoplay>
              <div><img src={require("../image/movie_carousel_1.jpg")}/></div>
              <div><img src={require("../image/movie_carousel_2.jpg")}/></div>
              <div><img src={require("../image/movie_carousel_3.jpg")}/></div>
              <div><img src={require("../image/movie_carousel_4.jpg")}/></div>
            </Carousel>
            <MovieColumn
              id='hotShowing'
              title='热门电影'
              type='in_theaters'
              total={8}
              noHead={true}
              count={5}
            />
            <HotColumn/>
            <MusicColumn />
            <BookColumn />
            <BackTop>
              <div className="ant-back-top-inner">
                <Icon type="arrow-up"/>
              </div>
            </BackTop>
          </Card>
        </div>
      </div>
    )
  }
}
