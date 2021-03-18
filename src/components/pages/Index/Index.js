import { useState, useLayoutEffect } from 'react'

import { Container, Button, ButtonGroup, Row, Col } from 'react-bootstrap'
import './home.css'

const IndexPage = () => {

    const [revealMain, setRevealMain] = useState({ down: 'revealMain fadeInDown' })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setRevealMain({
                down: 'revealMain fadeInDown visible'
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
            <section className='first-section'>
                <Container as="section">
                    <h1 className={revealMain.down}>Full stack web developer based in Madrid, Spain</h1>
                    <hr></hr>
                    {/* <ButtonGroup size="mb" className='btnGroup'>
                        <Button variant="success" onClick={() => scrollDown(800)}> About</Button>
                        <Button variant="outline-success" onClick={() => scrollDown(1550)}>Skills</Button>
                        <Button className="btn btn-success" onClick={() => scrollDown(2350)}> Portfolio</Button>
                        <Button variant="outline-success" onClick={() => scrollDown(3050)}>Contact</Button>
                    </ButtonGroup> */}
                </Container>
            </section>
        </>
    )
}

export default IndexPage