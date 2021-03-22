import { useState, useLayoutEffect } from 'react'
import { Col, Row, Container, Spinner } from 'react-bootstrap'
import './About.css'
import photo from './photo.JPG'


const About = () => {

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

            <section className='about'>
                <Container>
                    {reveal.down === 'reveal fadeInDown visible' ? <h2 className={reveal.down}>About</h2> : <Spinner className="loader" animation="grow" variant="success" />
                    }

                    <Row>

                        <Col md={{ span: 7, offset: 1 }}>
                            <div className={reveal.left}>
                                <p >My name is Carlos Prado.</p>
                                <p >Born and raised in Getxo, Spain. As a kid, I always loved to disassemble and then reconstruct everything I came across, and find the logic behind, that's why, when I turned 18, I decided to study Engineering.</p>
                                <p >After graduating, I spent my first professional years working between Europe and South America in various industries and roles. In 2019, I decided to step out of my comfort zone, pack my bags and move to the other end of the world, Australia, where I lived for 1 year and a half.</p>
                                <p >Now, I am a front-end developer with full stack knowledge, always looking for the right balance between functionality and a visual impact.</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <img className={reveal.right} style={{ width: '100%', marginBottom: 20 }} src={photo} alt='Carlos Prado' />
                        </Col>

                    </Row>
                </Container>
            </section>
            <section className='skills'>
                <Container>
                    <hr></hr>
                    <h2>Skills</h2>

                    <Row>
                        <Col md={2} className='technology'>
                            <img src='https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg' alt='javascript' />
                            <p>Javascript</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg' alt='react' />
                            <p>React</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png' alt='typescript' />
                            <p>Typescript</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://res.cloudinary.com/marcomadera/image/upload/v1602894559/Blog/7/css_k23ypb.png' alt='css' />
                            <p>CSS</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png' alt='node js' />
                            <p>Node Js</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='data:image/png;base64,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' alt='html' />
                            <p>HTML</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png' alt='express' />
                            <p>Express</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png' alt='mongo db' />
                            <p>MongoDB</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://cdn.iconscout.com/icon/free/png-512/handlebars-282936.png' alt='mongo db' />
                            <p>Handlebars</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png' alt='mongo db' />
                            <p>Git</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg' alt='Axios' />
                            <p>Axios</p>
                        </Col>
                        <Col md={2} className='technology'>
                            <img src='https://camo.githubusercontent.com/bec2c92468d081617cb3145a8f3d8103e268bca400f6169c3a68dc66e05c971e/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67' alt='Bootstrap' />
                            <p>Bootstrap</p>
                        </Col>


                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About