import React, { useContext } from "react";
// import { Suspense } from "react";
// import { HashLoader } from "react-spinners";
// import MediumVideo from "./MediumVideo";
// import ModesensVideo from "./ModesensVideo";
import "./Projects.css";
import PharmaEasy from "./pharmaeasy.png";
import Nykaa from "./nykaaclone1.png";
import Nike from "./nike.png";
import Policybazaar from "./policybazaar.png";
import Greenhouse from "./Gh_HomePage.jpg";
import { themeContext } from "../../Context";
function Projects() {
  const { theme, mode, toggle } = useContext(themeContext);
  const { darkmode, lightdarkmode, lightmode } = theme;

  return (
    <div className="projects" id="projects">
      <h1 className="p-title">PROJECTS</h1>
      {/*  */}
      <div className="project">
        <h1 className="project-heading">Nike</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="react"
              />
              <img
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                alt="redux"
              />
              <img
                src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white"
                alt="chakra-ui"
              />
              <img
                src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                alt="Node"
              />
              <img
                src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
                alt="Express"
              />
              <img
                src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"
                alt="JWT"
              />
              <img
                src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="mongodb"
              />
            </div>
            <div className="project-video-div-for-media">
              <img
                src={Nike}
                alt="Nike"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "20px 0px",
                  border: "1px solid gray",
                }}
              ></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://nike-clone-srv.vercel.app"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/sourav215/Nike"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
              This project is a clone of "Nike.com" with Backend integration
              which is an e-commerce store.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              <li>Login and Signup User Account</li>
              <li>Authentication | Authorization</li>
              <li>Mens, Womens and Kids Section with Sort and Filters</li>
              <li>Cart Add and Remove Items</li>
              <li>Checkout | Payment Page along with all Functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              <li>Implemented all the Functionalities</li>
              <li>Developed Backend for App</li>
              <li>Deployment of Project</li>
            </ul>
            <h1 className="p-div">
              It’s my major project where I've used MERN stack to make this
              website.
            </h1>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="project">
        <h1 className="project-heading">Policy Bazaar</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="react"
              />
              <img
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                alt="redux"
              />

              <img
                src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white"
                alt="chakra-ui"
              />
              <img
                src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"
                alt="material-ui"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
              <img
                src={Policybazaar}
                alt="PharmaEasy"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "20px 0px",
                  border: "1px solid gray",
                }}
              ></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://policy-bazaar-clone.vercel.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/Nagendrapasala/PolicyBazaar"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
              Policy Bazaar is a website where users can purchase policies and
              insurances related to health, car, and several other amenities.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              <li>Home Page</li>
              <li>Sign Up | Login</li>
              <li>Policies Details Page</li>
              <li>Checkout | Payment Page along with all Functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              <li>Manage the Project | Deployment of Project</li>
              <li>Login and SignUp functionality</li>
              <li>Developed Checkout Page </li>
              {/* <li>Developed Backend for Web App</li> */}
            </ul>
            <h1 className="p-div">
              A collaborative project built by 5 Developers within 1 week.
            </h1>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="project">
        <h1 className="project-heading">Nykaa Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
              <img
                src={Nykaa}
                alt="Nykaa"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "20px 0px",
                  border: "1px solid gray",
                }}
              ></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://nyka.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/almightycoder4/nykaa-clone"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
              Nykaa is an Indian e-commerce Mumbai-based retail seller of
              beauty, fashion and wellness products. <br />
              <br /> In this project we have tried to make a look alike clone of
              Nykaa. With our efforts and the technology stack, that we have
              learned so far in the masai school.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              <li> Landing Page | Home Page | Sign Up | Login</li>
              <li>Products Page</li>
              <li>Filter & Sort Products according to your need</li>
              <li>Add To Cart Page | Add Products in Cart | Checkout</li>

              <li>Checkout and Payment Page along with all Functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              {/* <li>Sign Up and Login Functionality</li>
              <li>Creating data for website</li> */}
              <li>
                Developed Checkout & Payment Page along with all Functionality |
                Add Address and Apply Coupon Feature
              </li>
              <li>Developed Backend for Web App using JSON-Server</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 5 Developers within 6 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Greenhouse Clone</h1>
        <div className="project2">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
            </div>
            <div className="project-video-div-for-media">
              {/* <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                      paddingBottom: "50px",
                      paddingTop: "50px",
                    }}
                  >
                    <HashLoader />
                  </div>
                }
              >
                <SudokuVideo />
              </Suspense> */}
              <img
                src={Greenhouse}
                alt="Greenhouse"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "20px 0px",
                  border: "1px solid gray",
                }}
              ></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://greenhouseclone.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/Ni3deshwal/GreenHouseClone"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
              Online job search website where users can search and apply any job
              and see about the products and solutions, community support .
            </h1>
            <h1 className="p-div">Features</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              <li>Sign Up | Login</li>
              <li>Search and Apply any Jobs</li>
              <li>Products and Solutions</li>
              <li>Blog Page</li>
              <li>See all applied job Page</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul
              className="p-details"
              style={mode ? { color: "lightgray" } : lightmode}
            >
              <li>Manage the Project | Deployment of Project</li>

              <li>Login and SignUp functionality</li>
              <li>Search functionality</li>
              <li>Creating data for website</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 5 days.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
