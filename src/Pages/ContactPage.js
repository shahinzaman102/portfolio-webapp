import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactItem from '../Components/ContactItem';
import emailjs from 'emailjs-com';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_d3wxwdg", "template_lw9ms9q", formRef.current, "user_3LrQOEJHSxzFC1Qs54SSt"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit} className="form">
                            <div className="form-field">
                                <label htmlFor="name">Enter your name*</label>
                                <input type="text" id="name" name="user_name" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter your email*</label>
                                <input type="email" id="email" name="user_email" required />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Enter your subject</label>
                                <input type="text" id="subject" name="user_subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="textarea">Enter your Message*</label>
                                <textarea id="textarea" cols="30" rows="10" name="message" required></textarea>
                            </div>
                            <div className="button">
                                <button className="f-button">
                                    <PrimaryButton title={'Send Email'} />
                                </button>
                                {done && <span>Thank you...</span>}
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} /*cont1={'+880-1729117866'} cont2={''}*/ />
                        <ContactItem title={'Email'} icon={email} cont1={'shahinzaman102@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'Nabinagar Main Road, Kamrangirchar, Dhaka-1211'} cont2={'Bangladesh'} />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    );
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input, textarea{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    padding: .8rem 1rem;
                }
            }
            .button{
                margin-top: 1.15rem;
                width: 100%;
                span{
                    margin-left: 10px;
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default ContactPage;
