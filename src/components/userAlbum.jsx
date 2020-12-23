import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getuser } from '../actions/index';


const UserAlbum = () => {
  let useralbums = useSelector(state=>state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getuser(useralbums))
  },[]);
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