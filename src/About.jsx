import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import { Button } from "./style/Button";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <HeroSection name="Vishal Kumar Yadav" image="./images/about1.svg" />
      <div className="container">
        <div className="education">
          <h1 className="edu-heading">Education</h1>
          <div className="edu-container">
            <div className="edu-container--box">
              <div className="edu-logo">
                <img src="./images/vitLogo.jpg" className="edu-image" />
                <div className="edu-topic">
                  <h3>
                    <strong>Vellore Institute Of Technology</strong>
                  </h3>
                  <h4>
                    <strong>Chennai Campus</strong>
                  </h4>
                </div>
              </div>
              <div className="edu-data">
                <p>
                  Top Indian engineering college, world-class education,
                  internships, excellent placements, great facilities.
                </p>
                <p>
                  <strong>Degree: </strong>B.Tech CSE
                </p>
                <p>
                  <strong>CGPA: </strong>9.13
                </p>
                <p>
                  <strong>Batch: </strong>2021-25
                </p>
              </div>
            </div>
            <div className="edu-container--box">
              <div className="edu-logo">
                <img
                  src="./images/kendriyaVidyalaya.svg"
                  className="edu-image"
                />
                <div className="edu-topic">
                  <h3>
                    <strong>Kendriya Vidyalaya</strong>
                  </h3>
                  <h4>
                    <strong>DGQA, Chennai</strong>
                  </h4>
                </div>
              </div>
              <div className="edu-data">
                <p>
                  Kendriya Vidyalayas: Central govt. schools under Ministry of
                  Education, India.
                </p>
                <p>
                  <strong>Degree: </strong>Higher Secondary
                </p>
                <p>
                  <strong>Percentage: </strong>94%
                </p>
                <p>
                  <strong>Batch: </strong>2020-21
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <h1 className="skills-heading">Technical Skills</h1>
          <div className="skills-icons">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/html-5--v1.png"
              alt="html-5--v1"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/css3.png"
              alt="css3"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color-glass/48/bootstrap.png"
              alt="bootstrap"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/sass.png"
              alt="sass"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/javascript--v1.png"
              alt="javascript--v1"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/react-native.png"
              alt="react-native"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/48/wordpress.png"
              alt="wordpress"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/figma--v1.png"
              alt="figma--v1"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/48/canva.png"
              alt="canva"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/48/git.png"
              alt="git"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/glyph-neue/64/github.png"
              alt="github"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/48/python.png"
              alt="python"
            />
          </div>
          <div className="skills-project">
            <div className="project-item">
              <p>
                Check out the projects which I have made using the above
                mentioned tools
              </p>
              <NavLink to="/projects">
                <Button>Click Here!</Button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="coding">
          <h1 className="coding-heading">Compitative Coding</h1>
          <div className="edu-container">
            <NavLink to="https://leetcode.com/vishal100403" target="_blank">
              <div className="edu-container--box">
                <div className="edu-logo">
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"
                    alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo"
                  />
                  <div className="edu-topic">
                    <h3>
                      <strong>LeetCode</strong>
                    </h3>
                    <h4>
                      <strong>@vishal100403</strong>
                    </h4>
                  </div>
                </div>
                <div className="edu-data">
                  <img
                    src="./images/LeetcodeProfile.png"
                    alt="Leetcode Profile"
                  />
                </div>
              </div>
            </NavLink>
            <NavLink
              to="https://www.codechef.com/users/vishal_1004"
              target="_blank"
            >
              <div className="edu-container--box">
                <div className="edu-logo">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/codechef.png"
                    alt="codechef"
                  />
                  <div className="edu-topic">
                    <h3>
                      <strong>CodeChef</strong>
                    </h3>
                    <h4>
                      <strong>@vishal_1004</strong>
                    </h4>
                  </div>
                </div>
                <div className="edu-data">
                  <img
                    src="./images/codechefProfile1.png"
                    alt="CodeChef Profile"
                  />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .education {
    margin: 2rem 0;
  }

  .skills,
  .coding {
    margin: 5rem 0;
  }

  .edu-heading,
  .skills-heading,
  .coding-heading {
    text-align: center;
  }

  .skills-icons {
    margin: 5rem 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    img {
      transition: transform 0.3s ease-in-out;
    }

    img:hover {
      transform: scale(1.2);
    }
  }

  .skills-project {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .project-item {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 20px;
      background-color: #f9f9ff;
      border: 1px solid #f0f0f0;
      border-radius: 15px;
    }
  }

  .edu-container {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
    }
  }

  .edu-container--box {
    flex: 1;
    padding: 20px;
    background-color: #f9f9ff;
    border: 1px solid #f0f0f0;
    border-radius: 15px;
  }

  .edu-logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    .edu-topic {
      h3 {
        font-size: 2rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
  }

  .edu-data {
    img {
      margin: 1rem;
      border: 1px solid #f0f0f0;
      border-radius: 15px;
    }
  }

  .edu-image {
    width: 50px;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .edu-container {
      flex-direction: column;
    }

    .edu-data {
      img {
        margin: 1rem;
        border: 1px solid #f0f0f0;
        border-radius: 15px;
        width: 275px;
      }
    }

    .skills-icons {
      justify-content: left;
    }
  }
`;

export default About;
