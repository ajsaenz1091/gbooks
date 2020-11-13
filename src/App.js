import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';



class App extends Component {
  constructor(){
    super()
    this.state = {
      books: [],
    }
  }

  componentWillUnmount(){
    axios.get('http://localhost:3000/books')
    .then((response) => {this.setState({books: response.data})})
  }

  render(){
    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Book</td>
              <td>2.5</td>
              <td>
                <Button color="success" size="sm" className="mr-2">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  
}

export default App;
