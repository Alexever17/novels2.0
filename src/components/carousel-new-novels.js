import React from "react";
import { latestNovelAdditionsFirst } from "../components/helperFunctions";
import Slider from "react-slick";

export default class NewNovelCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: undefined, book: undefined };
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

  render() {
    if (this.state.books) {

      //searches for the newest additions to the database
      let books = latestNovelAdditionsFirst(this.state.books).slice(0, 7);

      //makes the insides of the carousel
      books.forEach(function(book, index, books){
        books[index] = 
        <a key={index.toString()} href={JSON.stringify(book.url)} className="carouselHolder">
          <div className="carouselImageHolder" style={{ "backgroundImage": `url(${book.picSource})`}}>
          </div>
            <div className="carouselTextHolder">
              <div className="carouselFirstRow">
                <h3 className="carouselTextAddition">New Addition!</h3>
                <button className="carouselModule" onClick={(e) => this.props.toggleModal(e, book)} >Info</button>
              </div>
              <h2 className="carouselTextTitle">
                {JSON.stringify(book.name)}
              </h2>
              <h6 className="carouselTextDescription">
                {JSON.stringify(book.description).slice(0, 300) + "..."}
              </h6>
            </div>
          </a>;
      }, this);

      let carouselSettings = { arrow: false, dots: true, lazyLoad: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, initialSlide: 0, adaptiveHeight: true, autoplay: false };
      //returns the carousel with the insides
      return <Slider {...carouselSettings}>{books}</Slider>;

    } else {
      return null;
    }
  }
}
