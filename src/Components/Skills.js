import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'Skills'} span={'skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'IoT (Internet of Things)'}
                        width={'25%'}
                        text={'25%'}
                    />
                    <ProgressBar
                        title={'IoT Device Driver Development'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'Software Development'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'Cloud & DevOps'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'Linux'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'Problem Solving'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Data Structures & Algorithms'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'Debugging'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'Go'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'JavaScript'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'Python'}
                        width={'25%'}
                        text={'25%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    margin-bottom: 4rem; /* Add margin bottom here */
    
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
