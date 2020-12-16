import React, { useState, useEffect } from "react";
import axios from "axios";

const AlbumPhoto = (props) => {
  const [photos, setState] = useState([]);
  const albumId = props.match.params.id;
  useEffect(() => {
    async function fetchData() {
      try {
        const { data: photos } = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/" + albumId + "/photos"
        );
        setState(photos);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const handleAdd = async () => {
    const obj = { url: "https://via.placeholder.com/600/d32776" };
    const { data: photo } = await axios.post(
      "https://jsonplaceholder.typicode.com/albums/" + albumId + "/photos",
      obj
    );

    setState((photos) => [photo, ...photos]);
  };

  return (
    <div>
      <div>
        <h1> Photos of Album {albumId}</h1>

        <button
          className="btn btn-primary btn-lg m-2"
          onClick={() => handleAdd()}
        >
          Add
        </button>
      </div>
      <div className="container">
        <div className="row">
          {photos.map((photo) => (
            <div className="col-sm-2" key={photo.id}>
              <img className="img-thumbnail" src={photo.url} alt=""></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPhoto;
