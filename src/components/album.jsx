import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Album = (props) => {
  const [albums, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: albums } = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setState(albums);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const handleAdd = async () => {
    const obj = { title: "Hakooana Matata" };
    const { data: album } = await axios.post(
      "https://jsonplaceholder.typicode.com/albums",
      obj
    );
    setState((albums) => [album, ...albums]);
  };

  const handleUpdate = async (album) => {
    album.title = "UPDATED";
    await axios.put(
      "https://jsonplaceholder.typicode.com/albums" + "/" + album.id,
      album
    );
    const index = albums.indexOf(album);
    // const a = [...albums];
    albums[index] = { ...album };
    setState((albums) => [...albums]);
    // setState(a);
  };

  const handleRemove = async (album) => {
    const originalAlbums = albums;

    const a = albums.filter((a) => a.id !== album.id);
    setState(a);

    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/albums" + "/" + album.id
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      setState(originalAlbums);
    }
  };

  return (
    <div>
      <div>
        <h1>Our Latest Albums</h1>
      </div>
      <div>
        <button className="btn btn-primary m-2" onClick={handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Album Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => (
              <tr key={album.id}>
                <td>
                  <button
                    className="btn btn-sm btn-warning m-2"
                    onClick={() => handleUpdate(album)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <Link to={`/photos/${album.id}`}>{album.title}</Link>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger m-2"
                    onClick={() => handleRemove(album)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Album;
