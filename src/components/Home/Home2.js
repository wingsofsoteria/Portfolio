import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import {
  AiFillGithub,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've been programming since 2018, I've dabbled in various programming languages like 
              <i>
                <b className="purple"> Rust, Java, Ruby, Python, Go, and More</b>
              </i>
              <br />
              <br />My favorites are 
              <i>
                <b className="purple"> C/C++ and Assembly </b>
              </i>
              <br />
              <br />
              My field of Interest's are 
              <i>
                <b className="purple">Embedded Development / Operating Systems Development and Hardware Modding</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={6} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wingsofsoteria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
