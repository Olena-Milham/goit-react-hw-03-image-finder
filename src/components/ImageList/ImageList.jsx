import { Component } from 'react';

export class ImageList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(item => (
          <li
            key={item.webformatURL}
            onClick={() => this.props.setImage(item.largeImageURL)}
          >
            <img src={item.webformatURL} alt={item.tags} />
          </li>
        ))}
      </ul>
    );
  }
}
