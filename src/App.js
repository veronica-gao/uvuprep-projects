import React from 'react';
import './main.css';
import students from './json/students';
import students2021 from './json/students2021'

class App extends React.Component {
  state = {
    year: "2021"
  }

  componentDidMount() {
  }

  render() {
    return (
      <main>
        <h1>UVU Prep CS Projects 2021</h1>
        {this.state.name ? <h3>{this.state.name}</h3> : <h3>Check out the cool stuff we made this year! Each project is the student's own work!</h3>}
        <nav className="nav">
          <ul>
            <li>
              <span className="clickable">Select Student &#9759;</span>
              <ul>
                {Object.keys(students2021).map(el => (
                  <li className="clickable" onClick={(e) => {this.setState({name: e.target.innerHTML})}}>{el}</li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
        
        {this.state.name ? 
          this.state.year === "2021" ? 
            <>
              {students2021[this.state.name].map(val => {
                if (val === "micro:bit") {
                  return <>
                    <h4>Check out my micro:bit project in this room!</h4>
                    <br/>
                  </>
                } else if (val.includes("replit.com")) {
                  return <>
                    <iframe title={this.state.name} width={"100%"} height={500} src={val.replace(/#.*/g, "")+"?embed=true"}></iframe>
                    <a href={val} target="_blank" rel="noopener noreferrer">Link to project</a>
                    <br/>
                  </>
                } else if (val.includes("http")) {
                  return <>
                    <iframe title={this.state.name} width={"100%"} height={600} src={val}></iframe>
                    <a href={val} target="_blank" rel="noopener noreferrer">Link to project</a>
                    <br/>
                  </>
                } else {
                  return <>{val}<br/></>
                }
              })}
            </> :
          this.state.year === "2019" ? 
            <iframe 
              title={students[this.state.name].title} 
              src={students[this.state.name].src} 
              width={800} 
              height={500}
            >
              <script>document.write()</script>
            </iframe> : 
            <></> : 
          <></>
        }
      </main>
    );
  }
}

export default App;
