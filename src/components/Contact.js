import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import img1 from '../components/img/react-me.png';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ name: event.target.value, email: event.target.value });
  }


  render() {
    return (

      <Grid className="landing-grid">
        <div className="login">
          <Cell col={12} style={{ position: "initial" }}>
            <Link to="./resume"><img src={img1}
              alt="avatar"
              className="avatar-image" /></Link>

            <h2 style={{ color: 'white', fontFamily: 'Roboto Mono,monospace' }}>Contact Me</h2>



            <div className="contact">
              {/* Linkedin */}
              <form style={{ borderRadius: '20px', width: '200%', height: '450%', textAlign:'center' }} >

                <label>
                 
                  <input placeholder="Email..." style={{ marginTop: '10px' }} type="email" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                  <textarea placeholder="Contact me.." type="text" style={{ cursor: 'pointer' }} />
                </label>
                <input style={{ marginTop: '20px', backgroundColor: "#944e03", color: 'white' }} type="submit" value="Submit" />

              </form>


            </div>
          </Cell>
        </div>
      </Grid>

    )
  }
}
