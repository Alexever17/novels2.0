import React, { Component } from 'react';
import './scss/App.css';
import { elastic as Menu } from 'react-burger-menu'
import logo from './images/logo.png'
import Carousel from 'nuka-carousel';

class App extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="All">

        <Menu width={250}>
          <a id="home" className="menu-item" href="/">Top</a>
          <span className="menu-item" href="">- - - - - - -</span>
          <a id="chinese" className="menu-item" href="#chinese">Chinese Novels</a>
          <a id="japanese" className="menu-item" href="#japanese">Japanese Novels</a>
          <a id="korean" className="menu-item" href="#korean">Chinese Novels</a>
          <a id="contact" className="menu-item" href="#contact">Contact</a>
        </Menu>

        <div className="Front">
          <img className="front-logo" src={logo} />
        </div>

        <div className="CarouselContainer">
          <div className="Carousel">
            <Carousel autoplay={true} autoplayInterval={4000}>
              <div className="carouselHolder">
                <img className="carouselImage" src="http://placehold.it/400x300/000000/c0392b/" />
                <div>
                  <h1>TEEEEEEXT</h1>
                  <h1>TEEEEEEXT</h1>
                  <h1>TEEEEEEXT</h1>
                </div>
              </div>
              <div className="carouselHolder">
                <img className="carouselImage" src="http://placehold.it/400x300/000000/c0392b/" />
              </div>
              <div className="carouselHolder">
                <img className="carouselImage" src="http://placehold.it/400x300/000000/c0392b/" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
