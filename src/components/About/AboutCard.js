import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Hayk Amalikyan </span>
                        from <span className="purple"> Brussels, Belgium.</span>
                        <br /> I am 19 year old individual who finished his high
                        school <br /> in 2023 and is ready to work as a web
                        developer.
                        <br />
                        I am currently unemployed and i am searching for work.
                        <br />
                        For more information you can look at my resume or
                        contact me.
                        <br />
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
