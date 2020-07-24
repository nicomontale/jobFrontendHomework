import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import img1 from '../components/react-me.png';
class Resume extends Component {
    render() {
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
        </Cell>
        
        
        </Grid>
        
        
        </div>
        )
    }
}
export default Resume;