import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Album = () => {

  const [albums, setState] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const { data: albums } = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setState(albums);
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
                  <th>S.No</th>
                  <th>Album Title</th>
                </tr>
              </thead>
              <tbody>
                {albums.map((album) => (
                  <tr key={album.id}>
                    <td>{album.id}</td>  
                    <td><Link to={`/photos/${album.id}`}>{album.title}</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>
         );
    }
 
export default Album;