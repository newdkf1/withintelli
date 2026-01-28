import Link from 'next/link'
import Image from 'next/image'

import React from 'react'
import TypewriterComponent from 'typewriter-effect';

import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from "flowbite-react";
import { LuArrowUpRight } from "react-icons/lu";
import { BsArrowUpRight, BsYoutube } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";
import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

import { DIM } from '@/lib/Dim'

import { SOCIAL_LINKS, PAGES_LINKS } from '@/lib/PagesLinks'
import { VIDEO_LINKS } from '@/lib/VideoArtifactsLinks';
import { DEMO_LINKS, BLOG_PRODS_LINKS } from '@/lib/BlogProdsLinks';

export default function HomeHeroSection() {

    const home_welcome_video = VIDEO_LINKS.home.welcome
    
    const home_video_1_w = DIM['video-width-1']
    const home_video_1_h = DIM['video-height-1']
    const home_video_mob_1_w = DIM['video-width-2']
    const home_video_mob_1_h = DIM['video-height-2']

    return (
    <>
        {/* desktop */}
        <div className='hidden md:flex'>

            <div className='flex-col w-full mx-auto  place-content-center place-items-center'>


                <div className='flex w-full pt-[40px] pb-[5px] bg-black place-content-center place-items-center'>
                    <iframe
                    width={home_video_1_w}
                    height={home_video_1_h}
                    allow="autoplay"
                    src={home_welcome_video}
                    title="welcome to intelli">
                    </iframe>
                </div>


                <div className='flex w-full bg-[#fff] mx-auto   place-content-center place-items-center'>

                    <div className='flex-col w-full mx-auto pt-[35px] pb-[30px] px-[35px] bg-red-0  '>

                        <div className="flex ">
                            <h1 className={`${sourceSansPro.className} text-[80px] text-black leading-[90px] font-[100] tracking-normal`}> 
                                The new tech-stack
                            </h1>
                        </div>

                        <div className='flex w-full mt-[40px] px-[15px] gap-[40px] justify-between'>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        Technology Management
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            End-to-end oversight of your tech stack — from modernization to ongoing operations.
                                            Future-ready systems that reduce risk, cut costs, and scale with your business.                                            
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        Innovation Management
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Structure and accelerate innovation across teams and business units.
                                            From idea to impact — deliver solutions that drive revenue and competitive edge.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                        </div>

                        <div className='flex w-full mt-[40px] px-[15px] gap-[40px] justify-between'>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        Change Management
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Operational change without chaos.
                                            We align people, processes, and tech to ensure smooth adoption and measurable outcomes.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        Business Process Applications
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Applications specifically built around how you operate.
                                            Automate workflows, eliminate inefficiencies, and improve real-time visibility.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                        </div>

                        <div className='flex w-full mt-[40px] px-[15px] gap-[40px] justify-between'>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        Solutions Management
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            We design, integrate, and manage solutions that evolve with your needs.
                                            Reliable delivery, continuous optimization, zero vendor lock-in.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        Industry Solutions
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Solutions engineered around regulatory, market, and customer realities.
                                            Configurable tech that delivers efficiency and faster time-to-value.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                        </div>

                        <div className='flex w-full mt-[40px] px-[15px] gap-[40px] justify-between'>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        LegalTech
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Automation for legal operations and compliance that reduces manual effort and mitigates risk.
                                            Smart documents, streamlined workflows, audit-ready data — always.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        HealthTech
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Operational and clinical systems built for secure data, efficient care, and regulatory trust.
                                            Better patient journeys, stronger administration, real-time insights.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                        </div>             

                        <div className='flex w-full mt-[40px] px-[15px] gap-[40px] justify-between'>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        RetailTech
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Optimize demand, inventory, and customer experience with intelligent retail solutions.
                                            Smarter operations → higher margins and retention.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        InvestorTech
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Digitize deal flow and portfolio management with unified intelligence.
                                            Fast decisions, efficient collaboration, and improved LP transparency.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                        </div>          

                        <div className='flex w-full mt-[40px] px-[15px] gap-[40px] justify-between'>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        E-commerce Tech
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Commerce platforms and automations that scale sales and fulfillment.
                                            Seamless CX from discovery to delivery — built for growth.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        Real Estate Tech
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Digitally manage properties, assets, and tenant services in one system.
                                            Unlock operational clarity and valuation gains across your portfolio.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                        </div>             

                        <div className='flex w-full mt-[40px] px-[15px] gap-[40px] justify-between'>

                            <div className='flex-col w-full pb-[10px] border-b-[1px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        ComplianceTech
                                    </h2>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Continuous compliance, automated monitoring, and zero-surprise audits.
                                            Stay ahead of regulatory change and reduce compliance overhead.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col w-full pb-[10px] border-b-[0px] border-b-[#0072bb] '>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[70px] text-[#0084ff] font-[100] leading-[90px]`}>
                                        {/* RetailTech */}
                                    </h2>
                                </div>
                                
                                <Link className='flex' href={PAGES_LINKS['contact-us']} target='_self'>
                                <div className='flex mt-[10px]'>
                                    <div className='flex  bg-green-0'>
                                        <h3 className={`${inter.className} text-[22px] leading-[30px] text-gray-600`}>
                                            Contact our sales team for more
                                        </h3>
                                    </div>
                                    <div className='flex  ml-[20px] bg-red-0 place-content-end place-items-center justify-start'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                    
                                </div>
                                </Link>
                            </div>

                        </div>       

                    </div>
                </div>

                {/* bg-[#00a2ff91] bg-[#1e9affff]  */}
                <div className='flex w-full bg-[#00a2ff91]  mx-auto   place-content-center place-items-center'>

                    <div className='flex-col  text-white w-full mx-auto pt-[35px] pb-[30px] px-[35px] bg-red-0  '>
                        <div className="flex ">
                            <h2 className={`${geistSans.className} text-[25px] font-[600] tracking-wider`}> 
                                SOCIAL
                            </h2>
                        </div>

                        <div className="flex mt-[0px] max-w-[950px]">
                            <h2 className={`${sourceSansPro.className}  text-[50px]  font-[100] leading-[75px] tracking-normal`}> 
                                Follow us for the latest updates
                            </h2>
                        </div>

                        <div className='flex mt-[20px] -ml-[0px] justify-between'>
                            <Link href={SOCIAL_LINKS.linkedin} target="_blank">
                            <div className='flex'>
                                <div className='flex'>
                                    <IoLogoLinkedin className='text-white text-[55px]' />
                                </div>
                                <div className='flex-col ml-[12px]'>
                                    <p className='text-[16px] font-[500] tracking-widest '> LINKEDIN </p>
                                    <p className='mt-[2px] text-[17px] font-[500] tracking-widest '> WITHINTELLI </p>
                                </div>
                            </div>
                            </Link>

                            <Link href={SOCIAL_LINKS.twitter} target="_blank">
                            <div className='flex'>
                                <div className='flex'>
                                    <BsTwitterX className='text-white text-[48px]' />
                                </div>
                                <div className='flex-col ml-[12px]'>
                                    <p className='text-[16px] font-[500] tracking-widest '> X </p>
                                    <p className='mt-[2px] text-[17px] font-[500] tracking-widest '> WITHINTELLI </p>
                                </div>
                            </div>
                            </Link>

                            <Link href={SOCIAL_LINKS.youtube} target="_blank">
                            <div className='flex'>
                                <div className='flex -mt-[6px]'>
                                    <IoLogoYoutube className='text-white text-[65px]' />
                                </div>
                                <div className='flex-col ml-[12px] mt-[2px]'>
                                    <p className='text-[16px] font-[500] tracking-widest '> YOUTUBE </p>
                                    <p className='mt-[2px] text-[17px] font-[500] tracking-widest '> WITHINTELLI </p>
                                </div>
                            </div>
                            </Link>


                            {/* <Link href={SOCIAL_LINKS.youtube2} target="_blank">
                            <div className='flex'>
                                <div className='flex -mt-[6px]'>
                                    <IoLogoYoutube className='text-white text-[65px]' />
                                </div>
                                <div className='flex-col ml-[12px] mt-[2px]'>
                                    <p className='text-[16px] font-[500] tracking-widest '> YOUTUBE </p>
                                    <p className='mt-[2px] text-[17px] font-[500] tracking-widest '> @withintelliBusiness </p>
                                </div>
                            </div>
                            </Link> */}


                            {/* <Link href={SOCIAL_LINKS.youtube3} target="_blank">
                            <div className='flex'>
                                <div className='flex -mt-[6px]'>
                                    <IoLogoYoutube className='text-white text-[65px]' />
                                </div>
                                <div className='flex-col ml-[12px] mt-[2px]'>
                                    <p className='text-[16px] font-[500] tracking-widest '> YOUTUBE </p>
                                    <p className='mt-[2px] text-[17px] font-[500] tracking-widest '> @withintelliPersonal </p>
                                </div>
                            </div>
                            </Link> */}


                            <Link href={SOCIAL_LINKS.facebook} target="_blank">
                            <div className='flex'>
                                <div className='flex'>
                                    <FaFacebookF className='text-white text-[50px]' />
                                </div>
                                <div className='flex-col ml-[12px]'>
                                    <p className='text-[16px] font-[500] tracking-widest '> FACEBOOK </p>
                                    <p className='mt-[2px] text-[17px] font-[500] tracking-widest '> WITHINTELLI </p>
                                </div>
                            </div>
                            </Link>

                            <Link href={SOCIAL_LINKS.github} target="_blank">
                            <div className='flex'>
                                <div className='flex'>
                                    <BsGithub className='text-white text-[50px]' />
                                </div>
                                <div className='flex-col ml-[12px]'>
                                    <p className='text-[16px] font-[500] tracking-widest '> GITHUB </p>
                                    <p className='mt-[2px] text-[17px] font-[500] tracking-widest '> WITHINTELLI </p>
                                </div>
                            </div>  
                            </Link>    

                        </div>

                    </div>

                </div>
                
            </div>

        </div>


        {/* mobile */}
        <div className='flex md:hidden'>

            <div className='flex-col w-full mx-auto  '>


                <div className='flex w-full pt-[20px] pb-[5px] bg-black place-content-center place-items-center'>
                    <iframe
                    width={home_video_mob_1_w}
                    height={home_video_mob_1_h}
                    allow="autoplay"
                    src={home_welcome_video}
                    title="welcome to intelli">
                    </iframe>
                </div>

                <div className='flex w-full bg-[#fff]  mx-auto   place-content-center place-items-center'>

                    <div className='flex-col w-full mx-auto pt-[35px] pb-[30px] pl-[25px] pr-[15px] bg-red-0  '>

                        <div className="flex ">
                            <h1 className={`${openSans.className} text-[40px] text-black font-[100] leading-[40px] tracking-normal`}> 
                                The new tech-stack
                            </h1>
                        </div>


                        <div className='flex-col mt-[30px]'>

                            <div className='flex-col mt-[0px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        Technology Management
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            End-to-end oversight of your tech stack — from modernization to ongoing operations.
                                            Future-ready systems that reduce risk, cut costs, and scale with your business.       
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>

                            </div>

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        Innovation Management
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Structure and accelerate innovation across teams and business units.
                                            From idea to impact — deliver solutions that drive revenue and competitive edge.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        Change Management
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Operational change without chaos.
                                            We align people, processes, and tech to ensure smooth adoption and measurable outcomes.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        Business Process Applications
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Applications specifically built around how you operate.
                                            Automate workflows, eliminate inefficiencies, and improve real-time visibility.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        Solutions Management
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            We design, integrate, and manage solutions that evolve with your needs.
                                            Reliable delivery, continuous optimization, zero vendor lock-in.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        Industry Solutions
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Solutions engineered around regulatory, market, and customer realities.
                                            Configurable tech that delivers efficiency and faster time-to-value.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>                            

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        LegalTech
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Automation for legal operations and compliance that reduces manual effort and mitigates risk.
                                            Smart documents, streamlined workflows, audit-ready data — always.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>         

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        HealthTech
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Operational and clinical systems built for secure data, efficient care, and regulatory trust.
                                            Better patient journeys, stronger administration, real-time insights.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>        

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        RetailTech
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Optimize demand, inventory, and customer experience with intelligent retail solutions.
                                            Smarter operations → higher margins and retention.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>      

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        InvestorTech
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Digitize deal flow and portfolio management with unified intelligence.
                                            Fast decisions, efficient collaboration, and improved LP transparency.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>      

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        E-commerce Tech
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Commerce platforms and automations that scale sales and fulfillment.
                                            Seamless CX from discovery to delivery — built for growth.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>   

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[1px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        Real Estate Tech
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Digitally manage properties, assets, and tenant services in one system.
                                            Unlock operational clarity and valuation gains across your portfolio.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>   

                            <div className='flex-col mt-[40px] pb-[17px] border-b-[0px] border-b-[#0072bb]'>
                                <div className='flex'>
                                    <h2 className={`${openSans.className} text-[30px] text-[#0084ff] font-[100] leading-[45px]`}>
                                        ComplianceTech
                                    </h2>
                                </div>         

                                <div className='flex mt-[6px]'>
                                    <div className='flex w-[85%] bg-green-0'>
                                        <h3 className={`${inter.className} text-[18px] leading-[25px] text-gray-600`}>
                                            Continuous compliance, automated monitoring, and zero-surprise audits.
                                            Stay ahead of regulatory change and reduce compliance overhead.
                                        </h3>
                                    </div>
                                    {/* <div className='flex w-[15%] bg-red-0 place-content-end place-items-end justify-end'>
                                        <HiOutlineArrowNarrowRight className='text-gray-600 text-[24px]' />
                                    </div>                                     */}
                                </div>
                            </div>   

                        </div>

                     
                    </div>
                </div>

                <div className='flex w-full bg-[#00a2ff91] mx-auto   place-content-center place-items-center'>

                    <div className='flex-col  text-white w-full mx-auto pt-[20px] pb-[40px] px-[35px] bg-red-0  '>
                        <div className="flex ">
                            <h2 className={`${geistSans.className} text-[16px] font-[600] tracking-wider`}> 
                                SOCIAL
                            </h2>
                        </div>

                        <div className="flex mt-[10px] ">
                            <h2 className={`${sourceSansPro.className}  text-[28px]  font-[100] leading-[29px] tracking-normal`}> 
                                Follow us for the latest updates
                            </h2>
                        </div>

                    <div className='flex mt-[25px] justify-between '>
                        <Link href={SOCIAL_LINKS.linkedin} target="_blank">
                            <div className="flex text-white">
                                <IoLogoLinkedin className='text-white text-[16px]' />
                                <p></p>
                            </div>
                        </Link>
                        
                        <Link href={SOCIAL_LINKS.youtube} target="_blank">
                            <div className="flex text-white">
                                <IoLogoYoutube className='text-white text-[16px]' />
                                <p className="text-[13px] ml-[4px] -mt-[1px]"></p>
                            </div>
                        </Link>

                        {/* <Link href={SOCIAL_LINKS.youtube2} target="_blank">
                            <div className="flex text-white mt-[0px]">
                                <IoLogoYoutube className='text-white text-[16px]' />
                                <p className="text-[10px] ml-[4px] -mt-[0px]">(2)</p>
                            </div>
                        </Link> */}

                        {/* <Link href={SOCIAL_LINKS.youtube3} target="_blank">
                            <div className="flex text-white mt-[0px]">
                                <IoLogoYoutube className='text-white text-[16px]' />
                                <p className="text-[10px] ml-[4px] -mt-[0px]">(3)</p>
                            </div>
                        </Link> */}

                        <Link href={SOCIAL_LINKS.twitter} target="_blank">
                            <div className="flex text-white mt-[2px]">
                                <BsTwitterX className='text-white text-[12px]' />
                            </div>
                        </Link>

                        <Link href={SOCIAL_LINKS.facebook} target="_blank">
                            <div className="flex text-white">
                                <FaFacebookF className='text-white text-[15px]' />
                            </div>
                        </Link>

                        <Link href={SOCIAL_LINKS.github} target="_blank">
                            <div className="flex text-white">
                                <BsGithub className='text-white text-[15px]' />
                            </div>
                        </Link>

                    </div>

                    </div>

                </div>
                
            </div>

        </div>        
    </>
)}