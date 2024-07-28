import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ResumeItem from '../Components/ResumeItem';

const experiences = [
    {
        company: 'SmartMakers GMBH',
        roles: [
            {
                year: 'Jul 2023 - Present',
                title: 'Werksstudent',
                details: 'Part-time - Remote',
                text: 'IoT Device Driver Development',
                skills: ['Teamwork', 'Problem Solving', 'Internet of Things', 'Driver Development', 'Go', 'JavaScript', 'Python'],
                references: [
                    { url: 'https://smartmakers.io', description: '' },
                    { url: 'https://www.linkedin.com/company/smartmakers', description: '' }
                ]
            }
        ]
    },
    {
        company: 'Upwork Inc.',
        roles: [
            {
                year: 'Jul 2022 - Aug 2022',
                title: 'Freelancer',
                details: 'Contract - Remote',
                text: 'Software Developer - Integrated a RestAPI (OpenAPI) into a Full-stack Admin panel project',
                skills: ['Problem Solving', 'Debugging', 'JavaScript', 'Node.js', 'Restful API', 'MongoDB', 'React.js'],
                references: [
                    { url: 'https://www.upwork.com/freelancers/~01fc9a88110438bd7e?viewMode=1', description: '' }
                ]
            }
        ]
    },
    {
        company: 'Apex Footwear Limited',
        roles: [
            {
                year: 'Apr 2022 - May 2022',
                title: 'Vocational Salesperson',
                details: 'Full-time - Onsite',
                text: 'Vocational Sales Representative (1 month) - in the vacation of Ramadan',
                skills: ['Teamwork', 'Time Management', 'Discipline'],
                references: [
                    { url: 'https://apex4u.com/store-locator', description: 'Apex - New Market, Dhaka' },
                    { url: 'https://www.apex4u.com/page/contact-us', description: '' }
                ]
            },
            {
                year: 'May 2018 - Jun 2018',
                title: 'Vocational Salesperson',
                details: 'Full-time - Onsite',
                text: 'Vocational Sales Representative (1 month) - in the vacation of Ramadan',
                skills: ['Teamwork', 'Time Management', 'Discipline'],
                references: [
                    { url: 'https://apex4u.com/store-locator', description: 'Apex - New Market, Dhaka' },
                    { url: 'https://www.apex4u.com/page/contact-us', description: '' }
                ]
            }
        ]
    }
];

function Experience() {
    return (
        <ExperienceStyled>
            <Title title={'Experience'} span={'experience'} />
            <InnerLayout>
                <div className="resume-content">
                    {experiences.map((experience, index) => (
                        <div key={index} className="company-group">
                            <h3 className="company-name">{experience.company}</h3>
                            {experience.roles.map((role, idx) => (
                                <ResumeItem
                                    key={idx}
                                    year={role.year}
                                    title={role.title}
                                    details={role.details}
                                    text={role.text}
                                    skills={role.skills}
                                    references={role.references}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </InnerLayout>
        </ExperienceStyled>
    );
}

const ExperienceStyled = styled.section`
    .resume-content {
        border-left: 2px solid var(--border-color);
        padding-left: 2rem;
        margin-top: 2rem;
    }

    .company-group {
        margin-bottom: 3rem;
    }

    .company-name {
        font-size: 1.8rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--border-color);
    }
`;

export default Experience;
