import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getuser } from "../actions/index";
import { Link } from 'react-router-dom';

const Home = (props) => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getuser());
  }, []);

  // const handleClick = async (id) => {
  //       console.log(id)
  //       const { data: userAlbum} = await axios.get('https://jsonplaceholder.typicode.com/users/'+ id +'/albums')
  //       console.log(userAlbum)
  //       dispatch(getalbum(userAlbum))
  //       props.history.push("/useralbums")
  //     }
  
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
                <td> <Link to={`/useralbums/${user.id}`}>{user.username}</Link></td>
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