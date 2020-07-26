import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img1 from '../components/img/react-me.png';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
class LandingPage extends Component {
    render() {
        Aos.init({})
        return (
            <div style={{ width: '100%', margin: 'auto', textAlign:'center' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <Link to="./resume"><img data-aos="zoom-in" src={img1}
                            alt="avatar"
                            className="avatar-image" /></Link>
                        <div data-aos="zoom-in" data-aos-duration="8000" className="banner-text">
                            <h2 style={{ color: 'white', fontFamily: 'Roboto Mono,monospace' }}>Junior Developer</h2>

                            <hr />
                            <p>JAVA   |    MYSQL   |   REACT     </p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/nicola-montaleone-7a3202194/" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/nicomontale" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default LandingPage;