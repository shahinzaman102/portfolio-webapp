import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LeetCodeIcon from '../img/leetcode.svg';
import FreeCodeCampIcon from '../img/freecodecamp.svg';
import CodeforcesIcon from '../img/codeforces.svg';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Shahin Zaman</span></h1>
                <p>
                    Passionate about IoT and Cloud Technologies, with a year of experience working on IoT applications and cloud servers. Eager to excel in the telecommunications industry, where these technologies are essential.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/shahin-zaman-036148241" target="_blank" rel="noopener noreferrer" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/shahinzaman1o2" target="_blank" rel="noopener noreferrer" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://leetcode.com/u/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-leetcode">
                        <img src={LeetCodeIcon} alt="LeetCode" />
                    </a>
                    <a href="https://codeforces.com/profile/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-codeforces">
                        <img src={CodeforcesIcon} alt="Codeforces" />
                    </a>
                    <a href="https://www.freecodecamp.org/shahinzaman102" target="_blank" rel="noopener noreferrer" className="icon i-freecodecamp">
                        <img src={FreeCodeCampIcon} alt="FreeCodeCamp" />
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
                width: 50px; /* Ensuring the circle size is consistent */
                height: 50px; /* Ensuring the circle size is consistent */

                &:not(:last-child) {
                    margin-right: 1rem;
                }

                svg {
                    margin: .5rem;
                }

                img {
                    width: 70%;  /* Slightly smaller size for SVG */
                    height: 70%;  /* Ensure uniform size for SVG */
                    object-fit: contain;  /* SVG needs contain to maintain aspect ratio */
                }
            }

            /* Hover effects for specific icons */
            .i-linkedin:hover {
                border: 2px solid #0077B5;
                color: #0077B5;
            }

            .i-github:hover {
                border: 2px solid #5F4687;
                color: #5F4687;
            }

            .i-freecodecamp:hover {
                border: 2px solid #006400; /* FreeCodeCamp brand color */
                color: #006400;
            }

            .i-leetcode:hover {
                border: 2px solid #FFA116; /* LeetCode's brand color */
                color: #FFA116;
            }

            .i-codeforces:hover {
                border: 2px solid #1F8ACB; /* Codeforces brand color */
                color: #1F8ACB;
            }
        }
    }
`;

export default HomePage;
