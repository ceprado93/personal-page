import { useState, useLayoutEffect } from 'react'

import { Container, Button, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css'
import wvClusters from '../Portfolio/wm-clusters.png'
import phHome from '../Portfolio/phones-home.png'
import wmGif from './wavemaps.gif'


const IndexPage = () => {

    const [revealMain, setRevealMain] = useState({ down: 'revealMain fadeInDown', appear: 'first-box', appearTwo: 'second-box' })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setRevealMain({
                down: 'revealMain fadeInDown visible',
                appearOne: 'first-box visible',
                appearTwo: 'second-box visible'
            })
        }, 500);
    }, [])



    return (
        <>
            <section className='first-section' style={{ backgroundImage: `url(https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)` }}>
                <Container as="section" >
                    <Row>
                        <Col md={7}>
                            <h1 className={revealMain.down}>Carlos Prado</h1>
                            <h2 className={revealMain.down}>Front-end web developer based in Madrid, Spain</h2>
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
                    <h2>Projects</h2>
                    <Link to="/portfolio"><Button className="btn" style={{ marginBottom: 40 }}>Portfolio</Button></Link>

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
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={phHome}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

        </>
    )
}

export default IndexPage