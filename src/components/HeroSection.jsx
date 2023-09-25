import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import PropTypes from "prop-types";

const HeroSection = (props) => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{props.name}</h1>
          <p className="hero-para">
            I am Vishal Kumar Yadav. A 3rd year student from Vellore Institute
            Of Technology - Chennai. I am a Front-end developer and a LeetCode
            enthusiast.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={props.image} alt="Hero Image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

HeroSection.propTypes = {
  name: PropTypes.string.isRequired, // Add prop validation for 'name'
  image: PropTypes.string.isRequired, // Add prop validation for 'image'
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 2rem 0;
    .grid {
      gap: 3rem;
    }

    .btn {
      margin-top: 0;
      max-width: 13rem;
    }
  }
`;
export default HeroSection;
