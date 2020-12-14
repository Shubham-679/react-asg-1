import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
    state = {
        users: []
      };
      
      async componentDidMount() { 
        const { data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({ users });
      }
  render() {
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
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>  
                <td>{user.name}</td>
                <td>{user.username}</td>
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
  }
}

export default Home;
