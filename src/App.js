import './App.css';

function App() {
  return (
    <div className="App">
      <div className="welcome">
      <h1>Hi there </h1>
      <p>Welcome to my website</p>
      </div>
      <div className="navbar">
        <ul className="navbar-list">
          <li><a href="">About</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Work Samples</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Education</a></li>
        </ul>
      </div>
      <div className="main-area"></div>
      <div className="social-links"></div>
    </div>
  );
}

export default App;
