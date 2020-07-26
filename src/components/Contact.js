import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import img1 from '../components/react-me.png';
import {Link} from 'react-router-dom';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sriyank.siddhartha@gmail.com',
    pass: 'xxxx'
  }
});

var mailOptions = {
  from: 'sriyank.siddhartha@gmail.com',
  to: 'smartherd@gmail.com, sriyank@smartherd.com',
  subject: 'Sending Email using Node.js',
  text: `Hi Smartherd, thank you for your nice Node.js tutorials.
          I will donate 50$ for this course. Please send me payment options.`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email:''};
    
        this.handleChange = this.handleChange.bind(this);
        
      }
    
      handleChange(event) {
        this.setState({name: event.target.value, email: event.target.value});
      }
    
     
    render() {
        return (
            
            <Grid  className="landing-grid">
            <div className="login">
                <Cell col={12} style={{position: "initial"}}>
                <Link to="./resume"><img src={img1}
                        alt="avatar"
                        className="avatar-image"/></Link>
                   
                        <h2 style={{color:'white',fontFamily: 'Roboto Mono,monospace'}}>Contact Me</h2>

                        
                       
                        <div className="contact">
                            {/* Linkedin */}
                            <form action="nicola.montaleone95@gmail.com" method="post" encType="text/plain" style={{borderRadius: '20px', width:'200%', height: '450%'}} >
                           
        <label>
        <input placeholder="Name..." style={{marginTop:'10px'}} type="text" value={this.state.value} onChange={this.handleChange} />
          <input placeholder="Email..." style={{marginTop:'10px'}} type="email" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
        <textarea placeholder="Contact me.."  type="text"  style={{cursor: 'pointer'}}/>
        </label>
        <input style={{marginTop:'10px', color: 'white'}} type="submit" value="Submit" />
        
      </form>
      
                        
                    </div>
                </Cell>
                </div>
            </Grid>
      
        )
    }
}
