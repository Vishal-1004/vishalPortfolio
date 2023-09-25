import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import { Button } from "./style/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <HeroSection name="Vishal Technical" image="./images/hero.svg" />
      <div className="container">
        <div className="mainBody">
          <div className="data">
            <h1>Who am I?</h1>
            <p>
              Hello Everyone!
              <br /> I'm Vishal Kumar Yadav, a 3rd-year student at VIT Chennai,
              maintaining a strong academic track record with a CGPA of 9.13.
              I'm passionate about Frontend Web Development and have a solid
              foundation in UX design.
              <br /> My expertise includes:
              <br />
              <div className="data-skills">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">SASS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">WordPress</span>
                <span className="tag">Figma</span>
                <span className="tag">Canva</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
                <span className="tag">Python</span>
              </div>
              Beyond my technical skills, I'm an active participant on LeetCode,
              having solved over 150+ coding challenges across various topics.
              My goal is to conquer 400+ questions, mastering all major areas.
              Additionally, I aim to progress from a 3-star competitive coder on
              CodeChef to at least a 4-star rating.
            </p>
            <NavLink to="/about">
              <Button className="btn">Learn More</Button>
            </NavLink>
          </div>
          <div className="image">
            <picture>
              <img
                src="./images/about2.jpg"
                alt="Hero Image"
                className="hero-img"
                style={{ maxWidth: "80%" }}
              />
            </picture>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mainBody {
    margin: 5rem 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 8rem;
  }

  .data-skills {
    margin: 10px 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .tag {
    margin: 0 5px;
    padding: 4px 8px;
    border: 1px solid #e5eaed;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    color: #788697;
  }

  .btn {
    margin-top: 2rem;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  //998px
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .mainBody {
      flex-direction: column;
      gap: 0;
    }

    .btn {
      margin-top: 1rem;
      max-width: 16rem;
    }
  }
`;

export default Home;
