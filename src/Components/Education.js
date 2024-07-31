import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ResumeItem from './ResumeItem';

function Education() {
    return (
        <ResumeStyled>
            <Title title={'Education'} span={'education'} />
            <InnerLayout>
                <div className="resume-content">
                    <ResumeItem
                        year={'2018 - 2024'}
                        title={'BSc in Computer Science & Engineering'}
                        subTitle={'Bangladesh Open University'}
                        text={'Electronic Device and Circuits, Digital Logic Design, Microprocessors and Microcontrollers, Computer Peripherals and Interfacing, Computer Graphics, Operating System, E-commerce, Technical Writing and Seminar, Professional Ethics and Cyber Law, Telecommunication, Structured Programming, Data-Structures, Algorithms, Object Oriented Programming (OOP) etc.'}
                    />
                    <ResumeItem
                        year={'2014 - 2016'}
                        title={'Higher Secondary School Graduation'}
                        subTitle={'Government Laboratory High School'}
                        details={'Result: First Class'}
                        text={'Higher Mathematics, Physics, Chemistry, Biology, Information and Communication Technology (ICT) etc.'}
                    />
                    <ResumeItem
                        year={'2005 - 2014'}
                        title={'Secondary School Graduation'}
                        subTitle={'Wazuddin High School'}
                        details={'Result: First Class'}
                        text={'Higher Mathematics, General Mathematics, Physics, Chemistry, Biology, Social Science, History, Literature etc.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }

    .resume-content {
        border-left: 2px solid var(--border-color);
        padding-left: 2rem; /* Add padding to left */
        margin-top: 2rem;
    }
`;

export default Education;
