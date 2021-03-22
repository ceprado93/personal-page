import { useState, useLayoutEffect } from 'react'
import { Container, Carousel, Row, Col, Spinner, Accordion, Card } from 'react-bootstrap'
import './Portfolio.css'
import wvHome from './wm-home.png'
import wvLogin from './wm-login.png'
import wvProfile from './wm-profile.png'
import wvClusters from './wm-clusters.png'
import wvWave from './wm-wave.png'
import phHome from './phones-home.png'
import phDetails from './phones-details.png'

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
                            <hr></hr>
                            <Accordion style={{ marginBottom: 50 }}>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0"><h3> Wave Maps</h3></Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Surf atlas done with React, NodeJs and MongoDB, using the google maps react API, their clusters and Geocoder.</p>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={wvHome}
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
                                        <Card.Body>Hello! I'm another body</Card.Body>
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