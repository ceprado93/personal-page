import { useState, useLayoutEffect } from 'react'

import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css'

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

    const [changeClass, setChangeClass] = useState(false)
    document.addEventListener('scroll', (e) => scrollNav(e))

    function scrollNav(e) {
        const scrollTop = window.pageYOffset
        if (scrollTop > 65) setChangeClass(true)
        else if (scrollTop === 0) setChangeClass(false)
    }

    function scrollDown(e) {
        window.scrollTo({ left: 0, top: e, behavior: "smooth" })
    }

    return (
        <>
            <section className='first-section' style={{ backgroundImage: `url(https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)` }}>
                <Container as="section" >
                    <Row>
                        <Col md={7}>
                            <h1 className={revealMain.down}>Carlos Prado</h1>
                            <h2 className={revealMain.down}>Front-end web developer based in Madrid, Spain</h2>
                            <div>
                                <Link to="/about" ><Button className="btn">About & Skills</Button></Link>
                                <Link to="/portfolio" ><Button className="outline-btn">Portfolio</Button></Link>
                            </div>
                        </Col>
                    </Row>


                </Container>
            </section>
            {/* <section className='first-section'>
                <Container as="section">
                    <div className={revealMain.appearOne}>
                        <div className={revealMain.appearTwo}>
                            <h1 className={revealMain.down}>Carlos Prado</h1>
                            <h2 className={revealMain.down}>Full stack web developer based in Madrid, Spain</h2>
                            <div className="btn">
                                <Link to="/about" ><Button variant="warning">About & Skills</Button></Link>
                                <Link to="/portfolio" ><Button variant="warning">Portfolio</Button></Link>
                            </div>

                        </div>
                    </div>

                </Container>
            </section> */}
        </>
    )
}

export default IndexPage