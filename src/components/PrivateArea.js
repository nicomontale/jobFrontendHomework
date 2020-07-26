import React, { Component } from 'react';
import { Grid, Cell, Button, Icon } from 'react-mdl';
import Education from './Education';
import Skills from './Skills';
import img1 from '../components/img/react-me.png';
import Tappable from 'react-tappable/lib/Tappable';
import { CurriculumConsumer } from './context'
class PrivateArea extends Component {
    state = {
        openDialogEditEducation: false,
        openDialogEditExperience: false,
        openDialogEditSkills: false,
        openDialogChange: false
    }
    ShowEditEducation = (openDialogEditEducation, openDialogEditExperience, openDialogEditSkills) => {
        if (openDialogEditEducation === true && openDialogEditExperience === false && openDialogEditSkills === false) {
            return (
                (
                    <dialog open
                        className="modal"


                        onClick={this.handleShowEditEducation}
                    >
                        <div style={{ width: '330px', height: '450px' }}>
                            <label>
                                <textarea placeholder="Date.." type="text" style={{ cursor: 'pointer', height: '20px', marginTop: '20px' }} />
                                <textarea placeholder="Place.." type="text" style={{ cursor: 'pointer', height: '50px', marginTop: '20px' }} />
                                <textarea placeholder="Certificate.." type="text" style={{ cursor: 'pointer', height: '50px', marginTop: '20px' }} />
                                <input style={{ marginTop: '10px', backgroundColor: "#944e03", color: 'white', marginBottom: '60px' }} type="submit" value="Submit" onClick={this.handleShowEditEducation} />
                            </label>
                        </div>
                    </dialog>
                )

            )
        }
        if (openDialogEditEducation === false && openDialogEditExperience === true && openDialogEditSkills === false) {
            return (
                (
                    <dialog open
                        className="modal"


                        onClick={this.handleShowEditExperience}
                    >
                        <div style={{ width: '300px', height: '450px' }}>
                            <label>
                                <textarea placeholder="Date.." type="text" style={{ cursor: 'pointer', height: '20px', marginTop: '20px' }} />
                                <textarea placeholder="Place.." type="text" style={{ cursor: 'pointer', height: '50px', marginTop: '20px' }} />
                                <textarea placeholder="Certificate.." type="text" style={{ cursor: 'pointer', height: '50px', marginTop: '20px' }} />
                                <input style={{ marginTop: '10px', backgroundColor: "#944e03", color: 'white', marginBottom: '60px' }} type="submit" value="Submit" onClick={this.handleShowEditEducation} />
                            </label>
                        </div>
                    </dialog>
                )

            )
        }
        if (openDialogEditEducation === false && openDialogEditExperience === false && openDialogEditSkills === true) {
            return (
                (
                    <dialog open
                        className="modal"


                        onClick={this.handleShowEditSkills}
                    >
                        <div style={{ width: '300px', height: '450px' }}>
                            <label>
                                <textarea placeholder="Skill.." type="text" style={{ cursor: 'pointer', height: '20px', marginTop: '20px' }} />
                                <textarea placeholder="%.." type="text" style={{ cursor: 'pointer', height: '20px', marginTop: '20px' }} />
                                <input style={{ marginTop: '10px', backgroundColor: "#944e03", color: 'white', marginBottom: '60px' }} type="submit" value="Submit" onClick={this.handleShowEditEducation} />
                            </label>
                        </div>
                    </dialog>
                )

            )
        }
    }

    showDialogChange = (openDialogChange) => {
        if (openDialogChange) {
            return (
                <dialog open
                    className="modal"

                    style={{ flexDirection: 'column' }}
                    onClick={this.handleShowEditChange}
                >
                    <div style={{ width: '170px', height: '250px', }}>


                        <input style={{ marginTop: '20px', backgroundColor: "#944e03", color: 'white', height: '60px', width: '100px' }} type="submit" value="Change" onClick={this.handleShowEditChange} />
                        <div></div>

                        <input style={{ marginTop: '60px', backgroundColor: "#944e03", color: 'white', height: '60px', width: '100px' }} type="submit" value="Delete" onClick={this.handleShowEditChange} />

                    </div>
                </dialog>
            )
        }

    }

