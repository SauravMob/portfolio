import React from 'react'
import { hollow } from '../assets/fonts'

function About() {
    return (
        <div
            id="about"
            className='w-full h-screen sm:min-h-[90vh] flex items-center justify-center'
        >
            <div className='h-[500px] w-[900px] shadow-2xl rounded-2xl bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 grid grid-cols-3'>
                <div className='col-span-1 flex justify-center items-center'>
                    <div>
                        <div className={`${hollow.className} font-bold text-8xl`}>About</div>
                        <div className={`${hollow.className} font-bold text-8xl text-center mt-4`}>Me</div>
                    </div>
                </div>
                <div className='col-span-2 p-8 text-center text-xl my-auto'>
                    <div>
                        Hello! I'm delighted to introduce myself.
                    </div>
                    <div className='my-4'>
                        I’m from Mumbai and passionate about software development. With experience in both frontend and backend web applications, I have a comprehensive understanding of the full development lifecycle.
                    </div>
                    <div>
                        Over the past two years, I've had the opportunity to work with a variety of web technologies, which has significantly enriched my expertise. My curiosity drives me to continuously learn and implement new technologies, leading to the creation of impactful and innovative projects.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About