import React, { useState, useEffect } from "react";
import axios from "axios";

const UserAlbum = (props) => {
  const [userAlbum, setState] = useState([]);
  const userId = props.match.params.id;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: userAlbum } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/" + userId + "/albums"
        );
        setState(userAlbum);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const handleAdd = async () => {
    const obj = { title: "Hakooana Matata" };
    const { data: newAlbum } = await axios.post(
      "https://jsonplaceholder.typicode.com/users/" + userId + "/albums",
      obj
    );
    setState((userAlbum) => [newAlbum, ...userAlbum]);
  };

  return (
    <div>
      <div>
        <h1> Albums of user {userId}</h1>
      </div>
      <div>
        <button className="btn btn-primary m-2" onClick={handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Album Title</th>
            </tr>
          </thead>
          <tbody>
            {userAlbum.map((useralbum) => (
              <tr key={useralbum.id}>
                <td>{useralbum.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAlbum;
