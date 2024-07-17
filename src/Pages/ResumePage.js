import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Experience from '../Components/Experience';
import Education from '../Components/Education';

function ResumePage() {
    return (
        <MainLayout>
            <Experience />
            <Skills />
            <Education />
        </MainLayout>
    )
}

export default ResumePage
