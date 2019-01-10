import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
  state = {
    languages: []
  };

  componentDidMount() {
    axios
      .get(this.props.languagesUrl)
      .then(res => {
        this.setState({ languages: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { description, createdAt } = this.props;
    const { languages } = this.state;
    console.log(languages)

    return (
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Description</strong>: {description}
        </li>
        <li className="list-group-item">
          <strong>Programming languages</strong>: {Object.keys(languages).toString()}
        </li>
        <li className="list-group-item">
          <strong>Created at</strong>: {createdAt}
        </li>
      </ul>
    );
  }
}

export default Details;