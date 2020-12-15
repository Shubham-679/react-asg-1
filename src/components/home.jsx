import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [users, setState] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const { data: users } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setState(users);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  });

  return (
    <div>
      <div>
        <h1>Users Details</h1>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>UserName</th>
              <th>E-mail</th>
              <th>City</th>
              <th>Phone No.</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <Link to={`/album/${user.id}`}>{user.username}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
