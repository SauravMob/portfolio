import React from 'react'
import { hollow } from '../assets/fonts'

export const Experience = () => {
    return (
        <div
            id="experience"
            className='w-full h-screen sm:min-h-[90vh] p-16 mt-2'
        >
            <div className={`${hollow.className} flex justify-center text-6xl font-bold`}>Experience</div>

            <div className='flex justify-center mt-4'>
                <div className='p-1 bg-white h-8 rounded-t-xl'></div>
            </div>
            <div className="flex flex-row justify-center w-full h-full">
                <div className="sm:w-2/5 md:w-1/3">
                    <div className="flex flex-col mb-16 px-4 w-full h-full">
                        <h1 className="font-semibold text-md md:text-lg">
                            Software Developer
                        </h1>
                        <p className="mb-4">
                            @ Mobavenue pvt ltd.
                        </p>
                        <p className="text-sm md:text-base">
                            Worked as a full stack developer to build a DSP platform used for running campaigns and tracking the huge data of reports. Primary role includes building the apis and integrating it in frontend.
                        </p>
                        <div className="w-full">
                            <div className="border-b mt-2">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="bg-[#7efff7] rounded-full px-[8px] p-[6px]">
                        ⚙️
                    </p>
                    <div className="bg-white p-1 h-full">
                    </div>
                </div>
                <div className="flex flex-col border-3 w-[45%] sm:w-2/5 md:w-1/3">
                    <p className="px-3 py-1 text-[#feffff]">
                        Sep 2022 - Present
                    </p>
                </div>
            </div>
        </div>
    )
}
