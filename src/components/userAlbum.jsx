import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getuserAlbum, updateAlbum } from '../actions/index';


const UserAlbum = (props) => {
  let useralbums = useSelector(state=>state.album)
  const dispatch = useDispatch();
  const userId = props.match.params.id;

  useEffect(() => {
    dispatch(getuserAlbum(userId))
  },[]);

  let value;
  const handleChange = (e) => {
    value = e.target.value;
  }
 const handleClick = (album) => {
  album.title = value;
  dispatch(updateAlbum(album))
 }
        return ( 
            <div>
           <div><h1>user Albums</h1></div>
           <input type="text" placeholder="Updates" onChange={handleChange}></input>
           <div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>S.No</th>
                  <th>Album Title</th>
                </tr>
              </thead>
              <tbody>
                {useralbums.map((useralbum) => (
                  <tr key={useralbum.id}>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={()=>handleClick(useralbum)}>Update</button>
                    </td>
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