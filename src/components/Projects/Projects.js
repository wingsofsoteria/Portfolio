import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="As of yet unnamed OS"
              description="A fairly bare bones operating system kernel and loader built to help me learn about hardware startup processes"
              ghLink="https://github.com/wingsofsoteria/uefi-bare-bones"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Nix Flake"
              description="My personal nixos config and resources"
              ghLink="https://github.com/wingsofsoteria/nix-flake"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="QMK Firmware"
              description="My fork of QMK"
              ghLink="https://github.com/wingsofsoteria/qmk_firmware"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
