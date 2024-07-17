import React, { useState } from 'react'
import localFont from 'next/font/local'
import frontendImg from '@/public/frontend.webp'
import backendImg from '@/public/backend.webp'
import databaseImg from '@/public/database.webp'
import deploymentImg from '@/public/deployment.webp'
import mongodb from '@/public/mongodb.webp'
import reactjs from '@/public/reactjs.webp'
import mysql from '@/public/mysql.webp'
import html from '@/public/html.webp'
import css from '@/public/css.webp'
import tailwind from '@/public/tailwind.webp'
import javascript from '@/public/javascript.webp'
import java from '@/public/java.webp'
import typescript from '@/public/typescript.webp'
import git from '@/public/git.webp'
import linux from '@/public/linux.webp'
import docker from '@/public/docker.webp'
import aws from '@/public/aws.webp'
import springBoot from '@/public/spring.svg'
import redis from '@/public/redis.png'
import redux from '@/public/redux.svg'
import kafka from '@/public/kafka.png'
import nextJs from '@/public/nextJs.svg'
import bootstrap from '@/public/bootstrap.png'
import hibernate from '@/public/hibernate.svg'
import Image from 'next/image'
import Marquee from "react-fast-marquee"

const myFont = localFont({
    src: "../../public/LondrinaOutline.ttf"
})

const Skills = () => {

    const [showAll, setShowAll] = useState(false)

    return (
        <div
            id="skills"
            className='w-full h-screen sm:min-h-[90vh] p-16 mt-2'
        >
            <div className={`${myFont.className} flex justify-center text-6xl font-bold`}>Skills</div>

            <div className='flex justify-around mt-12'>
                <div className='flex items-center p-2 bg-slate-400 rounded-xl shadow-inner font-bold text-gray-700'>
                    <Image
                        src={frontendImg}
                        className='h-8 w-8 mr-2'
                        alt="FontEnd Image"
                    /> Frontend
                </div>
                <div className='flex items-center p-2 bg-slate-400 rounded-xl shadow-inner font-bold text-gray-700'>
                    <Image
                        src={backendImg}
                        className='h-8 w-8 mr-2'
                        alt="Backend Image"
                    /> Backend
                </div>
                <div className='flex items-center p-2 bg-slate-400 rounded-xl shadow-inner font-bold text-gray-700'>
                    <Image
                        src={databaseImg}
                        className='h-8 w-8 mr-2'
                        alt="Database Image"
                    /> Database
                </div>
                <div className='flex items-center p-2 bg-slate-400 rounded-xl shadow-inner font-bold text-gray-700'>
                    <Image
                        src={deploymentImg}
                        className='h-8 w-8 mr-2'
                        alt="Deployment Image"
                    /> Deployment
                </div>
            </div>

            <div className="pt-16 px-16 flex justify-evenly flex-wrap">
                {showAll ? <>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={java}
                                className="h-10 w-10"
                                alt="Java Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Java
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={springBoot}
                                className="h-10 w-10"
                                alt="SpringBoot Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Spring
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={javascript}
                                className="h-8 w-8"
                                alt="Javascript Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Javascript
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={typescript}
                                className="h-8 w-8"
                                alt="Typescript Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Typescript
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={reactjs}
                                className="h-10 w-10"
                                alt="ReactJs Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            ReactJs
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={nextJs}
                                className="h-10 w-10"
                                alt="NextJs Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            NextJs
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={mysql}
                                className="h-10 w-10"
                                alt="MySql Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            MySQL
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={mongodb}
                                className="h-10 w-10"
                                alt="MongoDB Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            MongoDB
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={html}
                                className="h-8 w-8"
                                alt="HTML Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            HTML
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={css}
                                className="h-8 w-8"
                                alt="CSS Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            CSS
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={tailwind}
                                className="h-10 w-10"
                                alt="Tailwind Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Tailwind
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={bootstrap}
                                className="h-10 w-10"
                                alt="Bootstrap Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Bootstrap
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={hibernate}
                                className="h-8 w-8"
                                alt="Hibernate Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Hibernate
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={redis}
                                className="h-10 w-10"
                                alt="Redis Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Redis
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={kafka}
                                className="h-10 w-10"
                                alt="Kafka Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Kafka
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={git}
                                className="h-10 w-10"
                                alt="Git Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Git
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={linux}
                                className="h-10 w-10"
                                alt="Linux Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Linux
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={docker}
                                className="h-10 w-10"
                                alt="Docker Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            Docker
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-12 w-12 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={aws}
                                className="h-8 w-8"
                                alt="Aws Logo"
                            />
                        </div>
                        <div className="font-bold text-white text-sm">
                            AWS
                        </div>
                    </div>
                </> : <Marquee pauseOnHover>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={mongodb}
                                className="h-16 w-16"
                                alt="MongoDB Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            MongoDB
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={reactjs}
                                className="h-16 w-16"
                                alt="ReactJs Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            ReactJs
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={nextJs}
                                className="h-16 w-16"
                                alt="NextJs Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            NextJs
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={redux}
                                className="h-16 w-16"
                                alt="Redux Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Redux
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={mysql}
                                className="h-16 w-16"
                                alt="MySql Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            MySQL
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={html}
                                className="h-16 w-16"
                                alt="HTML Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            HTML
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={css}
                                className="h-16 w-16"
                                alt="CSS Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            CSS
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={tailwind}
                                className="h-16 w-16"
                                alt="Tailwind Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Tailwind
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={bootstrap}
                                className="h-16 w-16"
                                alt="Bootstrap Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Bootstrap
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={javascript}
                                className="h-16 w-16"
                                alt="Javascript Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Javascript
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={typescript}
                                className="h-16 w-16"
                                alt="Typescript Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Typescript
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={java}
                                className="h-16 w-16"
                                alt="Java Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Java
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={springBoot}
                                className="h-16 w-16"
                                alt="SpringBoot Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Spring
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={hibernate}
                                className="h-16 w-16"
                                alt="Hibernate Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Hibernate
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={redis}
                                className="h-16 w-16"
                                alt="Redis Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Redis
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={kafka}
                                className="h-16 w-16"
                                alt="Kafka Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Kafka
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={git}
                                className="h-16 w-16"
                                alt="Git Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Git
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={linux}
                                className="h-16 w-16"
                                alt="Linux Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Linux
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={docker}
                                className="h-16 w-16"
                                alt="Docker Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            Docker
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className="bg-gray-100 h-24 w-24 mx-10 mt-6 mb-3 rounded-full flex flex-col justify-center items-center">
                            <Image
                                src={aws}
                                className="h-16 w-16"
                                alt="Aws Logo"
                            />
                        </div>
                        <div className="font-bold text-white mt-1">
                            AWS
                        </div>
                    </div>
                </Marquee>}
            </div>
            <div className='flex justify-center items-center p-5'>
                <button className='font-bold hover:scale-125 hover:border p-2 rounded-lg' onClick={() => setShowAll(!showAll)}>{showAll ? "Close" : "Show all"}</button>
            </div>
        </div>
    )
}

export default Skills