    handleShowEditEducation = () => {
        this.setState({ openDialogEditEducation: !this.state.openDialogEditEducation });
        console.log('cliked');
    };
    handleShowEditExperience = () => {
        this.setState({ openDialogEditExperience: !this.state.openDialogEditExperience });
        console.log('cliked');
    };
    handleShowEditSkills = () => {
        this.setState({ openDialogEditSkills: !this.state.openDialogEditSkills });
        console.log('cliked');
    };

    handleShowEditChange = () => {
        this.setState({ openDialogChange: !this.state.openDialogChange });
        console.log('clicked')
    }

    render() {
        const { openDialogEditEducation, openDialogEditExperience, openDialogEditSkills, openDialogChange } = this.state;
        return (
            <div>
                <Grid style={{ backgroundColor: ' #fc9c35' }}>
                    <Cell col={4}>
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

                                        return (
                                            <>
                                                <div style={{ textAlign: 'right' }} onClick={this.handleShowEditChange}>

                                                    <i class="fa fa-cog" style={{ fontSize: '20px' }} aria-hidden="true">
                                                    </i>

                                                </div>
                                                <Education key={item.id} item={item} />
                                            </>
                                        )
                                    })

                                }
                            }
                        </CurriculumConsumer>

                        <div style={{ textAlign: 'center' }}>
                            <Tappable onTap={this.handleShowEditEducation} style={{ cursor: 'pointer' }}>
                                <Button className="privatebutton" style={{ backgroundColor: '#fc9c35' }}>
                                    <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                        <Icon style={{ textAlign: 'center' }} name="add" />
                                    </div>
                                </Button>
                            </Tappable>
                        </div>

                        <hr style={{ borderTop: '4px solid black' }} />

                        <h2 style={{ fontFamily: 'Roboto Mono,monospace' }}>Experience</h2>

                        <CurriculumConsumer>
                            {
                                value => {
                                    return value.education.map(item => {

                                        return (
                                            <>
                                                <div style={{ textAlign: 'right' }} onClick={this.handleShowEditChange}>

                                                    <i class="fa fa-cog" style={{ fontSize: '20px' }} aria-hidden="true">
                                                    </i>

                                                </div>
                                                <Education key={item.id} item={item} />
                                            </>
                                        )
                                    })

                                }
                            }
                        </CurriculumConsumer>

                        <div style={{ textAlign: 'center' }}>
                            <Tappable onTap={this.handleShowEditExperience} style={{ cursor: 'pointer' }}>
                                <Button className="privatebutton" style={{ backgroundColor: '#fc9c35' }}>
                                    <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                        <Icon style={{ textAlign: 'center' }} name="add" />
                                    </div>
                                </Button>
                            </Tappable>
                        </div>

                        <hr style={{ borderTop: '4px solid black' }} />
                        <h2 style={{ fontFamily: 'Roboto Mono,monospace' }}>Skills</h2>
                        <div style={{ textAlign: 'right' }} onClick={this.handleShowEditChange}>
                            <i class="fa fa-cog" style={{ fontSize: '20px' }} aria-hidden="true">
                            </i>
                        </div>
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
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Tappable onTap={this.handleShowEditSkills} style={{ cursor: 'pointer' }}>
                                <Button className="privatebutton" style={{ backgroundColor: '#fc9c35' }}>
                                    <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                        <Icon style={{ textAlign: 'center' }} name="add" />
                                    </div>
                                </Button>
                            </Tappable>
                        </div>
                    </Cell>

                    {this.ShowEditEducation(openDialogEditEducation, openDialogEditExperience, openDialogEditSkills)}
                    {this.showDialogChange(openDialogChange)}
                </Grid>


            </div>
        )
    }
}
export default PrivateArea;