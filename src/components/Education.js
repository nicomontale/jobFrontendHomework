import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Education extends Component {

render() {
    const {startYear, endYear, schoolName, schoolDescription}= this.props.item;
    return(
       
     <div>
     
     <Grid>
     
    
     
     <Cell col={4}>
     
     <p>{startYear}-{endYear}</p>
     </Cell>
     <Cell col={8}>
     <h4 style={{marginTop: '0px'}} >{schoolName}</h4>
     <p>{schoolDescription}</p>
     
     </Cell>
        
     
     </Grid>
     </div>
    
    )
} 
}
export default Education;