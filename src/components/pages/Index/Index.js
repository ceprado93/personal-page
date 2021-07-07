import { useState, useLayoutEffect } from "react";

import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
import Typewriter from "typewriter-effect";

import photo from "./photo.JPG";

const IndexPage = () => {
  const [ready, setReady] = useState(false);
  const [reveal, setReveal] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
    down: "reveal fadeInDown",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setReveal({
        right: "reveal fadeInRight visible",
        left: "reveal fadeInLeft visible",
        down: "reveal fadeInDown visible",
      });
    }, 500);
  }, []);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <div className="home">
      <section id="personal-page" className="first-section">
        <div className="first-item">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`<h1>Carlos Prado<h1>`)
                .start()
                .callFunction(() => {
                  setReady(true);
                });
            }}
          />
          {ready && (
            <Typewriter
              options={{
                strings: "<h2>Front-end web developer based in Madrid, Spain<h2>",
                autoStart: true,
                cursorClassName: "Typewriter__cursor",
              }}
            />
          )}
          <div className="btn_div">
            <a href="#about">
              <button className="btn__red">About & Skills</button>
            </a>
            <a href="#portfolio">
              <button className="btn__dark">Portfolio</button>
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <Container>
          {reveal.down === "reveal fadeInDown visible" && <h2 className={reveal.down}>About</h2>}

          <Row>
            <Col md={{ span: 7, offset: 1 }}>
              <div className={reveal.left}>
                <p className="responsive-second-p">
                  My name is <span>Carlos Prado.</span>
                </p>
                <p className="responsive-p">
                  Born and raised in Getxo, Spain. As a kid, I always loved to disassemble and then reconstruct
                  everything I came across, and find the logic behind, that's why, when I turned 18, I decided to study
                  <span> Engineering</span>.
                </p>
                <p className="responsive-second-p">
                  After graduating from Uni, I spent my first professional years working between <span>Europe</span> and{" "}
                  <span>South America </span>
                  in various industries and roles. In 2019, I decided to step out of my comfort zone, pack my bags and
                  move to the other end of the world, <span>Australia</span>, where I lived for 1 year and a half.
                </p>
                <p className="responsive-second-p">
                  Now, I am a <span>front-end developer</span> with full stack knowledge, always looking for the right
                  balance between functionality and visual impact.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <img className={reveal.right} style={{ marginBottom: 20 }} src={photo} alt="Carlos Prado" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="skills" className="skills">
        <Container>
          <hr></hr>
          <h2>Skills</h2>

          <Row>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img
                src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                alt="javascript"
              />
              <p style={{ marginTop: 10 }}>Javascript</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg" alt="react" />
              <p style={{ marginTop: 10 }}>React</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png" alt="typescript" />
              <p style={{ marginTop: 10 }}>Typescript</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="https://img.icons8.com/color/452/redux.png" alt="Redux" />
              <p style={{ marginTop: 10 }}>Redux</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img
                src="https://res.cloudinary.com/marcomadera/image/upload/v1602894559/Blog/7/css_k23ypb.png"
                alt="css"
              />
              <p style={{ marginTop: 10 }}>CSS</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png" alt="node js" />
              <p style={{ marginTop: 10 }}>Node Js</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img
                src="data:image/png;base64,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"
                alt="html"
              />
              <p style={{ marginTop: 10 }}>HTML</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png" alt="mongo db" />
              <p style={{ marginTop: 10 }}>MongoDB</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png" alt="express" />
              <p style={{ marginTop: 10 }}>Express</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="https://cdn.iconscout.com/icon/free/png-512/handlebars-282936.png" alt="mongo db" />
              <p style={{ marginTop: 10 }}>Handlebars</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"
                alt="mongo db"
              />
              <p style={{ marginTop: 10 }}>Git</p>
            </Col>
            <Col lg={2} md={3} sm={4} xs={6} className="technology">
              <img src="https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg" alt="Axios" />
              <p style={{ marginTop: 10 }}>Axios</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="portfolio" className="second__section">
        <section className="first__section-port" style={{ backgroundColor: "#dee1e5" }}>
          <Container>
            {reveal.down === "reveal fadeInDown visible" && <h2 className={reveal.down}>Portfolio</h2>}

            <div class="portfolio__project">
              <div className="project__desc">
                <h2>Aps Racing</h2>
                <p>
                  <span>MERN</span> project done for Rally and motorsport content and media. <span>MERN</span> project
                  done for Rally and motorsport content and media.
                </p>
                <div className="project__tecnologies">
                  <img
                    className="stack"
                    src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg"
                    alt="react"
                  />
                  <img
                    className="stack"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="javascript"
                  />
                  <img
                    className="stack"
                    src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png"
                    alt="node js"
                  />
                  <img
                    className="stack"
                    src="https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg"
                    alt="Axios"
                  />
                  <img
                    className="stack"
                    src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png"
                    alt="mongo db"
                  />
                </div>
              </div>
              <div className="project__image">
                <img
                  src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/01/26/15484986822524.jpg"
                  alt="aps"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="first__section">
          <Container>
            <div class="portfolio__project">
              <div className="project__desc">
                <h2>Wave Maps</h2>
                <p>
                  <span>MERN</span> project done for Rally and motorsport content and media. <span>MERN</span> project
                  done for Rally and motorsport content and media.
                </p>
                <div className="project__tecnologies">
                  <img
                    className="stack"
                    src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg"
                    alt="react"
                  />
                  <img
                    className="stack"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="javascript"
                  />
                  <img
                    className="stack"
                    src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png"
                    alt="node js"
                  />
                  <img
                    className="stack"
                    src="https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg"
                    alt="Axios"
                  />
                  <img
                    className="stack"
                    src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png"
                    alt="mongo db"
                  />
                </div>
              </div>
              <div className="project__image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/527c03e4e4b03247a686bb74/1495663912038-GL0LA6795260JW76QPPR/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/B84I5421-2A.JPG?format=1500w"
                  alt="wavemaps"
                />
              </div>
            </div>
          </Container>
        </section>
        <section className="first__section" style={{ backgroundColor: "#dee1e5" }}>
          <Container>
            <div class="portfolio__project">
              <div className="project__desc">
                <h2>Celia Perez Art</h2>
                <p>
                  <span>MERN</span> project done for Rally and motorsport content and media. <span>MERN</span> project
                  done for Rally and motorsport content and media.
                </p>
                <div className="project__tecnologies">
                  <img
                    className="stack"
                    src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg"
                    alt="react"
                  />
                  <img
                    className="stack"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="javascript"
                  />
                  <img
                    className="stack"
                    src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png"
                    alt="node js"
                  />
                  <img
                    className="stack"
                    src="https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg"
                    alt="Axios"
                  />
                  <img
                    className="stack"
                    src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png"
                    alt="mongo db"
                  />
                </div>
              </div>
              <div className="project__image">
                <img src="http://s858556938.mialojamiento.es/static/media/fondoHome.0cc0296f.png" alt="cperez" />
              </div>
            </div>
          </Container>
        </section>
        <section className="first__section">
          <Container>
            <div class="portfolio__project">
              <div className="project__desc">
                <h2>Procorlab</h2>
                <p>
                  <span>MERN</span> project done for Rally and motorsport content and media. <span>MERN</span> project
                  done for Rally and motorsport content and media.
                </p>
                <div className="project__tecnologies">
                  <img
                    className="stack"
                    src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg"
                    alt="react"
                  />
                  <img
                    className="stack"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="javascript"
                  />
                  <img
                    className="stack"
                    src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png"
                    alt="node js"
                  />
                  <img
                    className="stack"
                    src="https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg"
                    alt="Axios"
                  />
                  <img
                    className="stack"
                    src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png"
                    alt="mongo db"
                  />
                </div>
              </div>
              <div className="project__image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/527c03e4e4b03247a686bb74/1495663912038-GL0LA6795260JW76QPPR/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/B84I5421-2A.JPG?format=1500w"
                  alt="wavemaps"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="first__section" style={{ backgroundColor: "#dee1e5" }}>
          <Container>
            <div class="portfolio__project">
              <div className="project__desc">
                <h2>Nemeson</h2>
                <p>
                  <span>MERN</span> project done for Rally and motorsport content and media. <span>MERN</span> project
                  done for Rally and motorsport content and media.
                </p>
                <div className="project__tecnologies">
                  <img
                    className="stack"
                    src="https://axaguildev.github.io/react-toolkit/latest/storybook/images/react.svg"
                    alt="react"
                  />
                  <img
                    className="stack"
                    src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                    alt="javascript"
                  />
                  <img
                    className="stack"
                    src="https://blog.hostdime.com.co/wp-content/uploads/nodejs-servidor.png"
                    alt="node js"
                  />
                  <img
                    className="stack"
                    src="https://symbols.getvecta.com/stencil_74/148_axios-icon.351c8889a7.jpg"
                    alt="Axios"
                  />
                  <img
                    className="stack"
                    src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png"
                    alt="mongo db"
                  />
                </div>
              </div>
              <div className="project__image">
                <img src="https://nemesonone.es/assets/Renderagua.png" alt="nemeson" />
              </div>
            </div>
          </Container>
        </section>
      </section>
    </div>

    // <>
    //   <section
    //     className="first-section"
    //     // style={{ backgroundImage: `url(https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)` }}
    //   >
    //     <Container as="section">
    //       <Row>
    //         <Col md={6}>
    //           <div className="first-item">
    //             <Typewriter
    //               onInit={(typewriter) => {
    //                 typewriter
    //                   .typeString(`<h1>Carlos Prado<h1>`)
    //                   .start()
    //                   .callFunction(() => {
    //                     setReady(true);
    //                   });
    //               }}
    //             />
    //             {ready && (
    //               <Typewriter
    //                 options={{
    //                   strings: "<h2>Front-end web developer based in Madrid, Spain<h2>",
    //                   autoStart: true,
    //                   cursorClassName: "Typewriter__cursor",
    //                 }}
    //               />
    //             )}
    //             {/* </div>
    //           <div style={{ marginBottom: 100 }}> */}
    //             <Link to="/about">
    //               <Button className="btn">About & Skills</Button>
    //             </Link>
    //             <Link to="/portfolio">
    //               <Button className="outline-btn">Portfolio</Button>
    //             </Link>
    //           </div>
    //         </Col>
    //         <Col md={6}>
    //           <img src={yo} alt="me" />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </section>
    //   <section>
    //     <div className="bottom-carousel">
    //       <Container>
    //         <h1 style={{ margin: "100px 0" }}>Projects</h1>
    //         <Row>
    //           <Col md={4} className="project-card">
    //             <Card>
    //               <Card.Img
    //                 variant="top"
    //                 src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/01/26/15484986822524.jpg"
    //                 alt="aps"
    //               />
    //               <Card.Body>
    //                 <h3>APS Racing</h3>
    //                 <Link to="/portfolio">
    //                   <Button className="btn-card">Portfolio</Button>
    //                 </Link>
    //               </Card.Body>
    //             </Card>
    //           </Col>
    //           <Col md={4} className="project-card">
    //             <Card>
    //               <Card.Img
    //                 variant="top"
    //                 src="http://s858556938.mialojamiento.es/static/media/fondoHome.0cc0296f.png"
    //                 alt="cperezart"
    //               />
    //               <Card.Body>
    //                 <h3>C Perez Art</h3>
    //                 <Link to="/portfolio">
    //                   <Button className="btn-card">Portfolio</Button>
    //                 </Link>
    //               </Card.Body>
    //             </Card>
    //           </Col>
    //           <Col md={4} className="project-card">
    //             <Card>
    //               <Card.Img variant="top" src="https://nemesonone.es/assets/Renderagua.png" alt="nemeson" />
    //               <Card.Body>
    //                 <h3>Nemeson</h3>
    //                 <Link to="/portfolio">
    //                   <Button className="btn-card">Portfolio</Button>
    //                 </Link>
    //               </Card.Body>
    //             </Card>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   </section>
    // </>
  );
};

export default IndexPage;
