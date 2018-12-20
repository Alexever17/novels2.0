import React from "react";
import Carousel from "nuka-carousel";
import { latestNovelAdditionsFirst } from "../components/helperFunctions";

export default class NewNovelCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: undefined };
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
      let books = latestNovelAdditionsFirst(this.state.books);
      books = books.slice(0,7);
      console.log(books);
      
      return (
        <Carousel autoplay={false} autoplayInterval={4000}>
          {books.map((book, index) => (
            <div key={index.toString()} className="carouselHolder">
              <div className="carouselImageHolder">
                <img
                  className="carouselImage"
                  src={book.picSource}
                  alt={`Cover for ${book.name}`}
                />
              </div>
              <div className="carouselTextHolder">
                <h3>New Addition!</h3>
                <div>
                  <h2>{JSON.stringify(book.name)}</h2>
                  <h6>{JSON.stringify(book.description).slice(0,300)+"..."}</h6>
                  <a
                    className="uk-button uk-button-primary"
                    href={JSON.stringify(book.url)}
                  >
                    See more!
                </a></div>
                
              </div>
            </div>
          ))}
        </Carousel>
      );
    } else {
      return null;
    }
  }
}
