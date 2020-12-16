import React, { useState, useEffect } from "react";
import axios from "axios";

const Photo = (props) => {
  const [photos, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: photos } = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
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
      <h1>Album Photos</h1>
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

export default Photo;
