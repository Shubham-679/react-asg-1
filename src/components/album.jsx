import React, { Component } from 'react';
import axios from 'axios';

class Album extends Component {
    state = { 
        albums:[]
     };

     async componentDidMount() {
         const {data:albums} = await axios.get("https://jsonplaceholder.typicode.com/albums")
         this.setState({albums})
     }

    render() { 
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
                {this.state.albums.map((album) => (
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
    }
}
 
export default Album;