import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Shahin Zaman</span></h4>
                <p className="paragraph">
                    Passionate & Determined about Software Development, focused on leveraging foundational knowledge to engineer efficient applications. Dedicated to continuous learning and delivering clean, impactful code as a collaborative team member.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Birth</p>
                        <p>Nationality</p>
                        <p>English Proficiency</p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Shahin Zaman</p>
                        <p>: 1998</p>
                        <p>: Bangladeshi</p>
                        <p>: Fluent</p>
                        <p>: Dhaka, Bangladesh</p>
                    </div>
                </div>                
                <a className="download" href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <p className="download" rel="noopener noreferrer">
                        <PrimaryButton title={'Download Resume'} />
                    </p>
                </a>
            </div>
        </ImageSectionStyled>
    );
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection;
