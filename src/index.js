import React from 'react';
import ReactDOM from 'react-dom';
import './scss/pure.css';
import App from './App';
import axios from "axios";
import {Helmet} from "react-helmet";

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: undefined
    };
  }

  componentDidMount() {
    axios
      .get(`https://alexever17.herokuapp.com/api/novels?sort=1`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      });
  }

  render() {
    return (
      <div>
        <Helmet>                         
          <meta charSet="utf-8" />
          <title>Alexever17's Novel Rankings</title>
          <meta name="author" content="Oleksandr Malakhov</meta>" />
          <meta name="description" content="Gaze upon my favorite novels and maybe you will find something interesting for yourself!" />
          <link rel="icon" href="images/favicon.gif" type="image/gif" sizes="16x16"></link>
          <meta name="keywords" content="Oleksandr, Malakhov, alexever17, novels, fantasy, coding" />
          <meta property="og:image" content="https://alexever17.github.io/novels/images/library</meta>.jpg" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Helmet>
        <App books={this.state.books} />
      </div>
    );
  }
}
ReactDOM.render(<Base />, document.getElementById("root"));