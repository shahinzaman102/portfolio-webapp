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
                        title={'Problem Solving'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'IoT (Internet of Things)'}
                        width={'25%'}
                        text={'25%'}
                    />
                    <ProgressBar
                        title={'IoT Device Driver Development'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Data Structures & Algorithms'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Debugging'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Go'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'JavaScript'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Python'}
                        width={'30%'}
                        text={'30%'}
                    />
                    <ProgressBar
                        title={'Telecommunications'}
                        width={'5%'}
                        text={'5%'}
                    />
                    <ProgressBar
                        title={'UX/UI Design'}
                        width={'20%'}
                        text={'20%'}
                    />
                    <ProgressBar
                        title={'Frontend development'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Backend Development'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Software Testing'}
                        width={'15%'}
                        text={'15%'}
                    />
                    <ProgressBar
                        title={'Cloud & DevOps'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Linux'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'Embedded System'}
                        width={'20%'}
                        text={'20%'}
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
