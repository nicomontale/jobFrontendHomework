import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import img1 from '../components/react-me.png';
import {Link} from 'react-router-dom';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('E\' stato inserito un nome: ' + this.state.value);
        event.preventDefault();
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
                            <form style={{borderRadius: '20px', width:'200%', height: '450%'}} onSubmit={this.handleSubmit}>
                           
        <label>
         
          <input placeholder="Email..." style={{marginTop:'10px'}} type="text" value={this.state.value} onChange={this.handleChange} />
          
        <textarea placeholder="Contact me.."  type="text" />
        <input style={{marginTop:'10px',backgroundColor: "#944e03", color: 'white'}} type="submit" value="Submit" />
        </label>
      </form>
      
                        
                    </div>
                </Cell>
                </div>
            </Grid>
      
        )
    }
}
