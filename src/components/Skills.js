import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';


class Skills extends Component {
    render() {
        return(
            <Grid >
            <Cell tyle={{ margin:'auto'}} col={12}>
            <div className="meter" >{this.props.Skills} <ProgressBar  style= {{ width: '100%'
           }}  progress={this.props.progress}/></div>
            </Cell>
            </Grid>
        )
    }
}
export default Skills