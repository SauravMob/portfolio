import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
    src: "../../public/LondrinaOutline.ttf"
})

const Home = () => {
    return (
        <div
            id="home"
            className='w-full min-h-[75vh] sm:min-h-[90vh] grid grid-cols-3 gap-4'
        >
            <div className='p-16 col-span-2 my-auto'>
                <button className='absolute left-0 rotate-90 top-72'>Scroll</button>
                <span className='absolute left-3 rotate-90 bottom-72 transition translate-y-4'>{">>"}</span>
                <p className='font-semibold text-7xl text-gray-150'>Hey,</p>
                <div className='font-semibold text-7xl text-gray-150 my-8'>I'm
                    <span className={`${myFont.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>S</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>u</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>r</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>v</span>
                    <span className={`${myFont.className} ml-4 transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>U</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>p</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>d</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>h</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>y</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>a</span>
                    <span className={`${myFont.className} transition ease-in-out hover:scale-125 hover:text-blue-500 duration-150 inline-block`}>y</span>
                    ,</div>
                <p className='font-semibold text-7xl text-gray-150'>Software Developer</p>
                <p className='font-semibold text-3xl text-gray-600 ml-2 mt-4'>Full Stack Developer</p>
            </div>
            <div className='flex items-center justify-center col-span-1'>
                <div className='bg-gray-400 h-96 w-96 rounded-full'>

                </div>
            </div>
        </div>
    )
}

export default Home