import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu'
import NewNovelCarousel from './components/carousel-new-novels';
import Modal from './components/shared/modal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: undefined,
      showModal: false,
      modalContent: null,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  showMenu = function () {
    let button = document.getElementsByClassName("bm-burger-button")[0];
    if (window.scrollY >= 100) {
      button.className = "bm-burger-button show";
    } else {
      button.className = "bm-burger-button hide";
    }
  };

  toggleModal(e, content) {
    e.preventDefault();

    if (this.state.showModal) {
      this.setState({
        showModal: false,
        modalContent: null
      })
    } else {
      this.setState({
        showModal: true,
        modalContent: content
      })
    }
  }

  componentDidMount() {
    document.getElementsByClassName("bm-burger-button")[0].className = "bm-burger-button hide";
    window.addEventListener('scroll', this.showMenu);
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
    const { showModal, modalContent } = this.state;

    return (
      <div >
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

        <div className="Front" />

        <div className="carouselContainer">
          <NewNovelCarousel books={this.state.books} toggleModal={this.toggleModal} />
        </div>

        <Modal 
          toggleModal={this.toggleModal} 
          showModal={showModal} 
          modalContent={modalContent} 
        />

      </div>
    );
  }
}

export default App;
