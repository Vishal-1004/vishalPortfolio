import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Services = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>My Projects</h1>
        </div>
        <div className="display-project">
          <div id="container">
            <div className="card">
              <img src="./images/vitScope.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">HTML5</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>

                <div className="name">VITScope Website</div>

                <p>
                  This is a website which describes about the achievements of
                  the SCOPE branch of the college in which I am currently
                  perusing B.Tech CSE and many more relevant pages are also
                  provided.I hope you would like this work of mine.
                </p>

                <button>
                  <NavLink to="https://vishal-1004.github.io/VITScope-Website/index.html">
                    View Site!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="card">
              <img src="./images/colorPicker.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">HTML5</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>

                <div className="name">ColorPicker Extension</div>

                <p>
                  A chrome extension made to pick the color from the screen and
                  copy or view it just in one click, moreover colors are kept in
                  local storage so you can view it again. The main user which
                  can be helped by this extension are mainly the Designers.
                </p>

                <button>
                  <NavLink to="https://github.com/Vishal-1004/ColorPickerExtension">
                    View Code!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="card">
              <img src="./images/vitPaperBank.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">HTML5</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>

                <div className="name">VIT Paper Bank</div>

                <p>
                  A very basic website made just using HTML and CSS which aims
                  to provide previous years papers of various subjects of Btech.
                  CSE course in VIT (Chennai). Through this website i intend to
                  help the students who want to prepare for their exams.
                </p>

                <button>
                  <NavLink to="https://vishal-1004.github.io/VIT-PaperBank/">
                    View Site!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="card">
              <img src="./images/currencyConvertor.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">HTML5</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">JavaScript</span>
                <span className="tag">API</span>

                <div className="name">Currency Converter</div>

                <p>
                  This application offers you the option to effortlessly convert
                  amounts between different currency rates.My goal behind
                  creating this platform is to explore the functionality of APIs
                  & gain insights into their integration within websites.
                </p>

                <button>
                  <NavLink to="https://vishal-1004.github.io/CurrencyConvertor/">
                    View Site!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="card">
              <img src="./images/textUtils.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">Bootstrap</span>
                <span className="tag">React.js</span>

                <div className="name">Text Utils</div>

                <p>
                  Used React.js which is a JavaScript library to build this
                  website. This webiste provides you with features like
                  converting text into upper case or lower cased moreover you
                  also get to choose between light mode and dark mode view.
                </p>

                <button>
                  <NavLink to="https://vishal-1004.github.io/react-TextUtils">
                    View Site!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="card">
              <img src="./images/worldClock.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">HTML5</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">JavaScript</span>

                <div className="name">World Clock</div>

                <p>
                  This application offers you to check the timings of different
                  countries just by one click. Use can thus check the current
                  timing for cuntries like USA, Russia, Bharat, Japan etc. This
                  website used UTC values of different locations & calculates
                  the timings.
                </p>

                <button>
                  <NavLink to="https://world-clock.vishalkumar551.repl.co/">
                    View Site!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="card">
              <img src="./images/socialMediaBlocker.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">HTML5</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>

                <div className="name">Social Media Blocker</div>

                <p>
                  Social Media Blocker Extension: Reclaim focus on you studies,
                  boost your productivity. Block social media distractions with
                  the help of this awesome extension. Click on the link given
                  below to see the procedure to follow in order to used this
                  extension.
                </p>

                <button>
                  <NavLink to="https://github.com/Vishal-1004/SocialMediaBlockerExtension">
                    View Code!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div id="container">
            <div className="card">
              <img src="./images/todoList.png" alt="Lago di Braies" />

              <div className="card__details">
                <span className="tag">HTML5</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">JavaScript</span>
                <div className="name">ToDo List</div>
                <p>
                  This web application lets you to keep track of all the items
                  which you intend to do in upcoming time & delete those task as
                  you complete it. All you task remians on the website even
                  after being reloaded as it uses local storage to store the
                  tasks.
                </p>
                <button>
                  <NavLink to="https://todo-list--vishalkumar551.repl.co/">
                    View Site!
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .display-project {
    margin: 2.5% auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  img {
    width: 100%;
    border-radius: 12px;
    height: 214px;
    object-fit: cover;
  }

  #container {
    max-width: 300px;
    margin: 10px auto;
  }

  .card {
    background-color: #f9f9ff;
    border: 1px solid #bacdd8;
    padding: 8px;
    border-radius: 12px;
  }

  .tag {
    padding: 4px 8px;
    border: 1px solid #e5eaed;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    color: #788697;
  }

  .name {
    font-size: 24px;
    font-weight: 600;
    margin-top: 16px;
  }

  p {
    font-size: 14px;
    color: #7f8c9b;
    line-height: 150%;
  }

  button {
    border: none;
    margin: 5px 0;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    color: #0077ff;
    background-color: #e0efff;
    margin: 0 auto;
    display: block;
    cursor: pointer;
  }

  .card__details {
    padding: 16px 8px 8px 8px;
  }

  button:focus,
  button:hover {
    background-color: #0077ff;
    color: #e0efff;
  }
`;

export default Services;
