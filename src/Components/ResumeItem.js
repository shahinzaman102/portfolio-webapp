import React from 'react';
import styled from 'styled-components';

function ResumeItem({ year, title, subTitle, details, text, skills, references }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                {subTitle && <h6 className="sub-title">{subTitle}</h6>}
                {details && <h6 className="details">{details}</h6>}
                <p>{text}</p>
                {skills && (
                    <div className="skills">
                        <span className="skills-label">Skills:</span>
                        {skills.map((skill, index) => (
                            <span className="skill" key={index}>{skill}</span>
                        ))}
                    </div>
                )}
                {references && (
                    <div className="references">
                        <span className="references-label">References:</span>
                        {references.map((reference, index) => (
                            <div key={index} className="reference-item">
                                <a className="reference" href={reference.url} target="_blank" rel="noopener noreferrer">{reference.url}</a>
                                {reference.description && <span className="reference-description">: {reference.description}</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ResumeItemStyled>
    );
}

const ResumeItemStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 2rem;

    .left-content {
        width: 30%;
        padding-left: 20px; /* Add padding to left */
        position: relative;
        p {
            display: inline-block;
            margin-bottom: 0;
            font-weight: bold;
            color: var(--primary-color);
        }
    }
    .right-content {
        width: 70%;
        padding-left: 2rem;
        position: relative;
        h5 {
            color: var(--primary-color);
            font-size: 1.5rem;
            padding-bottom: .4rem;
            margin-top: 0;
        }
        .sub-title {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin: 0.2rem 0 0.8rem 0; /* Add some spacing between sub-title and text */
        }
        .details {
            font-size: 0.9rem; /* Smaller font size for details */
            font-weight: 400;
            color: var(--secondary-color);
            margin: 0.2rem 0 0.8rem 0; /* Add some spacing between details and text */
        }
        p {
            word-wrap: break-word;
            margin-top: 0;
            line-height: 1.6;
            color: var(--text-color);
        }
        .skills {
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            .skills-label {
                font-weight: bold;
                margin-right: 0.5rem;
            }
            .skill {
                background-color: #e0e0e0;
                padding: 0.3rem 0.6rem;
                border-radius: 4px;
                margin: 0.2rem 0.5rem 0 0;
                font-size: 0.85rem;
                white-space: nowrap;
                transition: background-color 0.3s;
            }
            .skill:hover {
                background-color: #d0d0d0;
            }
        }
        .references {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            .references-label {
                font-weight: bold;
                margin-bottom: 0.5rem;
            }
            .reference-item {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 0.5rem;
                flex-direction: column;
                @media screen and (min-width: 421px) {
                    flex-direction: row;
                }
                .reference {
                    color: var(--primary-color);
                    margin-right: 0.5rem;
                    font-size: 0.9rem;
                    text-decoration: underline;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 80%;
                    transition: color 0.3s;
                }
                .reference:hover {
                    color: var(--primary-hover-color);
                }
                .reference-description {
                    font-size: 0.9rem;
                    color: var(--text-color);
                    margin-left: 0.5rem;
                    word-wrap: break-word;
                }
            }
        }
    }
`;

export default ResumeItem;
