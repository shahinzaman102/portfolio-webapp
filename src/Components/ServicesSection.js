import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard
                        image={design}
                        title={'IoT & Telecommunications'}
                        paragraph={'Driven by a passion for IoT and expertise in IoT device driver development, with a year of experience in IoT technology. Aiming to excel in the telecommunications industry, where IoT is pivotal.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={design}
                            title={'Software Development'}
                            paragraph={'The knowledge and experience in software development ensure effective collaboration with teams, providing confidence in contributing to and communicating about projects within the company.'}
                        />
                    </div>
                    {/* <ServiceCard
                        image={design}
                        title={'Web Development'}
                        paragraph={''}
                    /> */}
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
