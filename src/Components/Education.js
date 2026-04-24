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
                        year={'2018 - 2026'}
                        title={'BSc in Computer Science & Engineering'}
                        subTitle={'Bangladesh Open University'}
                        text={'Telecommunication, Structured Programming (C), Data-Structures, Algorithms, OOP (Java/C++), Operating System, Electronic Device and Circuits, Digital Logic Design, E-commerce, Technical Writing and Seminar, Professional Ethics and Cyber Law etc.'}
                    />
                    <ResumeItem
                        year={'2014 - 2016'}
                        title={'Higher Secondary School Graduation'}
                        subTitle={'Government Laboratory High School'}
                        details={'Result: First Class'}
                        text={'Information and Communication Technology (ICT), Physics, Chemistry, Biology, Higher Mathematics etc.'}
                    />
                    <ResumeItem
                        year={'2005 - 2014'}
                        title={'Secondary School Graduation'}
                        subTitle={'Wazuddin High School'}
                        details={'Result: First Class'}
                        text={'Physics, Chemistry, General Mathematics, Biology, Higher Mathematics, History etc.'}
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
