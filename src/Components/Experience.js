import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ResumeItem from '../Components/ResumeItem';

function Experience() {
    return (
        <ExperienceStyled>
            <Title title={'Experience'} span={'experience'} />
            <InnerLayout>
                <div className="resume-content">
                    <ResumeItem
                        year={'Jul 2023 - Present'}
                        title={'Werksstudent'}
                        subTitle={'SmartMakers GMBH'}
                        text={'IoT Device Driver Development'}
                        skills={['Teamwork', 'Problem Solving', 'Internet of Things', 'Driver Development', 'Go', 'JavaScript', 'Python']}
                        references={[
                            { url: 'https://smartmakers.io', description: '' },
                            { url: 'https://www.linkedin.com/company/smartmakers', description: '' }
                        ]}
                    />
                    <ResumeItem
                        year={'Jul 2022 - Aug 2022'}
                        title={'Freelancer'}
                        subTitle={'Upwork Inc.'}
                        text={'Software Developer (1 month) - Integrated a RestAPI (OpenAPI) into a Full-stack Admin panel project'}
                        skills={['Problem Solving', 'Debugging', 'JavaScript', 'Node.js', 'Restful API', 'MongoDB', 'React.js']}
                        references={[
                            { url: 'https://www.upwork.com/freelancers/~01fc9a88110438bd7e?viewMode=1', description: '' }
                        ]}
                    />
                    <ResumeItem
                        year={'Apr 2022 - May 2022'}
                        title={'Vocational Salesperson'}
                        subTitle={'Apex Footwear Limited'}
                        text={'Vocational Sales Representative (1 month) - in the vacation of Ramadan'}
                        skills={['Teamwork', 'Time Management', 'Discipline']}
                        references={[
                            { url: 'https://apex4u.com/store-locator', description: 'Apex - New Market, Dhaka' },
                            { url: 'https://www.apex4u.com/page/contact-us', description: '' }
                        ]}
                    />
                    <ResumeItem
                        year={'May 2018 - Jun 2018'}
                        title={'Vocational Salesperson'}
                        subTitle={'Apex Footwear Limited'}
                        text={'Vocational Sales Representative (1 month) - in the vacation of Ramadan'}
                        skills={['Teamwork', 'Time Management', 'Discipline']}
                        references={[
                            { url: 'https://apex4u.com/store-locator', description: 'Apex - New Market, Dhaka' },
                            { url: 'https://www.apex4u.com/page/contact-us', description: '' }
                        ]}
                    />
                </div>
            </InnerLayout>
        </ExperienceStyled>
    );
}

const ExperienceStyled = styled.section`
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

export default Experience;
