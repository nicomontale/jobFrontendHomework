import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import img1 from '../components/img/react-me.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Educations, Experiences } from './data';
import { CurriculumConsumer } from './context';
class Resume extends Component {
    state = {
        education: Educations,
        experience: Experiences
    }
    render() {

        Aos.init({})
        return (

            <div>
                <Grid style={{ backgroundColor: ' #fc9c35' }}>
                    <Cell data-aos="fade-right" data-aos-duration="1000" col={4}>
                        <div style={{ textAlign: 'center', }}>
                            <img src={img1}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />

                        </div>
                        <h2 style={{ paddingTop: '1em', fontFamily: 'Roboto Mono,monospace' }}> Nicola Montaleone</h2>
                        <h4 style={{ color: 'black', fontSize: '2em', fontFamily: 'Roboto Mono,monospace' }}>Junior  developer</h4>
                        <hr style={{ borderTop: '4px solid black', width: '50%' }} />
                        <p>Highly reliable and passionate junior developer with a solid work ethics. Sport is one of my worth-mentioning strengths: I enjoy playing both basketball and soccer during my free time. I am deeply motivated, and hold great sense of initiative. Travelling is one thing I would never give up on: discovering something new every day is what makes me willing to improve myself and tirelessly push my boundaries! </p>
                        <hr style={{ borderTop: '4px solid black', width: '45%' }} />
                        <h5 style={{ paddingTop: '1em', fontFamily: 'Roboto Mono,monospace' }}>Address</h5>
                        <p>Via Ozieri, 17</p>
                        <p>Turin, IT</p>
                        <h5 style={{ paddingTop: '1em', fontFamily: 'Roboto Mono,monospace' }}>Email</h5>
                        <p><a style={{ color: "black" }} href="mailto:nicola.montaleone95@gmail.com" target="_top">Email: nicola.montaleone95@gmail.com</a></p>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2 style={{ paddingTop: '1em', fontFamily: 'Roboto Mono,monospace' }}>Education</h2>
                        <CurriculumConsumer>
                            {
                                value => {
                                    return value.education.map(item => {

                                        return <Education key={item.id} item={item} />
                                    })

                                }
                            }
                        </CurriculumConsumer>


                        <hr style={{ borderTop: '4px solid black' }} />

                        <h2 style={{ fontFamily: 'Roboto Mono,monospace' }}>Experience</h2>
                        <CurriculumConsumer>
                            {
                                value => {
                                    return value.experience.map(item => {

                                        return <Experience key={item.id} experience={item} />
                                    })

                                }
                            }
                        </CurriculumConsumer>
                        <hr style={{ borderTop: '4px solid black' }} />
                        <h2 style={{ fontFamily: 'Roboto Mono,monospace' }}>Skills</h2>
                        <Skills
                            Skills="JAVA         "
                            progress={80}
                        />
                        <Skills
                            Skills="REACT        "
                            progress={65}
                        />
                        <Skills
                            Skills="REACT NATIVE"
                            progress={60}
                        />
                        <Skills
                            Skills="MySQL        "
                            progress={75}
                        /> <Skills
                            Skills="ECLIPSE      "
                            progress={75}
                        />
                        <Skills
                            Skills="VISUAL STUDIO"
                            progress={60}
                        />

                        <Skills
                            Skills="BACK-END     "
                            progress={60}
                        />
                        <Skills
                            Skills="FRONT-END"
                            progress={60}
                        />
                    </Cell>


                </Grid>


            </div>
        )
    }
}
export default Resume;