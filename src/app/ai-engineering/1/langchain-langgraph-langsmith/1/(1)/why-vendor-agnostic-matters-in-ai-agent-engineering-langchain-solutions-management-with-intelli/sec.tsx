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
import { GoDotFill } from "react-icons/go";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

import { DIM } from '@/lib/Dim'

import { SOCIAL_LINKS, PAGES_LINKS } from '@/lib/PagesLinks'
import { VIDEO_LINKS } from '@/lib/VideoArtifactsLinks';
import { DEMO_LINKS, BLOG_PRODS_LINKS } from '@/lib/BlogProdsLinks';

import ContactForm from '@/components/forms/contactForm';

export default function Section() {

    const home_welcome_video = VIDEO_LINKS['ai-engineering-1']['langchain-langgraph-langsmith']['1-(1)']
    
    const home_video_1_w = DIM['video-width-1']
    const home_video_1_h = DIM['video-height-1']
    const home_video_mob_1_w = DIM['video-width-2']
    const home_video_mob_1_h = DIM['video-height-2']

    return (
    <>
        {/* desktop */}
        <div className='hidden md:flex'>

            <div className='flex-col w-full mx-auto'>

                <div className='flex bg-black pt-[40px] pb-[5px]  place-content-center place-items-center'>
                    <iframe
                    width={home_video_1_w}
                    height={home_video_1_h}
                    allow="autoplay"
                    src={home_welcome_video}
                    title="welcome to intelli">
                    </iframe>
                </div>

                <div className='flex mt-[40px] pl-[15%] pr-[10%]  bg-green-0'>
                    <h1 className={`${roboto.className} text-black italic text-[40px] font-[600] leading-[50px] -tracking-[1px]`}>
                        Why vendor-agnostic matters in AI Agent engineering
                    </h1>
                </div>

                <div className='flex mt-[10px] pl-[15%] pr-[10%] bg-green-0'>
                    <h2 className={`${openSans.className} text-black text-[30px] font-[300] leading-[47px] tracking-[px]`}>
                        Choosing a vendor for AI agents shouldn’t mean surrendering control. If you’re building on the LangChain stack, 
                        you should own the code, the graphs, the evals, and the bills. 
                    </h2>
                </div>

                <div className='flex pl-[15%] pr-[5%] gap-[40px] justify-between'>
                    <div className='flex-col'>
                        <div className='flex mt-[0px]  bg-green-0'>
                            <h2 className={`${openSans.className} text-black italic text-[30px] font-[300] leading-[47px] tracking-[px]`}>
                                Intelli is a vendor‑agnostic engineering partner across LangChain + LangGraph + LangSmith that ships agentic systems you can run, 
                                audit, and scale on your terms.
                            </h2>
                        </div>

                        <div className='flex-col mt-[20px]  text-black bg-green-0' >
                            <h1 className={`${roboto.className} text-black italic text-[28px] font-[600] leading-[45px] -tracking-[1px]`}>
                                Why vendor‑agnostic matters
                            </h1>

                            <ul className='mt-[10px] ml-[20px]'>
                                <li className='flex'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            Avoid lock‑in: 
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                swap models (OpenAI/Anthropic/Google/vLLMs), vector stores (Pinecone/Weaviate/pgvector), and clouds without rewrites. 
                                            </span>    
                                        </p>
                                    </div>                                                   
                                </li>

                                <li className='flex mt-[10px]'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            Control cost/perf: 
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                route by task, cap tokens/steps, benchmark models, and negotiate infra—because you own the knobs.
                                            </span>      
                                        </p>
                                    </div>                                                     
                                </li>

                                <li className='flex mt-[10px]'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            Compliance by design: 
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                keep data in your VPC, enforce data residency, and audit every agent action.                                
                                            </span>     
                                        </p>
                                    </div>                                                    
                                </li>
                            </ul>
                        </div>

                        <div className='flex-col mt-[20px]   bg-green-0 text-black' >
                            <h1 className={`${roboto.className} text-black italic text-[28px] font-[600] leading-[45px] -tracking-[1px]`}>
                                How we implement with the LangChain ecosystem
                            </h1>

                            <ul className='mt-[10px] ml-[20px]'>
                                <li className='flex'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            LangGraph: 
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                explicit state machines for plan vs act; deterministic tools with preconditions, retries, and human‑in‑loop where needed.                                   
                                            </span>                            
                                        </p>
                                    </div>                                                   
                                </li>

                                <li className='flex mt-[10px]'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            LangSmith: 
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                traces, eval harnesses, groundedness/citation checks, cost and latency budgets, regression suites before every release.                                   
                                            </span>  
                                        </p>
                                    </div>                                                     
                                </li>

                                <li className='flex mt-[10px]'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            RAG that holds up in prod:
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                schema‑first chunking, hybrid search (BM25+dense), policy filters, citations/refusals (“no cite → no action”).                                 
                                            </span>    
                                        </p>
                                    </div>                                                    
                                </li>

                                <li className='flex mt-[10px]'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            Tool contracts: 
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                typed interfaces, idempotent side‑effects, pre/post‑conditions, audit logs—treat agents like microservices.
                                            </span>  
                                        </p>
                                    </div>                                                    
                                </li>

                                <li className='flex mt-[10px]'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                            Production hardening: 
                                            <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                                IaC, containerized runners, SBOM + pinned deps, CI/CD, observability (OpenTelemetry), optional Temporal for orchestration.                                  
                                            </span>                                         
                                        </p>
                                    </div>                            
                            
                                </li>                        
                            </ul>
                        </div>

                        <div className='flex-col mt-[20px]   bg-green-0  text-black'>
                            <h1 className={`${roboto.className} text-black text-[28px] font-[500] leading-[45px] -tracking-[1px]`}>
                                Ownership and IP
                            </h1>

                            <ul className='mt-[10px] ml-[20px]'>
                                <li className='flex'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                                            You own repos, prompts, graphs, eval datasets, and infra templates. No black boxes, no proprietary glue. Full handover and runbooks. 
                                        </p>
                                    </div>                                                   
                                </li>


                            </ul>
                        </div>

                        <div className='flex-col mt-[20px]   bg-green-0 text-black' >
                            <h1 className={`${roboto.className} text-black text-[28px] font-[500] leading-[45px] -tracking-[1px]`}>
                                Delivery model and outcomes
                            </h1>

                            <ul className='mt-[10px] ml-[20px]'>
                                <li className='flex'>
                                    <div className='flex'>
                                        <GoDotFill className='text-[24px] text-gray-600 '/>
                                    </div>
                                    <div className='flex ml-[6px]'>
                                        <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                                            4–6 week pilot to productionize one high‑value workflow with SLOs (accuracy, latency, escalate‑within, 
                                            rollback time) and ROI instrumentation (containment, AHT/cycle time, $/completion).                                
                                        </p>
                                    </div>                                                   
                                </li>


                            </ul>
                        </div>

                    </div>

                    <div className='flex'>
                        <ContactForm />
                    </div>

                </div>

                <div className='flex-col  pl-[15%] pr-[5%] mt-[20px]   bg-green-0 text-black' >
                    <h1 className={`${roboto.className} text-black text-[32px] font-[600] leading-[45px] -tracking-[1px]`}>
                        Conclusion
                    </h1>
                    <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                        If you want a reliable, vendor‑agnostic partner for LangChain/LangGraph/LangSmith builds—and a team that 
                        will own delivery end‑to‑end without owning your IP—let’s talk. Email us at support@withintelli.com
                    </p>
                </div>

                <div className='flex-col  pl-[15%] pr-[5%] mt-[60px] pb-[80px]   bg-green-0 text-black' >
                    <h1 className={`${roboto.className} text-black text-[18px] font-[400] leading-[45px] -tracking-[1px]`}>
                        Keywords
                    </h1>                    
                    <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                        #LangChain #LangGraph #LangSmith #AIAgents #AgenticAI #MLOps #EnterpriseAI #VendorAgnostic
                    </p>
                </div>

            </div>

        </div>


        {/* mobile */}
        <div className='flex md:hidden'>

            <div className='flex-col w-full mx-auto '>

                <div className='flex pt-[30px] pb-[2px] bg-black place-content-center place-items-center'>
                    <iframe
                    width={home_video_mob_1_w}
                    height={home_video_mob_1_h}
                    allow="autoplay"
                    src={home_welcome_video}
                    title="welcome to intelli">
                    </iframe>
                </div>

                <div className='flex mt-[20px] pl-[2%] pr-[2%]  bg-green-0'>
                    <h1 className={`${roboto.className} text-black italic text-[28px] font-[600] leading-[34px] -tracking-[1px]`}>
                        Why vendor-agnostic matters in AI Agent engineering
                    </h1>
                </div>

                <div className='flex mt-[15px] pl-[2%] pr-[2%]  bg-green-0'>
                    <h2 className={`${openSans.className} text-black italic text-[22px] font-[300] leading-[30px] tracking-[0px]`}>
                        Choosing a vendor for AI agents shouldn’t mean surrendering control. If you’re building on the LangChain stack, 
                        you should own the code, the graphs, the evals, and the bills. 
                        Intelli is a vendor‑agnostic engineering partner across LangChain + LangGraph + LangSmith that ships 
                        agentic systems you can run, audit, and scale on your terms.
                    </h2>
                </div>

                <div className='flex-col pl-[2%] pr-[2%] mt-[20px]   bg-green-0 text-black' >
                    <h1 className={`${roboto.className} text-black italic text-[28px] font-[600] leading-[38px] -tracking-[1px]`}>
                        Why vendor‑agnostic matters
                    </h1>

                    <ul className='mt-[10px] ml-[20px]'>
                        <li className='flex'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    Avoid lock‑in: 
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        swap models (OpenAI/Anthropic/Google/vLLMs), vector stores (Pinecone/Weaviate/pgvector), and clouds without rewrites. 
                                    </span>    
                                </p>
                            </div>                                                   
                        </li>

                        <li className='flex mt-[10px]'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    Control cost/perf: 
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        route by task, cap tokens/steps, benchmark models, and negotiate infra—because you own the knobs.
                                    </span>      
                                </p>
                            </div>                                                     
                        </li>

                        <li className='flex mt-[10px]'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    Compliance by design: 
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        keep data in your VPC, enforce data residency, and audit every agent action.                                
                                    </span>     
                                </p>
                            </div>                                                    
                        </li>
                    </ul>
                </div>

                <div className='flex-col pl-[2%] pr-[2%] mt-[20px]   bg-green-0 text-black' >
                    <h1 className={`${roboto.className} text-black italic text-[28px] font-[600] leading-[38px] -tracking-[1px]`}>
                        How we implement with the LangChain ecosystem
                    </h1>

                    <ul className='mt-[10px] ml-[20px]'>
                        <li className='flex'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    LangGraph: 
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        explicit state machines for plan vs act; deterministic tools with preconditions, retries, and human‑in‑loop where needed.                                   
                                    </span>                            
                                </p>
                            </div>                                                   
                        </li>

                        <li className='flex mt-[10px]'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    LangSmith: 
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        traces, eval harnesses, groundedness/citation checks, cost and latency budgets, regression suites before every release.                                   
                                    </span>  
                                </p>
                            </div>                                                     
                        </li>

                        <li className='flex mt-[10px]'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    RAG that holds up in prod:
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        schema‑first chunking, hybrid search (BM25+dense), policy filters, citations/refusals (“no cite → no action”).                                 
                                    </span>    
                                </p>
                            </div>                                                    
                        </li>

                        <li className='flex mt-[10px]'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    Tool contracts: 
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        typed interfaces, idempotent side‑effects, pre/post‑conditions, audit logs—treat agents like microservices.
                                    </span>  
                                </p>
                            </div>                                                    
                        </li>

                        <li className='flex mt-[10px]'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[600] -mt-[5px]`}>
                                    Production hardening: 
                                    <span className={` ${geistSans.className} text-[20px] font-[400] ml-[3px] -mt-[3px]`}>
                                        IaC, containerized runners, SBOM + pinned deps, CI/CD, observability (OpenTelemetry), optional Temporal for orchestration.                                  
                                    </span>                                         
                                </p>
                            </div>                            
                    
                        </li>                        
                    </ul>
                </div>

                <div className='flex-col pl-[2%] pr-[2%] mt-[20px]   bg-green-0 text-black' >
                    <h1 className={`${roboto.className} text-black text-[28px] font-[500] leading-[38px] -tracking-[1px]`}>
                        Ownership and IP
                    </h1>

                    <ul className='mt-[10px] ml-[20px]'>
                        <li className='flex'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                                    You own repos, prompts, graphs, eval datasets, and infra templates. No black boxes, no proprietary glue. Full handover and runbooks. 
                                </p>
                            </div>                                                   
                        </li>


                    </ul>
                </div>

                <div className='flex-col pl-[2%] pr-[2%] mt-[20px]   bg-green-0  text-black'>
                    <h1 className={`${roboto.className} text-black text-[28px] font-[500] leading-[38px] -tracking-[1px]`}>
                        Delivery model and outcomes
                    </h1>

                    <ul className='mt-[10px] ml-[20px]'>
                        <li className='flex'>
                            <div className='flex'>
                                <GoDotFill className='text-[24px] text-gray-600 '/>
                            </div>
                            <div className='flex ml-[6px]'>
                                <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                                    4–6 week pilot to productionize one high‑value workflow with SLOs (accuracy, latency, escalate‑within, 
                                    rollback time) and ROI instrumentation (containment, AHT/cycle time, $/completion).                                
                                </p>
                            </div>                                                   
                        </li>


                    </ul>
                </div>

                <div className='flex-col  pl-[2%] pr-[2%] mt-[20px]   bg-green-0 text-black' >
                    <h1 className={`${roboto.className} text-black text-[32px] font-[600] leading-[45px] -tracking-[1px]`}>
                        Conclusion
                    </h1>
                    <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                        If you want a reliable, vendor‑agnostic partner for LangChain/LangGraph/LangSmith builds—and a team that 
                        will own delivery end‑to‑end without owning your IP—let’s talk. Email us at support@withintelli.com
                    </p>
                </div>

                <div className='flex px-[1%] mt-[25px] place-content-center place-items-center'>
                    <ContactForm />
                </div>
                
                <div className='flex-col  pl-[2%] pr-[2%] mt-[60px] pb-[80px]   bg-green-0 text-black' >
                    <h1 className={`${roboto.className} text-black text-[18px] font-[400] leading-[45px] -tracking-[1px]`}>
                        Keywords
                    </h1>                    
                    <p className={` ${geistSans.className} text-[22px] font-[400] -mt-[5px]`}>
                        #LangChain #LangGraph #LangSmith #AIAgents #AgenticAI #MLOps #EnterpriseAI #VendorAgnostic
                    </p>
                </div>

            </div>

        </div>        
    </>
)}