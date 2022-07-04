import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2018 - 2023'}
                        title={'BSc in Computer Science & Engineering'}
                        subTitle={'Bangladesh Open University'}
                        text={'I have learned about Structured Programming, Data-Structures, Algorithms, OOP and Software Engineering (Ongoing..).'}
                    />
                    <ResumeItem
                        year={'2014 - 2016'}
                        title={'Higher Secondary School Graduation'}
                        subTitle={'Government Laboratory High School'}
                        text={'I have learned about Math, Physics, Chemistry, Biology & some General subjects like Social Science, Literature etc.'}
                    />
                    <ResumeItem
                        year={'2005 - 2014'}
                        title={'Secondary School Graduation'}
                        subTitle={'Wazuddin High School'}
                        text={'I have learned about Math, Physics, Chemistry, Biology & some General subjects like Social Science, Literature etc.'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
