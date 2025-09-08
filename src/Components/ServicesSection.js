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
                        title={'Software Development'}
                        paragraph={'Skills : UX/UI, Front-end Dev, Back-end Dev, Testing, Debugging, Microservices, Cloud & DevOps, Linux. - Strong understanding of Web Engineering principles, along with in-depth knowledge of Data Structures & Algorithms.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={design}
                            title={'Device Driver Development'}
                            paragraph={'Skills: Go-based Driver Development. - Also have worked and introduced with : JavaScript, Python, SDKs, App Server, Gateway, Network Servers (LNS), LoRaWAN Sensors, and communication techs like Radio, Modbus, NB-IoT, and Cellular etc.'}
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
