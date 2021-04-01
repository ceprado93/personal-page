import { useState, useLayoutEffect } from 'react'
import { Container, Carousel, Row, Col, Spinner, Accordion, Card } from 'react-bootstrap'
import './Portfolio.css'
import wvLogin from './wm-login.png'
import wvProfile from './wm-profile.png'
import wvClusters from './wm-clusters.png'
import wvWave from './wm-wave.png'
import phHome from './phones-home.png'
import phDetails from './phones-details.png'
import wmGif from '../Index/wavemaps.gif'
import fgHome from '../Index/fg-home.png'
import fgGame from './fgGame.png'
import apsRacing from './apsRacing.mp4'
import apsHome from '../Index/apsRacing.png'






const Portfolio = () => {
    const [reveal, setReveal] = useState({ right: 'reveal fadeInRight', left: 'reveal fadeInLeft', down: 'reveal fadeInDown' })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setReveal({
                right: 'reveal fadeInRight visible', left: 'reveal fadeInLeft visible', down: 'reveal fadeInDown visible'
            })
        }, 500);
    }, [])
    return (
        <>

            <section className='portfolio'>
                <Container>
                    {reveal.down === 'reveal fadeInDown visible' ? <h2 className={reveal.down}>Portfolio</h2> : <Spinner className="loader" animation="grow" variant="success" />}
                    <Row>
                        <Col className={reveal.left}>
                            <hr style={{ marginTop: 0, marginBottom: 20 }}></hr>
                            <Accordion style={{ marginBottom: 50 }}>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="3"> <h3>APS Racing</h3></Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body><p>React app created for APS Racing, a motorSport media channel . Server created with NodeJS</p>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <video autoPlay="true" loop="true" data-reactid=".0.1.0.0">
                                                        <source type="video/mp4" data-reactid=".0.1.0.0.0" src={apsRacing} />
                                                    </video>
                                                </Carousel.Item>
                                            </Carousel>
                                            <hr></hr>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0"><h3> Wave Maps</h3></Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Surf atlas done with React, NodeJs and MongoDB, using the google maps react API, their clusters and Geocoder.</p>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={wmGif}
                                                        alt="First slide"
                                                    />

                                                </Carousel.Item>
                                                <Carousel.Item >
                                                    <img
                                                        className="d-block w-100"
                                                        src={wvClusters}
                                                        alt="Second slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={wvWave}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={wvLogin}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={wvProfile}
                                                        alt="Third slide"
                                                    />

                                                </Carousel.Item>
                                            </Carousel>
                                            <hr></hr>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1"> <h3>Food Game</h3></Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body><p>JS canvas game</p>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={fgHome}
                                                        alt="First slide"
                                                    />

                                                </Carousel.Item>
                                                <Carousel.Item >
                                                    <img
                                                        className="d-block w-100"
                                                        src={fgGame}
                                                        alt="Second slide"
                                                    />
                                                </Carousel.Item>

                                            </Carousel>
                                            <hr></hr>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="2"><h3> The phone Cave</h3></Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body><p>React app connected to a REST API. API created with NodeJS</p>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={phHome}
                                                        alt="First slide"
                                                    />

                                                </Carousel.Item>
                                                <Carousel.Item >
                                                    <img
                                                        className="d-block w-100"
                                                        src={phDetails}
                                                        alt="Second slide"
                                                    />
                                                </Carousel.Item>

                                            </Carousel>
                                            <hr></hr>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Portfolio