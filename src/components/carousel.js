import React from 'react';
import axios from 'axios';
import Carousel from "nuka-carousel";

export default class BookList extends React.Component {
  state = {
    sortID: this.props.sortID
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
    if (this.state.books) {
      return <Carousel autoplay={true} autoplayInterval={4000}>
        {/* {this.state.books.map((book, index) => (
          <div key={index.toString()} className="carouselHolder">
            <div className="carouselImageHolder">
              <img className="carouselImage" src={book.picSource} alt={`Cover for ${book.name}`}></img>
            </div>
            <h1>{book.name}</h1>
          </div>
        ))} */}

        <div className="carouselHolder">
          <div className="carouselImageHolder">
            <img className="carouselImage" src={this.state.books[0].picSource} alt={`Cover for ${this.state.books[0].name}`} />
          </div>
          <div className="carouselTextHolder">
            <h2>New Addition!</h2>
            <h1>{JSON.stringify(this.state.books[0].name)}</h1>
            <a className="uk-button uk-button-primary" href={JSON.stringify(this.state.books[0].url)}>Information</a>
          </div>
        </div>
      </Carousel>;
    } else {
      return null
    }
  }
}