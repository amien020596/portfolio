import React, { Component } from 'react'
import { Col, Container, Row } from "reactstrap";
import BaseLayout from '../src/components/layouts/BaseLayout';
import Typed from 'react-typed';

class Index extends Component {
  constructor(props) {
    super(props)
    this.strings = ['Developer', 'React JS', 'Next CEO', 'Creator new World'];
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }


  render() {
    const { auth, isAuthenticated: user } = this.props;

    return (
      <BaseLayout className="cover" auth={auth}>
        <div className="main-section">
          <div className="background-image">
            <img src="/static/assets/images/background-index.png" alt="background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                  </div>
                      </div>
                      <img className="image" src="/static/assets/images/section-1.png" alt="section-1.png" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {user && <b>{user.name}</b>} Welcome to the portfolio website of Filip Jerga.
                    Get informed, collaborate and discover projects I was working on through the years!
                    </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={this.strings}
                  shuffle={false}
                  backDelay={1000}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
            </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>

    )
  }
}
export default Index;