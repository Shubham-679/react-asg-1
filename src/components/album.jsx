import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getalbum } from "../actions";

const Album = () => {
  const albums = useSelector((state) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getalbum());
  }, []);

  return (
    <div>
      <div>
        <h1>Our Latest Albums</h1>
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
            {albums.map((album) => (
              <tr key={album.id}>
                <td>{album.id}</td>
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
