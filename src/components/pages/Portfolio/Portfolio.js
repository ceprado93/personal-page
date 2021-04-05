import { useState, useLayoutEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import './Portfolio.css'
import { Parallax } from "react-parallax";


const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    diplay: "flex",
    flexDirection: 'column',
    textAlign: 'center'
};

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
                        <Col md={{ span: 10, offset: 1 }} style={{ marginBottom: 150 }}>
                            <Parallax bgImage='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/01/26/15484986822524.jpg' strength={-100}>
                                <div style={{ height: 400 }}>
                                    <div style={insideStyles}>
                                        <a href="https://github.com/ceprado93/personal-page">APS RACING</a>
                                        <div>
                                            <img className="stack" src='https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg' alt='react' />
                                            <img className="stack" src='https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg' alt='javascript' />
                                            <img className="stack" src='https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png' alt='node js' />
                                            <img className="stack" src='https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg' alt='Axios' />
                                            <img className="stack" src='http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png' alt='mongo db' />
                                        </div>
                                    </div>
                                </div>
                            </Parallax>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }} style={{ marginBottom: 150 }}>
                            <Parallax bgImage='https://images.squarespace-cdn.com/content/v1/527c03e4e4b03247a686bb74/1495663912038-GL0LA6795260JW76QPPR/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/B84I5421-2A.JPG?format=1500w' strength={-100}>
                                <div style={{ height: 400 }}>
                                    <div style={insideStyles}>
                                        <a href="https://github.com/ceprado93/final-project">WAVE MAPS</a>
                                        <div>
                                            <img className="stack" src='https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg' alt='react' />
                                            <img className="stack" src='https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg' alt='javascript' />
                                            <img className="stack" src='https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png' alt='node js' />
                                            <img className="stack" src='https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg' alt='Axios' />
                                            <img className="stack" src='http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png' alt='mongo db' />
                                        </div>
                                    </div>
                                </div>
                            </Parallax>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }} style={{ marginBottom: 150 }}>
                            <Parallax bgImage='https://cdn.cienradios.com/wp-content/uploads/sites/3/2020/10/Homero-simpson.jpg' strength={-100}>
                                <div style={{ height: 400 }}>
                                    <div style={insideStyles}>
                                        <a href="https://github.com/Monch87/Project1-Homer_donuts-VIDEOGAME">FOOD GAME</a>
                                        <div>
                                            <img className="stack" src='https://cdn.iconscout.com/icon/free/png-512/handlebars-282936.png' alt='mongo db' />
                                            <img className="stack" src='http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png' alt='mongo db' />
                                            <img className="stack" src='https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png' alt='node js' />

                                        </div>
                                    </div>
                                </div>
                            </Parallax>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }} style={{ marginBottom: 150 }}>
                            <Parallax bgImage='https://marketingland.com/wp-content/ml-loads/2017/10/Main_Image_Phone.jpg' strength={-100}>
                                <div style={{ height: 400 }}>
                                    <div style={insideStyles}>
                                        <a href="https://github.com/ceprado93/reto_web">THE PHONE CAVE</a>
                                        <div>
                                            <img className="stack" src='https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg' alt='react' />
                                            <img className="stack" src='https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg' alt='javascript' />
                                            <img className="stack" src='https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png' alt='node js' />
                                            <img className="stack" src='http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png' alt='mongo db' />
                                        </div>
                                    </div>
                                </div>
                            </Parallax>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Portfolio