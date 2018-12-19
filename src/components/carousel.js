import React from 'react';
import axios from 'axios';
import Carousel from "nuka-carousel";

export default class BookList extends React.Component {
  state = {
    sortID: this.props.sortID,
    books: []
  }

  componentDidMount() {
    axios
      .get(
        `${this.state.sortID}`
      )
      .then(res => {
        const books = res.data;
        this.setState({ books });
      });
  }

  render() {
    return <Carousel autoplay={true} autoplayInterval={4000}>
        {this.state.books.map((book, index) => (
          <div key={index.toString()} className="carouselHolder">
            <img src={book.picSource} alt={`Cover for ${book.name}`}></img>
            <h1>{book.name}</h1>
          </div>
        ))}
      </Carousel>;
  }
}