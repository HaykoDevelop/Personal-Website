import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit,
    DiSass,
    DiWordpress,
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs, SiTypescript, SiFigma, SiAdobexd } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <AiFillHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoLogoCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiSass />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiWordpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFigma />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobexd />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
        </Row>
    );
}

export default Techstack;
