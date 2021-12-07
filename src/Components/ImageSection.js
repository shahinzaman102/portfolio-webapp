import { Link } from '@material-ui/core';
import React from 'react'
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
                    I design and code beautifully simple things from scratch, and enjoy bringing ideas to life in the browser.

                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        {/* <p>Service</p> */}
                    </div>
                    <div className="info">
                        <p>: Shahin Zaman</p>
                        <p>: 23</p>
                        <p>: Bangladeshi </p>
                        <p>: English, Bangla, Hindi </p>
                        <p>: Dhaka, Bangladesh</p>
                        {/* <p>: Freelance</p> */}
                    </div>
                </div>
                <a class="download" href="/files/resume.pdf" target="_blank">
                    <PrimaryButton title={'Download Resume'} />
                </a>
            </div>
        </ImageSectionStyled>
    )
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
