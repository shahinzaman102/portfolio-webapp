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
                        title={'Web App Development'}
                        paragraph={'I love to work with Microservice acrhitecture. Microservice apps are very efficient and resilient that is I love to do it.'}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={design}
                            title={'Cloud Service'}
                            paragraph={'I have quite knowledge working with Amazon Web Services and Google Cloud Platform. Hopefully I will do more works in near future.'}
                        />
                    </div>
                    <ServiceCard
                        image={design}
                        title={'Telecommunications'}
                        paragraph={'I am passionate about iOT products hopefully in future I will work with cloud computing and iot products to contribute to the Telecommunication Industry.'}
                    />
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
