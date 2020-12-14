import React, { Component } from "react";
import axios from "axios";

class Photo extends Component {
  state = {
    photos: [],
  };
  async componentDidMount() {
    const { data: photos } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    this.setState({ photos });
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            {this.state.photos.map((photo) => (
              <div className="col-sm-2">
                <img className="img-thumbnail" src={photo.thumbnailUrl}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
