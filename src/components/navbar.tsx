"use client"

import Image from "next/image";
import Link from 'next/link'

import { useState } from 'react'

import { CiMenuFries } from "react-icons/ci";
import { LuArrowUpRight } from "react-icons/lu";
import { BsArrowUpRight } from "react-icons/bs";
import { RiCloseLargeFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbSend } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";

import WhatsAppImg from "../../public/co/whatsapp.png"
import YTLogoImg from "../../public/co/yt_logo.png"

import IntelliWMark from "../../public/co/intelli-wm.png"

import {PAGE_WIDTH, PAGE_WIDTH_3, PAGE_WIDTH_4 } from "@/lib/Dim";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

import { VIDEO_LINKS } from "@/lib/VideoArtifactsLinks";
import { SOCIAL_LINKS, PAGES_LINKS } from '@/lib/PagesLinks'
import { DEMO_LINKS, BLOG_PRODS_LINKS } from '@/lib/BlogProdsLinks';

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen]  = useState(false);
    const [whoWeAreMenuOpen, setWhoWeAreMenuOpen]  = useState(false);
    const [whatWeDoMenuOpen, setWhatWeDoMenuOpen]  = useState(false);
    const [ourThinkingMenuOpen, setOurThinkingMenuOpen]  = useState(false);
    const [careersMenuOpen, setCareersMenuOpen]  = useState(false);


    const [showWhatWeDoOverview, setShowWhatWeDoOverview] = useState(false);    
    const [showWhatWeDoServices, setShowWhatWeDoServices] = useState(false);
    const [showWhatWeDoIndustries, setShowWhatWeDoIndustries] = useState(false);
    const [showWhatWeDoAlliances, setShowWhatWeDoAlliances] = useState(false);
    const [showWhatWeDoProductPlatforms, setShowWhatWeDoProductPlatforms] = useState(false);
    const [showWhatWeDoResearchInnovation, setShowWhatWeDoResearchInnovation] = useState(false);
    const [showWhatWeDoCitizenSolutions, setShowWhatWeDoCitizenSolutions] = useState(false);

    const [showWhoWeAreOverview, setShowWhoWeAreOverview] = useState(false);  
    const [showWhoWeArePurposeValues, setShowWhoWeArePurposeValues] = useState(false);  
    const [showWhoWeAreHowWeServe, setShowWhoWeAreHowWeServe] = useState(false);    
    const [showWhoWeAreRecognition, setShowWhoWeAreRecognition] = useState(false);    
    const [showWhoWeArePressRoom, setShowWhoWeArePressRoom] = useState(false);    
    const [showWhoWeAreContactUs, setShowWhoWeAreContactUs] = useState(false);    

    const [showOurThinkingOverview, setShowOurThinkingOverview] = useState(false);  
    const [showOurThinkingIndustryInsights, setShowOurThinkingIndustryInsights] = useState(false);  
    const [showOurThinkingINTELLI4Insights, setShowOurThinkingINTELLI4Insights] = useState(false);  

    const [showCareersOverview, setShowCareersOverview] = useState(false);  
    const [showCareersOpenRoles, setShowCareersOpenRoles] = useState(false);  


    const CloseAllMenus =  () => {
        setWhoWeAreMenuOpen(false); setWhatWeDoMenuOpen(false); 
        setOurThinkingMenuOpen(false); setCareersMenuOpen(false);
    }

    const CloseAllWhoWeAre =  () => {
        setShowWhoWeAreOverview(false); setShowWhoWeArePurposeValues(false);  setShowWhoWeAreHowWeServe(false);
        setShowWhoWeAreRecognition(false); setShowWhoWeArePressRoom(false); setShowWhoWeAreContactUs(false);
    }

    const CloseAllWhatWeDo =  () => {
        setShowWhatWeDoOverview(false); setShowWhatWeDoServices(false);  setShowWhatWeDoIndustries(false);
        setShowWhatWeDoAlliances(false); setShowWhatWeDoProductPlatforms(false); setShowWhatWeDoResearchInnovation(false);
        setShowWhatWeDoCitizenSolutions(false);
    }

    const CloseAllOurThinking =  () => {
        setShowOurThinkingOverview(false); setShowOurThinkingIndustryInsights(false); setShowOurThinkingINTELLI4Insights(false);
    }

    const CloseAllCareers =  () => {
        setShowCareersOverview(false); setShowCareersOpenRoles(false); 
    }
    return (
        <>
            {/* desktop */}
            <navbar className="hidden md:flex" >

                <div className="flex-col w-full ">


                    <div className="flex mx-auto  w-full pt-[12px] pb-[15px] pl-[30px] pr-[60px] bg-black justify-between  ">

                        <div className="flex  bg-red-0 place-content-center place-items-center">
                            <div className="flex">
                                <Link href="/" target=""> 
                                    <div className="flex w-[150px] h-[60px] -mt-[0px]">
                                        <Image src={IntelliWMark} width={150} height={60} alt="Intelli Logo"/>                  
                                    </div>  
                                </Link>
                            </div>

                            <div className="flex  ml-[95px] mt-[3px] bg-red-0 text-white">

                                <div className="flex  place-content-center place-items-center"
                                        onClick={ () => {CloseAllMenus(); setWhoWeAreMenuOpen(!whoWeAreMenuOpen)}}
                                >
                                    <h3 className="text-[16px] font-[300] tracking-wide"> Who we are </h3>
                                    {!whoWeAreMenuOpen && <MdOutlineKeyboardArrowDown className="text-[24px] ml-[3px]" />} 
                                    {whoWeAreMenuOpen && <MdOutlineKeyboardArrowUp className="text-[24px] ml-[3px]" />} 
                                </div>

                                <div className="flex ml-[40px]  place-content-center place-items-center"
                                        onClick={ () => {CloseAllMenus(); setWhatWeDoMenuOpen(!whatWeDoMenuOpen)}}
                                >
                                    <h3 className="text-[16px] font-[300] tracking-wide"> What we do </h3>
                                    {!whatWeDoMenuOpen && <MdOutlineKeyboardArrowDown className="text-[24px] ml-[3px]" />} 
                                    {whatWeDoMenuOpen && <MdOutlineKeyboardArrowUp className="text-[24px] ml-[3px]" />}                                
                                </div>

                                <div className="flex ml-[40px]  place-content-center place-items-center"
                                        onClick={ () => {CloseAllMenus(); setOurThinkingMenuOpen(!ourThinkingMenuOpen)}}
                                >
                                    <h3 className="text-[16px] font-[300] tracking-wide"> Our Thinking </h3>
                                    {!ourThinkingMenuOpen && <MdOutlineKeyboardArrowDown className="text-[24px] ml-[3px]" />} 
                                    {ourThinkingMenuOpen && <MdOutlineKeyboardArrowUp className="text-[24px] ml-[3px]" />}                                  
                                </div>

                                <div className="flex  ml-[40px] place-content-center place-items-center"
                                        onClick={ () => {CloseAllMenus(); setCareersMenuOpen(!careersMenuOpen)}}
                                >                                    
                                    <h3 className="text-[16px] font-[300] tracking-wide"> Careers </h3>
                                    {!careersMenuOpen && <MdOutlineKeyboardArrowDown className="text-[24px] ml-[3px]" />} 
                                    {careersMenuOpen && <MdOutlineKeyboardArrowUp className="text-[24px] ml-[3px]" />}                                    
                                </div>

                                {/* check - bg */}
                                {/* <div className="flex  ml-[100px] place-content-center place-items-center bg-[#181bfeff] px-[20px] py-[20px]"
                                        onClick={ () => {CloseAll(); setShowInsights(!showInsights)}}
                                >                                    
                                    <h3 className="text-[25px] mr-[40px]"> 🌐 </h3>
                                    {!showInsights && <TbSend className="text-[40px]" />} 
                                    {showInsights && <TbSend className="text-[40px]" />}                                    
                                </div> */}

                            </div>

                        </div>

                        <div className='flex w-[300px] justify-between place-content-center place-items-center'>
                            <Link href={SOCIAL_LINKS.linkedin} target="_blank">
                                <div className="flex text-white">
                                    <IoLogoLinkedin className='text-white text-[15px]' />
                                    <p></p>
                                </div>
                            </Link>
                            
                            <Link href={SOCIAL_LINKS.youtube} target="_blank">
                                <div className="flex text-white">
                                    <IoLogoYoutube className='text-white text-[15px]' />
                                    <p className="text-[13px] ml-[4px] -mt-[1px]"></p>
                                </div>
                            </Link>

                            {/* <Link href={SOCIAL_LINKS.youtube2} target="_blank">
                                <div className="flex text-white mt-[4px]">
                                    <IoLogoYoutube className='text-white text-[16px]' />
                                    <p className="text-[12px] ml-[4px] -mt-[0px]">(2)</p>
                                </div>
                            </Link>

                            <Link href={SOCIAL_LINKS.youtube3} target="_blank">
                                <div className="flex text-white mt-[4px]">
                                    <IoLogoYoutube className='text-white text-[16px]' />
                                    <p className="text-[12px] ml-[4px] -mt-[0px]">(3)</p>
                                </div>
                            </Link>

                            <Link href={SOCIAL_LINKS.youtube4} target="_blank">
                                <div className="flex text-white mt-[4px]">
                                    <IoLogoYoutube className='text-white text-[16px]' />
                                    <p className="text-[12px] ml-[4px] -mt-[0px]">(4)</p>
                                </div>
                            </Link> */}

                            <Link href={SOCIAL_LINKS.twitter} target="_blank">
                                <div className="flex text-white">
                                    <BsTwitterX className='text-white text-[13px]' />
                                </div>
                            </Link>

                            <Link href={SOCIAL_LINKS.facebook} target="_blank">
                                <div className="flex text-white">
                                    <FaFacebookF className='text-white text-[14px]' />
                                </div>
                            </Link>

                            <Link href={SOCIAL_LINKS.github} target="_blank">
                                <div className="flex text-white">
                                    <BsGithub className='text-white text-[15px]' />
                                </div>
                            </Link>

                        </div>

                    </div>


                    {whoWeAreMenuOpen && (
                        <div className="flex absolute top-[105px]  pb-[20px]  w-full   ">
                            
                            <div className={`flex-col ${openSans.className} pl-[50px] pr-[20px] w-[380px] h-[500px] bg-[#292b2c] text-[#9e9e99]  `}>

                                <div className="flex mt-[60px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhoWeAre();  setShowWhoWeArePurposeValues(!showWhoWeArePurposeValues)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Purpose and Values</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhoWeAre();  setShowWhoWeAreHowWeServe(!showWhoWeAreHowWeServe)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">How we serve</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhoWeAre();  setShowWhoWeArePressRoom(!showWhoWeArePressRoom)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Press room</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhoWeAre();  setShowWhoWeAreContactUs(!showWhoWeAreContactUs)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Contact Us</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                            </div>

                            <div className="flex-col w-full h-[500px] bg-[#0f0f0f]">
                                {showWhoWeArePurposeValues && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> What we believe in </p>
                                                <p className="mt-[25px]"> Future Vision </p>
                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}

                                {showWhoWeAreHowWeServe && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Strategy and Consulting </p>
                                                <p className="mt-[25px]"> Technology </p>
                                                <p className="mt-[25px]"> Operations </p>
                                                <p className="mt-[25px]"> Products and Platforms </p>
                                                <p className="mt-[25px]"> Solutions Management </p>
                                                <p className="mt-[25px]"> Industry Solutions </p>
                                                <p className="mt-[25px]"> Outsourcing </p>
                                            </div>

                                        </div>

                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}  

                                {showWhoWeArePressRoom && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                {/* <p> Intelli Website AI Voice Assistants </p> */}
                                            </div>


                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}

                                {showWhoWeAreContactUs && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <div className="flex">
                                                    <p className="text-[18px] -mt-[1px]"> 📩 </p>
                                                    <p className={`ml-[10px] ${geistMono.className} text-[20px] text-white`}> support@withintelli.com </p>
                                                </div>

                                                <div className="flex mt-[20px]">
                                                    <div className="flex -ml-[8px]">
                                                        <p className="text-[25px] -mt-[1px] text-white"> 📱 </p>
                                                        <p className={`${geistMono.className} text-[20px] text-white ml-[6px]`}> (+91) 98115 86941 </p>
                                                    </div>                                                      
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}
                            </div>

                        </div>
                    )}

                    {whatWeDoMenuOpen && (
                        <div className="flex absolute top-[105px]  pb-[20px]  w-full   ">
                            
                            <div className={`flex-col ${openSans.className} pl-[50px] pr-[20px] w-[380px] h-[500px] bg-[#292b2c] text-[#9e9e99]  `}>

                                <div className="flex mt-[60px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhatWeDo();  setShowWhatWeDoServices(!showWhatWeDoServices)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Services and Solutions</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhatWeDo();  setShowWhatWeDoIndustries(!showWhatWeDoIndustries)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Industries</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhatWeDo();  setShowWhatWeDoAlliances(!showWhatWeDoAlliances)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Alliances</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllWhatWeDo();  setShowWhatWeDoProductPlatforms(!showWhatWeDoProductPlatforms)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Products and Platforms</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                            </div>

                            <div className="flex-col w-full h-[500px] bg-[#0f0f0f]">
                                {showWhatWeDoServices && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Technology Management </p>
                                                <p className="mt-[25px]"> Innovation Management </p>
                                                <p className="mt-[25px]"> Innovation & Transformations Transition Management </p>
                                                <p className="mt-[25px]"> Business Process Applications </p>
                                                <p className="mt-[25px]"> Digital Transformations </p>
                                                <p className="mt-[25px]"> Business Process Transformations </p>
                                                <p className="mt-[25px]"> Marketing & CRM </p>
                                            </div>
                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Agentic AI, GenAI Engineering and Transformations </p>
                                                <p className="mt-[25px]"> NoCode </p>
                                                <p className="mt-[25px]"> AI Workflow Automation Transformations </p>
                                                <p className="mt-[25px]"> AI Agents </p>
                                                <p className="mt-[25px]"> AI Platform </p>
                                                <p className="mt-[25px]"> AI Voice Agents </p>
                                                <p className="mt-[25px]"> LegalTech </p>
                                            </div>

                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> HealthTech </p>
                                                <p className="mt-[25px]"> GovTech </p>
                                                <p className="mt-[25px]"> ComplianceTech </p>
                                                <p className="mt-[25px]"> M&A Tech </p>
                                                <p className="mt-[25px]"> InvestorTech </p>
                                                <p className="mt-[25px]"> AI Voice Agents </p>
                                                <p className="mt-[25px]"> LegalTech </p>
                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}

                                {showWhatWeDoIndustries && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Hospitals & Healthcare </p>
                                                <p className="mt-[25px]"> Real Estate </p>
                                                <p className="mt-[25px]"> Legal & Law Services </p>
                                                <p className="mt-[25px]"> F&B and Restaurants </p>
                                                <p className="mt-[25px]"> Hospitality </p>
                                                <p className="mt-[25px]"> Mergers & Acquisitions </p>
                                                <p className="mt-[25px]"> PE/VC </p>
                                            </div>
                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Media </p>
                                                <p className="mt-[25px]"> Education </p>
                                                <p className="mt-[25px]"> Wellness </p>
                                                <p className="mt-[25px]"> Fitness </p>
                                                <p className="mt-[25px]"> Ecommerce </p>
                                                <p className="mt-[25px]"> Retail </p>
                                            </div>

                                            {/* <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> HealthTech </p>
                                                <p className="mt-[25px]"> GovTech </p>
                                                <p className="mt-[25px]"> ComplianceTech </p>
                                                <p className="mt-[25px]"> M&A Tech </p>
                                                <p className="mt-[25px]"> InvestorTech </p>
                                                <p className="mt-[25px]"> AI Voice Agents </p>
                                                <p className="mt-[25px]"> LegalTech </p>
                                            </div> */}

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}  

                                {showWhatWeDoAlliances && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> AWS </p>
                                                <p className="mt-[25px]"> Microsoft Azure </p>
                                                <p className="mt-[25px]"> Google Cloud </p>
                                                <p className="mt-[25px]"> OpenAI </p>
                                                <p className="mt-[25px]"> Anthropic </p>
                                                <p className="mt-[25px]"> Perplexity </p>

                                            </div>
                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> LangChain </p>
                                                <p className="mt-[25px]"> N8N </p>
                                                <p className="mt-[25px]"> ElevenLabs </p>
                                                <p className="mt-[25px]"> GoHighLevel </p>
                                                <p className="mt-[25px]"> HubSpot </p>
                                                <p className="mt-[25px]"> Clay </p>
                                                <p className="mt-[25px]"> Instantly </p>
                                                <p className="mt-[25px]"> Shopify </p>
                                                <p className="mt-[25px]"> Webflow </p>
                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}

                                {showWhatWeDoProductPlatforms && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Intelli Website AI Voice Assistants </p>
                                                <p className="mt-[25px]"> Intelli AI-Powered Data Scraping System </p>
                                                <p className="mt-[25px]"> Intelli AI-Powered News Gathering System  </p>
                                                <p className="mt-[25px]"> Intelli Company AI Assistants </p>
                                            </div>
                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Intelli ChatBots </p>
                                                <p className="mt-[25px]"> Intelli Facebook DM Automation Agent </p>
                                                <p className="mt-[25px]"> Intelli WhatsApp Automation Agent </p>
                                                <p className="mt-[25px]"> Intelli Marketing Automation Agent </p>
                                                <p className="mt-[25px]"> Intelli Lead Prospecting Automation Agent </p>
                                            </div>

                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Intelli Managed AI Platform </p>
                                                <p className="mt-[25px]"> Intelli Managed Company AI Agents </p>
                                                <p className="mt-[25px]"> Intelli Managed Company Cloud </p>

                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}

                            </div>

                        </div>
                    )}

                    {ourThinkingMenuOpen && (
                        <div className="flex absolute top-[105px]  pb-[20px]  w-full   ">
                            
                            <div className={`flex-col ${openSans.className} pl-[50px] pr-[20px] w-[380px] h-[500px] bg-[#292b2c] text-[#9e9e99]  `}>

                                <div className="flex mt-[60px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllOurThinking();  setShowOurThinkingIndustryInsights(!showOurThinkingIndustryInsights)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Industry Insights</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllOurThinking();  setShowOurThinkingINTELLI4Insights(!showOurThinkingINTELLI4Insights)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Intelli Insights</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div>


                            </div>

                            <div className="flex-col w-full h-[500px] bg-[#0f0f0f]">
                                {showOurThinkingIndustryInsights && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Hospitals and Healthcare </p>
                                                <p className="mt-[25px]"> Financial Services </p>
                                                <p className="mt-[25px]"> Insurance </p>
                                                <p className="mt-[25px]"> Real Estate </p>
                                                <p className="mt-[25px]"> PE/VC </p>
                                            </div>

                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> HealthTech </p>
                                                <p className="mt-[25px]"> GovTech </p>
                                                <p className="mt-[25px]"> ComplianceTech </p>
                                                <p className="mt-[25px]"> M&A Tech </p>
                                                <p className="mt-[25px]"> InvestorTech </p>
                                                <p className="mt-[25px]"> LegalTech </p>
                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}

                                {showOurThinkingINTELLI4Insights && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> AI Engineering </p>
                                                <p className="mt-[25px]"> AI Agents </p>
                                                <p className="mt-[25px]"> Generative AI </p>
                                                <p className="mt-[25px]"> NoCode </p>
                                                <p className="mt-[25px]"> Workflow Automations </p>
                                            </div>

                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Business Intelligence Platforms </p>
                                                <p className="mt-[25px]"> CRM Automations </p>
                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}  


                            </div>

                        </div>
                    )}

                    {careersMenuOpen && (
                        <div className="flex absolute top-[105px]  pb-[20px]  w-full   ">
                            
                            <div className={`flex-col ${openSans.className} pl-[50px] pr-[20px] w-[380px] h-[500px] bg-[#292b2c] text-[#9e9e99]  `}>

                                {/* <div className="flex mt-[60px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllOurThinking();  setShowOurThinkingIndustryInsights(!showOurThinkingIndustryInsights)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Overview</h3>
                                    </div>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div>
                                </div> */}

                                <div className="flex mt-[30px] place-content-center place-items-center justify-between bg-red-0"
                                    onClick={ () => {CloseAllOurThinking();  setShowOurThinkingINTELLI4Insights(!showOurThinkingINTELLI4Insights)}}
                                >
                                    <div className="flex bg-green-0">
                                        <h3 className="text-[20px] font-[300] tracking-wide ">Open Roles</h3>
                                    </div>
                                    {/* <div className="flex">
                                        <MdOutlineKeyboardArrowRight className=" text-[20px]  font-[100] " />
                                    </div> */}
                                </div>


                            </div>

                            <div className="flex-col w-full h-[500px] bg-[#0f0f0f]">
                                {showCareersOpenRoles && (
                                    <div className="flex justify-between">
                                        <div className={`flex pt-[40px] pl-[30px] pr-[50px] w-full  bg-green-0 `}>
                                            <div className={`flex-col  ${openSans.className} max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Technology Management </p>
                                                <p className="mt-[25px]"> Innovation Management </p>
                                                <p className="mt-[25px]"> Innovation & Transformations Transition Management </p>
                                                <p className="mt-[25px]"> Business Process Applications </p>
                                                <p className="mt-[25px]"> Digital Transformations </p>
                                                <p className="mt-[25px]"> Business Process Transformations </p>
                                                <p className="mt-[25px]"> Marketing & CRM </p>
                                            </div>
                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> Agentic AI, GenAI Engineering and Transformations </p>
                                                <p className="mt-[25px]"> NoCode </p>
                                                <p className="mt-[25px]"> AI Workflow Automation Transformations </p>
                                                <p className="mt-[25px]"> AI Agents </p>
                                                <p className="mt-[25px]"> AI Platform </p>
                                                <p className="mt-[25px]"> AI Voice Agents </p>
                                                <p className="mt-[25px]"> LegalTech </p>
                                            </div>

                                            <div className={`flex-col  ${openSans.className} ml-[60px] max-w-[320px]  text-[16px] font-[300] text-gray-300 `}>
                                                <p> HealthTech </p>
                                                <p className="mt-[25px]"> GovTech </p>
                                                <p className="mt-[25px]"> ComplianceTech </p>
                                                <p className="mt-[25px]"> M&A Tech </p>
                                                <p className="mt-[25px]"> InvestorTech </p>
                                                <p className="mt-[25px]"> AI Voice Agents </p>
                                                <p className="mt-[25px]"> LegalTech </p>
                                            </div>

                                        </div>
                                        <div className="flex w-[360px] bg-red-0">
                                        </div>                                        
                                    </div>
                                )}
                            </div>

                        </div>
                    )}


                </div>

            </navbar>


            {/* mobile */}
            <navbar className="flex md:hidden" >

                <div className="flex-col w-full ">

                    {/* <div className={"flex-col mx-auto w-full  pt-[7px] pb-[3px] bg-[#00a2ff91]  place-content-center place-items-center"}>

                        <div className="flex place-content-center place-items-center text-center">
                            <h3 className="ml-[0px] text-[15px] text-white font-[400] leading-[25px]">
                                Watch Our AI Engineering YouTube Channel
                            </h3>
                            <Link className="flex place-content-center place-items-center" href={SOCIAL_LINKS.youtube4} target="_blank">
                                <div className="flex w-[22px] h-[15px] ml-[5px] ">
                                    <Image src={YTLogoImg} width={22} height={15} alt="YT Logo" />
                                </div>
                                <CgArrowLongRight className="ml-[12px] text-[24px] text-white" />
                            </Link>

                        </div>

                    </div> */}

                    {/* bg-[#0019ffff] */}
                    <div className="flex mx-auto  w-full pt-[4px] pb-[3px] bg-black  ">

                        <div className={"flex pl-[10px] pt-[7px] bg-red-0 "}>
                            
                            <div className="flex pt-[0px] cursor-pointer " onClick={() => {setMobileMenuOpen(true);}}>
                                <CiMenuFries className="text-[34px] text-white" />
                            </div>

                            <Link href="/" target=""> 
                            <div className="flex w-[136px] h-[60px] -mt-[7px] ml-[11px] place-items-start">
                                <Image src={IntelliWMark} width={136} height={60} alt="Intelli Logo"/>                  
                            </div>  
                            </Link>

                        </div>
                    </div>

                </div>

                {mobileMenuOpen && (

                    <>

                    <div className="flex-col fixed z-100 w-full top-0 left-0 pb-[200px] bg-black opacity-96 
                                        max-w-[450px] min-h-[1200px] text-white overflow-y-scroll">

                        <div className="flex justify-end pt-[20px] pl-[15px] pb-[25px] pr-[10px] cursor-pointer"  onClick={ () => {setMobileMenuOpen(false);}}>
                            <RiCloseLargeFill className="text-[26px] text-gray-500" />
                        </div>

                        <div className="flex w-full pl-[15px] pr-[15px] border-b-[0px] border-b-gray-400 justify-between cursor-pointer"
                                onClick = { () => {CloseAllMenus(); setWhoWeAreMenuOpen(true)}}
                        >
                            <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                <h3 className="text-[24px] text-[#d0d0ce] font-[100] tracking-wide">
                                    Who we are
                                </h3>
                            </div>
                            <div className="flex bg-red-0 place-content-center place-items-center">
                                {!whoWeAreMenuOpen && <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />}
                                { whoWeAreMenuOpen && <MdOutlineKeyboardArrowUp className=" text-[25px] text-white font-[100] " />}
                            </div>
                        </div>

                        <div className="flex mt-[24px] w-full pl-[15px] pr-[15px] border-b-[0px] border-b-gray-400 justify-between cursor-pointer"
                                onClick = { () => {CloseAllMenus(); setWhatWeDoMenuOpen(true)}}
                        >
                            <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                <h3 className="text-[24px] text-[#d0d0ce] font-[100] tracking-wide">
                                    What we do
                                </h3>
                            </div>
                            <div className="flex bg-red-0 place-content-center place-items-center">
                                {!whatWeDoMenuOpen && <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />}
                                { whatWeDoMenuOpen && <MdOutlineKeyboardArrowUp className=" text-[25px] text-white font-[100] " />}
                            </div>
                        </div>
                                                                     
                        <div className="flex mt-[24px] w-full pl-[15px] pr-[15px] border-b-[0px] border-b-gray-400 justify-between cursor-pointer"
                                onClick = { () => {CloseAllMenus(); setOurThinkingMenuOpen(true)}}
                        >
                            <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                <h3 className="text-[24px] text-[#d0d0ce] font-[100] tracking-wide">
                                    Our Thinking
                                </h3>
                            </div>
                            <div className="flex bg-red-0 place-content-center place-items-center">
                                {!ourThinkingMenuOpen && <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />}
                                { ourThinkingMenuOpen && <MdOutlineKeyboardArrowUp className=" text-[25px] text-white font-[100] " />}
                            </div>
                        </div>
                                
                        <div className="flex mt-[24px] w-full pl-[15px] pr-[15px] border-b-[0px] border-b-gray-400 justify-between cursor-pointer"
                                onClick = { () => {CloseAllMenus(); setCareersMenuOpen(true)}}
                        >
                            <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                <h3 className="text-[24px] text-[#d0d0ce] font-[100] tracking-wide">
                                    Careers
                                </h3>
                            </div>
                            <div className="flex bg-red-0 place-content-center place-items-center">
                                {!careersMenuOpen && <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />}
                                { careersMenuOpen && <MdOutlineKeyboardArrowUp className=" text-[25px] text-white font-[100] " />}
                            </div>
                        </div>
                                

                    {whoWeAreMenuOpen && (
                        <div className="text-[#d0d0ce]">
                        <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                    bg-black opacity-96 max-w-[450px] min-h-[1200px] text-white overflow-y-scroll`}>

                            <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                        onClick={ () => {CloseAllMenus(); } }>
                                <div className="flex">
                                    <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                    <p className={`text-[16px] font-[500]  ml-[20px]`}> Main menu </p>
                                </div>
                            </div>

                            <div className="flex-col pl-[10px] pr-[10px]">
                                <div className="flex mt-[20px]">
                                    <p className="text-[25px] font-[300] text-[#d0d0ce]"> Who we are </p>
                                </div>

                                <div className="flex mt-[30px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhoWeAre(); setShowWhoWeArePurposeValues(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Purpose & Values
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[20px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhoWeAre(); setShowWhoWeAreHowWeServe(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            How we serve
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[20px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhoWeAre(); setShowWhoWeArePressRoom(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Press room
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[20px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhoWeAre(); setShowWhoWeAreContactUs(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Contact Us
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                            </div>

                        </div>

                        {showWhoWeArePurposeValues && (
                            <div className={`flex-col ${openSans.className} text-[#d0d0ce] fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhoWeArePurposeValues(false); setWhoWeAreMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500] ml-[20px]`}> Who we are </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Purpose & Values </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>What we believe in </p>
                                        <p className="mt-[20px]">Future vision </p>
                                    </div>

                                </div>

                            </div>
                        )}
                        
                        {showWhoWeAreHowWeServe && (
                            <div className={`flex-col ${openSans.className} text-[#d0d0ce] fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px]  overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhoWeAreHowWeServe(false); setWhoWeAreMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> Who we are </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] "> How we serve </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>Strategy and Consulting </p>
                                        <p className="mt-[20px]">Technology </p>
                                        <p className="mt-[20px]">Operations </p>
                                        <p className="mt-[20px]">Products and Platforms </p>
                                        <p className="mt-[20px]">Solutions Management </p>
                                        <p className="mt-[20px]">Industry Solutions </p>
                                        <p className="mt-[20px]">Outsourcing </p>
                                    </div>

                                </div>

                            </div>
                        )}

                        {showWhoWeArePressRoom && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhoWeArePressRoom(false); setWhoWeAreMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> Who we are </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Press room </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        {/* <p>Strategy and Consulting </p>
                                        <p className="mt-[20px]">Technology </p> */}
                                    </div>

                                </div>

                            </div>
                        )}

                        {showWhoWeAreContactUs && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px]  overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhoWeAreContactUs(false); setWhoWeAreMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> Who we are </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Contact Us </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <div className="flex">
                                            <p className="text-[15px] -mt-[1px]"> 📩 </p>
                                            <p className={`ml-[10px] ${geistMono.className} text-[18px] `}> support@withintelli.com </p>
                                        </div>

                                        <div className="flex mt-[20px]">
                                            <div className="flex -ml-[8px]">
                                                <p className="text-[19px] -mt-[1px] text-white"> 📱 </p>
                                                <p className={`${geistMono.className} text-[17px]  ml-[6px]`}> (+91) 98115 86941 </p>
                                            </div>                                                      
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}

                        </div>                      
                    )}

                    {whatWeDoMenuOpen && (
                        <div className="text-[#d0d0ce]">
                        <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                    bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                            <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                        onClick={ () => {CloseAllMenus(); } }>
                                <div className="flex">
                                    <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                    <p className={`text-[16px] font-[500] ml-[20px]`}> Main menu </p>
                                </div>
                            </div>

                            <div className="flex-col pl-[10px] pr-[10px]">
                                <div className="flex mt-[20px]">
                                    <p className="text-[25px] font-[300] text-[#d0d0ce]"> What we do </p>
                                </div>

                                <div className="flex mt-[30px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhatWeDo(); setShowWhatWeDoServices(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Services and Solutions
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[20px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhatWeDo(); setShowWhatWeDoIndustries(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Industries
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[20px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhatWeDo(); setShowWhatWeDoAlliances(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Alliances
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[20px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllWhatWeDo(); setShowWhatWeDoProductPlatforms(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Products and Platforms
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                            </div>

                        </div>

                        {showWhatWeDoServices && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhatWeDoServices(false); setWhatWeDoMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500] ml-[20px]`}> What we do </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Services and Solutions </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>Technology Management </p>
                                        <p className="mt-[20px]">Innovation Management </p>
                                        <p className="mt-[20px]">Change Management </p>
                                        <p className="mt-[20px]">Business Process Applications </p>
                                        <p className="mt-[20px]">Digital Transformations </p>
                                        <p className="mt-[20px]">Business Process Transformations </p>
                                        <p className="mt-[20px]">Marketing & CRM Tech </p>
                                        <p className="mt-[20px]">Agentic AI & GenAI Transformations </p>
                                        <p className="mt-[20px]">NoCode </p>
                                        <p className="mt-[20px]">AI Workflow Automation Transformations </p>
                                        <p className="mt-[20px]">AI Agents </p>
                                        <p className="mt-[20px]">AI Platform </p>
                                        <p className="mt-[20px]">LegalTech </p>
                                        <p className="mt-[20px]">HealthTech </p>
                                        <p className="mt-[20px]">Real Estate Tech </p>
                                        <p className="mt-[20px]">Investor Tech </p>
                                        <p className="mt-[20px]">ComplianceTech </p>
                                        <p className="mt-[20px]">HospitalityTech </p>
                                    </div>

                                </div>

                            </div>
                        )}
                        
                        {showWhatWeDoIndustries && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhatWeDoIndustries(false); setWhatWeDoMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> What we do </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Industries </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>Hospitals & Healthcare </p>
                                        <p className="mt-[20px]">Financial Services </p>
                                        <p className="mt-[20px]">Insurance </p>
                                        <p className="mt-[20px]">Real Estate </p>
                                        <p className="mt-[20px]">Leagl & Law Practice </p>
                                        <p className="mt-[20px]">F&B and Restaurants </p>
                                        <p className="mt-[20px]">Hospitality </p>
                                        <p className="mt-[20px]">PE/VC </p>
                                        <p className="mt-[20px]">Accounting & Compliance </p>
                                    </div>

                                </div>

                            </div>
                        )}

                        {showWhatWeDoAlliances && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhatWeDoAlliances(false); setWhatWeDoMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> What we do </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Alliances </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>AWS </p>
                                        <p className="mt-[20px]">Azure </p>
                                        <p className="mt-[20px]">Google Cloud </p>
                                        <p className="mt-[20px]">OpenAI </p>
                                        <p className="mt-[20px]">Anthropic </p>
                                        <p className="mt-[20px]">Perplexity </p>
                                        <p className="mt-[20px]">N8N </p>
                                        <p className="mt-[20px]">LangChain </p>
                                        <p className="mt-[20px]">ElevenLabs </p>
                                        <p className="mt-[20px]">GoHighLevel </p>
                                        <p className="mt-[20px]">HubSpot </p>
                                        <p className="mt-[20px]">Clay </p>
                                        <p className="mt-[20px]">Instantly </p>
                                        <p className="mt-[20px]">Shopify </p>
                                        <p className="mt-[20px]">Webflow </p>
                                    </div>

                                </div>

                            </div>
                        )}

                        {showWhatWeDoProductPlatforms && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowWhatWeDoProductPlatforms(false); setWhatWeDoMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> What we do </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Products and Platforms </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>Intelli Website AI Voice Assistants </p>
                                        <p className="mt-[20px]">Intelli AI-Powered Data Scraping Systems </p>
                                        <p className="mt-[20px]">Intelli AI-Powered News Gathering Systems </p>
                                        <p className="mt-[20px]">Intelli ChatBots </p>
                                        <p className="mt-[20px]">Intelli Powered Business AI Assistants </p>
                                        <p className="mt-[20px]">Intelli Managed AI </p>
                                        <p className="mt-[20px]">Intelli Managed Cloud </p>
                                        <p className="mt-[20px]">Intelli Marketing Automation Agents </p>
                                    </div>

                                </div>

                            </div>
                        )}

                        </div>                      
                    )}

                    {ourThinkingMenuOpen && (
                        <div className="text-[#d0d0ce]">
                        <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                    bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                            <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                        onClick={ () => {CloseAllMenus(); } }>
                                <div className="flex">
                                    <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                    <p className={`text-[16px] font-[500]  ml-[20px]`}> Main menu </p>
                                </div>
                            </div>

                            <div className="flex-col pl-[10px] pr-[10px]">
                                <div className="flex mt-[20px]">
                                    <p className="text-[25px] font-[300] text-[#d0d0ce]"> Our Thinking </p>
                                </div>

                                <div className="flex mt-[30px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllOurThinking(); setShowOurThinkingIndustryInsights(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                           Industry Insights
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                                <div className="flex mt-[20px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllOurThinking(); setShowOurThinkingINTELLI4Insights(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                            Intelli Insights
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>


                            </div>

                        </div>

                        {showOurThinkingIndustryInsights && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowOurThinkingIndustryInsights(false); setOurThinkingMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> Our Thinking </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Industry Insights </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>Healthcare </p>
                                        <p className="mt-[20px]">Financial Services </p>
                                        <p className="mt-[20px]">Insurance </p>
                                        <p className="mt-[20px]">M&A </p>
                                        <p className="mt-[20px]">Private Equity </p>
                                        <p className="mt-[20px]">Venture Capital </p>
                                        <p className="mt-[20px]">Hospitality </p>
                                    </div>

                                </div>

                            </div>
                        )}
                        
                        {showOurThinkingINTELLI4Insights && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowOurThinkingINTELLI4Insights(false); setOurThinkingMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500 ml-[20px]`}> Our Thinking </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Intelli Insights </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">
                                        <p>AI Agents Engineering </p>
                                        <p className="mt-[20px]">Generative AI </p>
                                        <p className="mt-[20px]">AI Assistants </p>
                                    </div>
                                </div>

                            </div>
                        )}


                        </div>                      
                    )}

                    {careersMenuOpen && (
                        <div className="text-[#d0d0ce]">
                        <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                    bg-black opacity-96 max-w-[450px] min-h-[1200px] overflow-y-scroll`}>

                            <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                        onClick={ () => {CloseAllMenus(); } }>
                                <div className="flex">
                                    <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                    <p className={`text-[16px] font-[500]  ml-[20px]`}> Main menu </p>
                                </div>
                            </div>

                            <div className="flex-col pl-[10px] pr-[10px]">
                                <div className="flex mt-[20px]">
                                    <p className="text-[25px] font-[300] text-[#d0d0ce]"> Careers </p>
                                </div>

                                <div className="flex mt-[30px] justify-between cursor-pointer"
                                    onClick = { () => {CloseAllCareers(); setShowCareersOpenRoles(true)}}
                                >
                                    <div className={`flex ${openSans.className} py-[5px]   place-content-center place-items-center`}>
                                        <h3 className="text-[17px] text-[#d0d0ce] font-[400] tracking-wide">
                                           Open Roles
                                        </h3>
                                    </div>
                                    <div className="flex bg-red-0 place-content-center place-items-center">
                                        <MdOutlineKeyboardArrowRight className=" text-[25px] text-white font-[100] " />
                                    </div>
                                </div>

                            </div>

                        </div>

                        {showCareersOpenRoles && (
                            <div className={`flex-col ${openSans.className}  fixed z-200 w-full top-0 left-0 pt-[20px] pb-[200px] pl-[20px] pr-[10px] 
                                        bg-black opacity-96 max-w-[450px] min-h-[1200px]  overflow-y-scroll`}>

                                <div className="flex justify-between cursor-pointer place-content-center place-items-center" 
                                            onClick={ () => {setShowCareersOpenRoles(false); setCareersMenuOpen(true); } }>
                                    <div className="flex">
                                        <MdOutlineKeyboardArrowLeft className="text-[27px] text-white" />
                                        <p className={`text-[16px] font-[500]  ml-[20px]`}> Careers </p>
                                    </div>
                                </div>

                                <div className="flex-col pl-[10px] pr-[10px]">
                                    <div className="flex mt-[20px]">
                                        <p className="text-[25px] font-[300] text-[#d0d0ce]"> Open Roles </p>
                                    </div>

                                    <div className="flex-col mt-[30px]">

                                    </div>

                                </div>

                            </div>
                        )}
                        

                        </div>                      
                    )}

                    <div className='flex-col mt-[160px] pl-[15px] text-white text-[13px]'>
                        <p className=''> Privacy </p>
                        <p className='mt-[16px]'> Terms of Use </p>
                        <p className='mt-[16px]'> Services </p>
                        <p className='mt-[16px]'> Cookie Policy </p>
                        <p className='mt-[16px]'> Cancellation & Refunds </p>
                        <p className='mt-[16px]'> Shipping</p>
                        <p className='mt-[16px]'> Legal </p>
                    </div>

                    <div className='flex mt-[40px] pl-[15px] pr-[25px] justify-between place-content-center place-items-center'>
                        <Link href={SOCIAL_LINKS.linkedin} target="_blank">
                            <div className="flex text-white">
                                <IoLogoLinkedin className='text-white text-[14px]' />
                                <p></p>
                            </div>
                        </Link>
                        
                        <Link href={SOCIAL_LINKS.youtube} target="_blank">
                            <div className="flex text-white">
                                <IoLogoYoutube className='text-white text-[14px]' />
                                <p className="text-[13px] ml-[4px] -mt-[1px]"></p>
                            </div>
                        </Link>

                        {/* <Link href={SOCIAL_LINKS.youtube2} target="_blank">
                            <div className="flex text-white mt-[1px]">
                                <IoLogoYoutube className='text-white text-[14px]' />
                                <p className="text-[10px] ml-[4px] -mt-[0px]">(2)</p>
                            </div>
                        </Link>

                        <Link href={SOCIAL_LINKS.youtube3} target="_blank">
                            <div className="flex text-white mt-[1px]">
                                <IoLogoYoutube className='text-white text-[14px]' />
                                <p className="text-[10px] ml-[4px] -mt-[0px]">(3)</p>
                            </div>
                        </Link>

                        <Link href={SOCIAL_LINKS.youtube4} target="_blank">
                            <div className="flex text-white mt-[1px]">
                                <IoLogoYoutube className='text-white text-[14px]' />
                                <p className="text-[10px] ml-[4px] -mt-[0px]">(4)</p>
                            </div>
                        </Link> */}

                        <Link href={SOCIAL_LINKS.twitter} target="_blank">
                            <div className="flex text-white">
                                <BsTwitterX className='text-white text-[12px]' />
                            </div>
                        </Link>

                        <Link href={SOCIAL_LINKS.facebook} target="_blank">
                            <div className="flex text-white">
                                <FaFacebookF className='text-white text-[14px]' />
                            </div>
                        </Link>

                        <Link href={SOCIAL_LINKS.github} target="_blank">
                            <div className="flex text-white">
                                <BsGithub className='text-white text-[14px]' />
                            </div>
                        </Link>

                    </div>

                    <div className='flex mt-[15px] pl-[15px] text-white place-content-center place-items-center'>
                        <FaRegCopyright className='text-[13px]' />
                        <p className='ml-[5px] text-[11px]'> {new Date().getFullYear()} Intelli </p>
                    </div>

                    
                </div>
                </>
                )}

            </navbar>

        </>
    )
}