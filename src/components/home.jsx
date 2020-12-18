import React, { useEffect } from "react";
import axios from "axios";
import { useSelector , useDispatch } from 'react-redux';
import { getuser , getalbum } from '../actions/index';
const Home = (props) =>{
  // const [users, setState] = useState([]);
  let users = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: user } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
      dispatch(getuser(user))
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  },[]);

  console.log(users)

  const handleClick = async (id) => {
        console.log(id)
        const { data: userAlbum} = await axios.get('https://jsonplaceholder.typicode.com/users/'+ id +'/albums')        
        console.log(userAlbum)
        dispatch(getalbum(userAlbum))
        props.history.push("/useralbums")
      }

    return (
        <div>
            <div><h1>Users Details</h1></div>
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
                <td onClick={()=>handleClick(user.id)}>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        </div>
          );
}

export default Home;
