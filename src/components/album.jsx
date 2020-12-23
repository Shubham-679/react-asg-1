import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getalbum, addAlbum } from "../actions";

const Album = () => {
  const albums = useSelector((state) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getalbum());
  }, []);

  let input;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAlbum(input.value))
  };

  return (
    <div>
      <div>
        <h1>Our Latest Albums</h1>
        <form onSubmit={handleSubmit}>
          <input ref={node => input = node} id="add" type="text"/>
          <button type="submit" className="btn btn-primary m-2">Add</button>
        </form>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Album Title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{album.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Album;