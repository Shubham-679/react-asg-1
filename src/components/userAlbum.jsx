import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UserAlbum = (props) => {

  const [userAlbum, setState] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const userId  = props.match.params.id;
        const { data: userAlbum } = await axios.get(
          'https://jsonplaceholder.typicode.com/users/'+ userId +'/albums'
        );
        setState(userAlbum);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  });
  
        return ( 
       <div>
           <div><h1>Our Latest Albums</h1></div>
           <div>
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
    }
 
export default UserAlbum;