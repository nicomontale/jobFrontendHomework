import React, {Component} from 'react';
import {Grid, Cell, Button, Icon} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import img1 from '../components/react-me.png';
import Tappable from 'react-tappable/lib/Tappable'
class PrivateArea extends Component {
   state = {
    openDialogEditEducation:false
   }
    ShowEditEducation= (openDialogEditEducation)=> {
        if(openDialogEditEducation) {
        return (
            (
                <dialog open
                    className="modal"


                    onClick={this.handleShowEditEducation}
                >
                <div style={{ width:'300px', height:'420px' }}>
                <label>
                <textarea placeholder="Contact me.."  type="text"  style={{cursor: 'pointer', height:'50px', marginTop: '20px'}}/>
                <textarea placeholder="Contact me.."  type="text"  style={{cursor: 'pointer', height:'50px', marginTop: '20px'}}/>
                <input style={{marginTop:'10px',backgroundColor: "#944e03", color: 'white', marginBottom: '60px'}} type="submit" value="Submit" onClick={this.handleShowEditEducation}/>
                </label>
                </div>
                </dialog>
            )
        
        )
            }
    }
    handleShowEditEducation = () => {
        this.setState({ openDialogEditEducation: !this.state.openDialogEditEducation });
        console.log('cliked');
    };
    render() {
        const {openDialogEditEducation}=this.state;
        return(
        <div>
        <Grid style={{backgroundColor: ' #fc9c35'}}>
        <Cell col={4}> 
        <div  style={{textAlign:'center', }}>
        <img src={img1}
        alt="avatar"
        style={{height:'200px'}}
        />
        
        </div>
        <h2 style={{paddingTop: '1em', fontFamily: 'Roboto Mono,monospace' }}> Nicola Montaleone</h2>
        <h4 style={{color: 'black', fontSize:'2em',fontFamily: 'Roboto Mono,monospace' }}>Junior  developer</h4>
        <hr style={{borderTop: '4px solid black', width: '50%'}}   />
        <p>Highly reliable and passionate junior developer with a solid work ethics. Sport is one of my worth-mentioning strengths: I enjoy playing both basketball and soccer during my free time. I am deeply motivated, and hold great sense of initiative. Travelling is one thing I would never give up on: discovering something new every day is what makes me willing to improve myself and tirelessly push my boundaries! </p>
        <hr style={{borderTop: '4px solid black', width: '45%'}}   />
        <h5 style={{paddingTop: '1em', fontFamily: 'Roboto Mono,monospace'}}>Address</h5>
        <p>Via Ozieri, 17</p>
        <p>Turin, IT</p>
        <h5 style={{paddingTop: '1em',fontFamily: 'Roboto Mono,monospace'}}>Email</h5>
        <p><a style={{ color: "black"}} href="mailto:nicola.montaleone95@gmail.com" target="_top">Email: nicola.montaleone95@gmail.com</a></p>
        </Cell>
        <Cell col={8} className="resume-right-col">
        <h2 style={{ paddingTop: '1em', fontFamily: 'Roboto Mono,monospace' }}>Education</h2>
        
       
        <Education 
        startYear= {2020}
        
        schoolName="PCM"
        schoolDescription="Junior Java Developer" />
        <Education 
        startYear= {2019}
        endYear={2020}
        schoolName="Talent Garden Innovation School"
        schoolDescription="Frontend Master (React)" />
        

        <Education 
        startYear= {2014}
        endYear={2019}
        schoolName="Politecnico Di Torino"
        schoolDescription="Bachelor's degree, Management Engineering (IT branch)" />

        <Education 
        startYear= {2009}
        endYear={2014}
        schoolName="Liceo Scientifico Galileo Ferraris"
        schoolDescription="Diploma" />
        <div style={{textAlign: 'center'}}>
        <Tappable onTap={this.handleShowEditEducation} style={{ cursor: 'pointer' }}>
        <Button  className="privatebutton" style={{backgroundColor: '#fc9c35'}}>
        <div  style={{margin:'0 auto', textAlign:'center'}}>
        <Icon style={{ textAlign:'center'}}  name="add" />
        </div>
    </Button>
    </Tappable>
        </div>

        <hr style={{borderTop:'4px solid black'}} />

        <h2 style={{fontFamily: 'Roboto Mono,monospace' }}>Experience</h2>
        <Experience 
        startYear={2020}
        jobsName="Junior Developer"
        jobsDescriptions="Back-end Developer"
        />

        <Experience 
        startYear={2013}
        endYear={2016}
        jobsName="Junior Social Media Manager"
        jobsDescriptions="With some of my friends we tried to start a clothing brand."
        />
        <div style={{textAlign: 'center'}}>
        <Button className="privatebutton" style={{backgroundColor: '#fc9c35'}}>
        <div  style={{margin:'0 auto', textAlign:'center'}}>
        <Icon style={{ textAlign:'center'}}  name="add" />
        </div>
    </Button>
        </div>
        
        <hr style={{borderTop:'4px solid black'}} />
        <h2 style={{fontFamily: 'Roboto Mono,monospace' }}>Skills</h2>
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
        <div style={{textAlign: 'center', marginTop:'20px'}}>
        <Button className="privatebutton" style={{backgroundColor: '#fc9c35'}}>
        <div  style={{margin:'0 auto', textAlign:'center'}}>
        <Icon style={{ textAlign:'center'}}  name="add" />
        </div>
    </Button>
        </div>
        </Cell>
        
        {this.ShowEditEducation(openDialogEditEducation)}
        </Grid>
        
        
        </div>
        )
    }
}
export default PrivateArea;