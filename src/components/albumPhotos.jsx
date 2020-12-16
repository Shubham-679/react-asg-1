import React, { useState, useEffect } from "react";
import axios from "axios";

const AlbumPhoto = (props) => {
  const [photos, setState] = useState([]);
  const photoId = props.match.params.id;
  useEffect(() => {
    async function fetchData() {
      try {
        
        const { data: photos } = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/" + photoId + "/photos"
        );
        setState(photos);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1> Photos of Album {photoId}</h1>
        </div>
      <div className="container">
        <div className="row">
          {photos.map((photo) => (
            <div className="col-sm-2" key={photo.id}>
              <img
                className="img-thumbnail"
                src={photo.url}
                alt=""
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPhoto;
