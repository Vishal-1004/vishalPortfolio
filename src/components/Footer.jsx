import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import { FaLinkedin, FaSquareGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Want to work with me?</h3>
            <h3>Connect to me today!</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Vishal Technical</h3>
            <p>
              This website was built using React.js. I hope it meets your
              expectations.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Lets Connect!</h3>
            <div className="footer-social-icons">
              <div>
                <NavLink
                  to="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </NavLink>
              </div>
              <div>
                <NavLink to="https://github.com/Vishal-1004" target="_blank">
                  <FaSquareGithub className="icons" />
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="https://www.instagram.com/vishal._.104/"
                  target="_blank"
                >
                  <FaInstagram className="icons" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="footer-about">
            <h3>Call Me</h3>
            <p>+91 8072670939</p>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} VishalTechnical. All Rights Reserved.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 4rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-subscribe {
      ul {
        li {
          margin: 1rem 0;
          a {
            text-decoration: none;
            color: #a4a7b4;
            font-size: 1.4rem;
            font-weight: 500;
          }
        }
      }
    }

    .footer-social-icons {
      display: flex;
      gap: 1rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
