import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Experience extends Component {

    render() {
        const { startYear, endYear, jobName, jobDescription } = this.props.experience;
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{startYear}-{endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{ marginTop: '0px' }} >{jobName}</h4>
                        <p>{jobDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Experience;