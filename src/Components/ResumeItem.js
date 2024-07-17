// ResumeItem.js
import React from 'react';
import styled from 'styled-components';

function ResumeItem({ year, title, subTitle, text, skills }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
                {skills && (
                    <div className="skills">
                        <span className="skills-label">Skills :</span> {skills.map((skill, index) => (
                            <span className="skill" key={index}>{skill}</span>
                        ))}
                    </div>
                )}
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 0rem;

    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        width: 30%;
        padding-left: 20px;
        position: relative;
        flex-shrink: 0;
        p{
            display: inline-block;
            margin-bottom: 0;
        }
    }
    .right-content{
        width: 70%;
        padding-left: 2rem;
        position: relative;
        flex-shrink: 1;
        h5{
            color: var(--primary-color); /* Keep title color */
            font-size: 2rem;
            padding-bottom: .4rem;
            margin-top: 0;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 1.5rem;
            margin-top: 0;
        }
        p{
            word-wrap: break-word;
            margin-top: 0;
        }
        .skills {
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap; /* Allow skills to wrap to the next line */
            .skills-label {
                font-weight: bold; /* Make Skills : label bold */
                margin-right: 0.5rem; /* Adjust spacing */
            }
            .skill {
                background-color: #f0f0f0; /* Example background color */
                padding: 0.2rem 0.5rem;
                border-radius: 4px;
                margin: 0.2rem 0.5rem 0 0; /* Adjust margins to ensure proper spacing */
                font-size: 0.9rem;
                white-space: nowrap; /* Prevent line breaks within skill items */
            }
        }
    }
`;

export default ResumeItem;
