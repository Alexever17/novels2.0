import React from "react";
import { latestNovelAdditionsFirst } from "../components/helperFunctions";
import Slider from "react-slick";

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

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
      
      return <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>;

      // <Carousel autoplay={false} autoplayInterval={4000}>
      //     {books.map((book, index) => (
      //       <div key={index.toString()} className="carouselHolder">
      //         <div className="carouselImageHolder">
      //           <img
      //             className="carouselImage"
      //             src={book.picSource}
      //             alt={`Cover for ${book.name}`}
      //           />
      //         </div>
      //         <div className="carouselTextHolder">
      //           <h3 className="carouselTextAddition">New Addition!</h3>
      //           <div>
      //             <h2 className="carouselTextTitle">
      //               {JSON.stringify(book.name)}
      //             </h2>
      //             <h6 className="carouselTextDescription">
      //               {JSON.stringify(book.description).slice(0, 300) +
      //                 "..."}
      //             </h6>
      //             <a
      //               className="uk-button uk-button-primary carouselTextButton"
      //               href={JSON.stringify(book.url)}
      //             >
      //               See more!
      //             </a>
      //           </div>
      //         </div>
      //       </div>
      //     ))}
      //   </Carousel>;
    } else {
      return null;
    }
  }
}
