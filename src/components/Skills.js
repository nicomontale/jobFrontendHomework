import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


class Skills extends Component {
    render() {
        const {Skills, progress}= this.props.item;
        return (
            <Grid >
                <Cell tyle={{ margin: 'auto' }} col={12}>
                    <div className="meter" >{Skills} <ProgressBar style={{
                        width: '100%'
                    }} progress={progress} /></div>
                </Cell>
            </Grid>
        )
    }
}
export default Skills