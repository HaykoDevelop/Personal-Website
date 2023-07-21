import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ahmo from "../../Assets/Projects/ahmo.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are some projects that i have worked on.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ahmo}
                            isBlog={false}
                            title="AHMO"
                            description="A application to create a personal chat room or workspace to share resources and hangout with friends build with next.js and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/HYF-Class19/ahmo-frontend-class19"
                            demoLink="https://ahmo-chat.up.railway.app"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
