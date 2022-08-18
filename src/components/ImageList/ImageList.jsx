import { Component } from 'react';
import { ImageItem } from './ImageItem/ImageItem';

export class ImageList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(item => (
          <ImageItem data={item} key={item.webformatURL} />
        ))}
      </ul>
    );
  }
}
