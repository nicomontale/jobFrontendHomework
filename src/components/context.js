import React, { Component } from 'react';

import { Educations, Experiences,SkillsData } from './data';
const CurriculumContext = React.createContext();




class CurriculumProvider extends Component {
    state = {
        education: Educations,
        experience: Experiences,
        skills : SkillsData
    }


    render() {
        return (
            <CurriculumContext.Provider value={{ ...this.state }}>
                {this.props.children}


            </CurriculumContext.Provider>
        )
    }

}

const CurriculumConsumer = CurriculumContext.Consumer;

export { CurriculumConsumer, CurriculumProvider };