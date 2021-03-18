import { useState, useLayoutEffect } from 'react'
import { Container, Carousel, Row, Col, Spinner, Accordion, Card, Button } from 'react-bootstrap'
import './Portfolio.css'
import home from './wm-home.png'
import login from './wm-login.png'
import profile from './wm-profile.png'
import clusters from './wm-clusters.png'
import wave from './wm-wave.png'

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
                    {reveal.down === 'reveal fadeInDown visible' ? <h2 className={reveal.down}>Portfolio</h2> : <Spinner className="loader" animation="grow" variant="warning" />}
                    <Row>
                        <Col className={reveal.left}>
                            <hr></hr>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0"><h3> Wave Maps</h3></Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body><p>Surf atlas done with React, NodeJs and MongoDB, using the google maps react API, their clusters and Geocoder.</p>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={home}
                                                        alt="First slide"
                                                    />

                                                </Carousel.Item>
                                                <Carousel.Item >
                                                    <img
                                                        className="d-block w-100"
                                                        src={clusters}
                                                        alt="Second slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={wave}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={login}
                                                        alt="Third slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={profile}
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
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Portfolio