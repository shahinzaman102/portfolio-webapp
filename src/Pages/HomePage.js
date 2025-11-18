import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GitLabIcon from '../img/gitlab.svg';
import LeetCodeIcon from '../img/leetcode.svg';
import FreeCodeCampIcon from '../img/freecodecamp.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Shahin Zaman</span></h1>
                <p>
                    Passionate & Determined about Software Development, focused on leveraging foundational knowledge to engineer efficient applications. Dedicated to continuous learning and delivering clean, impactful code as a collaborative team member.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://gitlab.com/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-gitlab">
                        <img src={GitLabIcon} alt="LeetCode" />
                    </a>
                    <a href="https://leetcode.com/u/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-leetcode">
                        <img src={LeetCodeIcon} alt="LeetCode" />
                    </a>
                    <a href="https://www.freecodecamp.org/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-freecodecamp">
                        <img src={FreeCodeCampIcon} alt="FreeCodeCamp" />
                    </a>
                    <a href="https://www.youtube.com/@shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-youtube">
                        <YouTubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;

            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                width: 50px;
                height: 50px;

                &:not(:last-child) {
                    margin-right: 1rem;
                }

                svg {
                    margin: .5rem;
                }

                img {
                    width: 70%;
                    height: 70%;
                    object-fit: contain;
                }
            }

            .i-linkedin:hover {
                border: 2px solid #0A66C2;
                color: #0A66C2;
            }

            .i-github:hover {
                border: 2px solid #FFFFFF;
                color: #FFFFFF;
            }

            .i-gitlab:hover {
                border: 2px solid #FC6D26;
                color: #FC6D26;
            }

            .i-leetcode:hover {
                border: 2px solid #FFA116;
                color: #FFA116;
            }

            .i-freecodecamp:hover {
                border: 2px solid #006400;
                color: #006400;
            }

            .i-youtube:hover {
                border: 2px solid #FF0000;
                color: #FF0000;
            }
        }
    }
`;

export default HomePage;
