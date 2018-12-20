import React, { Component } from 'react';
import './scss/App.css';
import { elastic as Menu } from 'react-burger-menu'
import NewNovelCarousel from './components/carousel-new-novels';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: undefined
    };
  }

  componentDidUpdate() {
    if (this.state.books) {
      if (this.props.books !== this.state.books) {
        this.setState({ books: this.props.books });
      } 
    } else {
      this.setState({ books: this.props.books });
    }
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return <div className="All" id="top">
        <Menu width={250}>
          <a id="home" className="menu-item" href="#top">
            Top
          </a>
          <a id="chinese" className="menu-item" href="#lists">
            Detailed Lists
          </a>
          <a id="contact" className="menu-item" href="#contact">
            Contact
          </a>
        </Menu>

        <div className="Front">
        </div>

        <div className="CarouselContainer">
          <div className="Carousel">
            <NewNovelCarousel books={this.state.books} />
          </div>
        </div>
      </div>;
  }
}

export default App;
