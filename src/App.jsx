import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Comment from './components/Comment';

// let me = {
//   personName: "Henry",
//   personAge: 26,
//   favorites: [
//     "lions",
//     "tigers",
//     "bears",
//     "dinos"
//   ]
// }


let initialPost = {
  title: "Dinosaurs are awesome",
  author: "Stealthy Stegasaurus",
  body: "Check out this body property!",
  comments: [
      "First!",
      "Great Post",
      "Hire this author now"
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialPost;
  }

  handleClick = (e) => {
    let input = prompt('Please input a new body text');
    this.setState({
      body: input
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.children[1].value;
    this.setState({
      body: input
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Hello World!</h1>
        <Hello person={me} /> */}
        <h1>Title: {this.state.title}</h1>
        <p>Author: {this.state.author}</p>
        <p>Body: {this.state.body}</p>
        
        <button onClick={this.handleClick}>Edit Stuff</button>

        <form onSubmit={this.handleSubmit}>
          <input type="submit" />
          <input type="text" />
        </form>
        
        <p>Comments:</p>
        <ul>
          { this.state.comments.map((comment, idx) => <Comment key={idx} commentText={comment} />) }
        </ul>
      </div>
    );
  }
}

export default App;
