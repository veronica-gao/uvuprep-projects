import React from 'react';
import './main.css';
import students from './json/students';

class App extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <main>
        <h1>UVU Prep CS Projects 2019</h1>
        {this.state.name ? <h3>{this.state.name} - {students[this.state.name].title}</h3> : <h3>Check out the cool stuff we made this year!</h3>}
        <nav className="nav">
          <ul>
            <li>
              <span className="clickable">Select Student &#9759;</span>
              <ul>
                {Object.keys(students).map(el => (
                  <li className="clickable" onClick={(e) => {this.setState({name: e.target.innerHTML})}}>{el}</li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
        {this.state.name ? <iframe title={students[this.state.name].title} scrolling="no" src={students[this.state.name].src} width={800} height={500}></iframe> : <></>}
        <p>Each project made was the student's original work. They coded it in Python.</p>
      </main>
    );
  }
}

export default App;
