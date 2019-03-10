import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import axios from "axios";
import App from './components/App';
import './scss/App.scss';

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
        </Helmet>
        <App books={this.state.books} />
      </div>
    );
  }
}
ReactDOM.render(<Base />, document.getElementById("root"));