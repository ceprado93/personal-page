import { Container, Carousel, Row, Col } from 'react-bootstrap'
import './Portfolio.css'
import home from './wm-home.png'
import login from './wm-login.png'
import profile from './wm-profile.png'
import clusters from './wm-clusters.png'
import wave from './wm-wave.png'

const Portfolio = () => {
    return (
        <>

            <section className='portfolio'>
                <Container>
                    <h2 className='port-title'>Portfolio</h2>
                    <Row>
                        <Col>



                            <h3>Wave Maps</h3>
                            <p>Surf atlas done with React, NodeJs and MongoDB, using the google maps react API, their clusters and Geocoder.</p>
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

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="sec-proj">
                                <h3>Food Game</h3>

                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Portfolio