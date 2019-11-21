import React from "react";
import logo from "./jobinPic.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <code>Jobin Scaria</code>
        <div className="App-msg">So Much to Learn, So Little Time</div>
        <div>
          <a
            className="App-link"
            href="https://psj01.github.io/JobinScaria_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>{" "}
          |{" "}
          <a className="App-link" href="#projects" rel="noopener noreferrer">
            Projects
          </a>{" "}
          |{" "}
          <a className="App-link" href="#connect" rel="noopener noreferrer">
            {" "}
            Connect
          </a>
        </div>
        <div style={{ fontSize: "75px" }}>👨‍💻</div>
      </header>
      <div className="App-projects" id="projects">
        <section className="section-projects">
          <ul className="projects-showcase clearfix">
            <li>
              <figure className="proj-desc">
                <h5>OShop</h5>
                <p>
                  An organic shop designed and developed with Angular and
                  Firebase.
                </p>
                <a href="https://oshop-42fc1.firebaseapp.com/">view app</a>
              </figure>
            </li>
            <li>
              <figure className="proj-desc">
                <h5>US citizenship exam challenge - New</h5>
                <p>
                  This app was created as part of learning javascript and html.
                </p>
                <a href="http://psj01.github.io/n400Exam/">view app</a>
              </figure>
            </li>
            <li>
              <figure className="proj-desc">
                <h5>Omni Foods</h5>
                <p>
                  Omni Foods designed and created for the course "Design and
                  Develop a Killer Website Using HTML5 and CSS3".
                </p>
                <a href="http://psj01.github.io/omnifood/">view app</a>
              </figure>
            </li>
            <li>
              <figure className="proj-desc">
                <h5>Pig Game</h5>
                <p>
                  This is a fun game designed and developed using javascript,
                  html and css.
                </p>
                <a href="http://psj01.github.io/pigGame/">view app</a>
              </figure>
            </li>
          </ul>
          <ul className="projects-showcase clearfix">
            <li>
              <figure className="proj-desc">
                <h5>Budget App</h5>
                <p>
                  This app was created as part of a complete javascript course
                  on Udemy.
                </p>
                <a href="http://psj01.github.io/budgetApp/">view app</a>
              </figure>
            </li>
            <li>
              <figure className="proj-desc">
                <h5>US citizenship exam challenge - old version</h5>
                <p>
                  This app was created as part of learning javascript and html.
                  - this is an older version of it.
                </p>
                <a href="http://psj01.github.io/n400Exam_OldVersion/">
                  view app
                </a>
              </figure>
            </li>
            <li>
              <figure className="proj-desc">
                <h5>NIU student page</h5>
                <p>My student page while I was at NIU.</p>
                <a href="http://students.cs.niu.edu/~z1262764/">view app</a>
              </figure>
            </li>
            <li>
              <figure className="proj-desc">
                <h5>To Do List</h5>
                <p>This app was created while learning angularJS.</p>
                <a href="http://psj01.github.io/toDoList/">view app</a>
              </figure>
            </li>
          </ul>
        </section>
      </div>
      <div className="App-connect" id="connect">
        <a
          href="https://www.linkedin.com/pub/jobin-scaria/12/84b/4a0"
          id="linkedIn"
          target="_blank"
          className="social-btn"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin fa-lg" />
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/psj01"
          id="github"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <i className="fa fa-github fa-lg" />
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://stackoverflow.com/users/3377344/psj01"
          id="stackOverflow"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <i className="fa fa-stack-overflow fa-lg" />
          Stack Overflow
        </a>{" "}
        |{" "}
        <a
          href="https://codepen.io/psj01/"
          id="codepen"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <i className="fa fa-codepen fa-lg" />
          Codepen
        </a>
        <br />
        <br />
        <br />
        <code>
          Made with <span style={{ color: "red" }}>&#x2665;</span>
        </code>
        <br />
        <br />
        <br />
        <code style={{ fontSize: "50px" }}>
          🚶
          <span style={{ fontSize: "20px" }}>🐕</span>
        </code>
      </div>
    </div>
  );
}

export default App;
