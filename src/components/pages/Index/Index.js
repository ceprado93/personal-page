import { useState, useLayoutEffect } from 'react'

import { Container, Button, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css'
import wmGif from './wavemaps.gif'
import Typewriter from 'typewriter-effect';
import fgHome from './fg-home.png'
import apsHome from './apsRacing.png'


const IndexPage = () => {

    const [ready, setReady] = useState(false)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    return (
        <>
            <section className='first-section' style={{ backgroundImage: `url(https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)` }}>
                <Container as="section" >
                    <Row>
                        <Col md={7}>
                            <div>
                                <hr className="first-item"></hr>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString(`<h1>Carlos Prado<h1>`).start()
                                            .callFunction(() => {
                                                setReady(true)
                                            })
                                    }}
                                />
                                {ready && <Typewriter
                                    options={{
                                        strings: '<h2>Front-end web developer based in Madrid, Spain<h2>',
                                        autoStart: true,
                                        cursorClassName: 'Typewriter__cursor'
                                    }}
                                />}

                            </div>
                            <div style={{ marginBottom: 100 }}>
                                <Link to="/about" ><Button className="btn">About & Skills</Button></Link>
                                <Link to="/portfolio" ><Button className="outline-btn">Portfolio</Button></Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section>
                <div className="bottom-carousel">
                    <Container>
                        <h1 style={{ margin: '100px 0' }}>Projects</h1>
                        <Row>
                            <Col md={4} className="project-card">
                                <Card >
                                    <Card.Img variant="top" src={apsHome} alt="aps" />
                                    <Card.Body>
                                        <h3>APS Racing</h3>
                                        <Link to="/portfolio"><Button className="btn-card" >Portfolio</Button></Link>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="project-card">
                                <Card >
                                    <Card.Img variant="top" src={wmGif} alt="wavemaps" />
                                    <Card.Body>
                                        <h3>Wavemaps</h3>
                                        <Link to="/portfolio"><Button className="btn-card" >Portfolio</Button></Link>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} className="project-card">
                                <Card>
                                    <Card.Img variant="top" src={fgHome} alt="foodgame" />
                                    <Card.Body>
                                        <h3>The food Game</h3>
                                        <Link to="/portfolio"><Button className="btn-card" >Portfolio</Button></Link>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </section>

        </>
    )
}

export default IndexPage