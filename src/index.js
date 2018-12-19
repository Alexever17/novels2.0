import React from 'react';
import ReactDOM from 'react-dom';
import './uikit.css';
import App from './App';
import DocumentMeta from "react-document-meta";
import axios from "axios";

class Base extends React.Component {
  state = {
    books: undefined
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
    const meta = {
      title: "Alexever17's Novel Rankings",
      description: "Gaze upon my favorite novels and maybe you will find something interesting for yourself!",
      canonical: "https://alex-novels.xyz/",
      meta: {
        charset: "utf-8",
        name: {
          keywords: "Oleksandr, Malakhov, alexever17, novels, fantasy, coding",
          author: "Oleksandr Malakhov",
          "og:image": "https://alexever17.github.io/novels/images/library.jpg"
        }
      }
    };           

    return (
      <DocumentMeta {...meta}>
        <App books={this.state.books}/>
      </DocumentMeta>
    );
  }
}
ReactDOM.render(<Base />, document.getElementById("root"));