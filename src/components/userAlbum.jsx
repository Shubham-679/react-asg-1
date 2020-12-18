import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const UserAlbum = () => {
  let useralbums = useSelector(state=>state)
        return ( 
            <div>
           <div><h1>user Albums</h1></div>
           <div>
            <table className="table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Album Title</th>
                </tr>
              </thead>
              <tbody>
                {useralbums.map((useralbum) => (
                  <tr key={useralbum.id}>
                    <td>{useralbum.id}</td>  
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