import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <MDBFooter bgColor="light" className="text-center text-lg-start">
        <section className="border-top">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <Link className="navbar-brand" to="/">
                  <img
                    src="./logo.png"
                    alt=""
                    width="58"
                    height="26"
                    className="d-inline-block align-text-top"
                  />
                  <span
                    className="logo-name"
                    style={{
                      fontWeight: "400 !important",
                      fontSize: "1.5rem",
                      color: "black",
                    }}
                  >
                    &nbsp;Vcare GPA Guide
                  </span>
                </Link>
                <p className="my-4 p-logo">
                  Effortlessly compute your GPA and CGPA with precision. Our
                  website also calculates the GPA you must get to become a
                  9-pointer.
                  <br /> Simplifying the grading process for you!
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <Link to="/">Home</Link>
                </p>
                <p>
                  <Link to="/formula">Formula</Link>
                </p>
                <p>
                  <Link to="/report">Report</Link>
                </p>
                <p>
                  <Link
                    to="https://github.com/ANISHkumarSINHA/VIT-Gg"
                    target="_blank"
                  >
                    Source Code
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="5" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact Developer
                </h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Anish Sinha ~ VIT VELLORE
                </p>
                <p>
                  <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                  <MdOutlineMail /> &nbsp; anish763209@gmail.com
                </p>
                <p>
                  <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                  <AiOutlineLinkedin /> &nbsp;
                  <Link
                    to="https://www.linkedin.com/in/anish-sinha-248558220/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </p>
                <p>
                  <MDBIcon className="me-3 d-flex justify-content-center align-items-center" />
                  <FaGithubSquare /> &nbsp;
                  <Link to="https://github.com/ANISHkumarSINHA?tab=repositories" target="_blank">
                    GitHub
                  </Link>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Copyright : All Rights Reserved
        </div>
      </MDBFooter>
    </FooterStyle>
  );
}

const FooterStyle = styled.section`
  @media (max-width: 768px) {
    .p-logo {
      font-size: 0.85rem;
    }
  }
`;
