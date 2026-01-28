import Link from 'next/link'
import Image from 'next/image'

import React from 'react'
import TypewriterComponent from 'typewriter-effect';

import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LuArrowUpRight } from "react-icons/lu";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

import { PAGE_WIDTH_2 } from '@/lib/Dim'

import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'

import IntelliWMark from "../../public/co/intelli-wm.png"

import { SOCIAL_LINKS, PAGES_LINKS } from '@/lib/PagesLinks'
import { VIDEO_LINKS } from '@/lib/VideoArtifactsLinks';
import { DEMO_LINKS, BLOG_PRODS_LINKS } from '@/lib/BlogProdsLinks';

export default function Footer() {

    const video = ""

    return (
    <>
        {/* desktop */}
        <footer className='hidden md:flex '>

            <div className='flex-col min-h-[400px] w-full mx-auto px-[20px] pt-[30px] pb-[40px] bg-black '>

                <div className='flex w-full justify-between'>

                    <div className='flex bg-green-0 min-w-[350px]'>
                        <Link href="/" target=""> 
                            <div className="flex w-[150px] h-[60px] -mt-[0px]">
                                <Image src={IntelliWMark} width={150} height={60} alt="Intelli Logo"/>                  
                            </div>  
                        </Link>
                    </div>

                    <div className='flex-col w-full text-white bg-re'>
                        <div className='flex'>
                            <FaRegCopyright className='text-[20px]' />
                            <p className='ml-[5px]'> {new Date().getFullYear()} Intelli </p>
                        </div>

                        <div className={`flex ${openSans.className} `}>
                            <div className='flex'>
                                <p className='text-[18px] tracking-wide'> Privacy </p>
                            </div>
                            <div className='flex ml-[30px]'>
                                <p className='text-[18px] tracking-wide'> Terms of Use </p>
                            </div>
                            <div className='flex ml-[30px]'>
                                <p className='text-[18px] tracking-wide'> Services </p>
                            </div>                            
                            <div className='flex ml-[30px]'>
                                <p className='text-[18px] tracking-wide'> Cookie Policy </p>
                            </div>                            
                            <div className='flex ml-[30px]'>
                                <p className='text-[18px] tracking-wide'> Cancellation & Refunds </p>
                            </div>
                            <div className='flex ml-[30px]'>
                                <p className='text-[18px] tracking-wide'> Shipping </p>
                            </div>                                                                                                                                                                                            
                        </div>

                        <div className={`flex ${openSans.className} `}>
                            <div className='flex'>
                                <p className='text-[18px] tracking-wide'> Legal </p>
                            </div>
                            {/* <div className='flex ml-[30px]'>
                                <p className='text-[18px] tracking-wide'> Terms of Use </p>
                            </div>                                                                                                                                                                                       */}
                        </div>

                    </div>

                    <div className='flex min-w-[400px] justify-between '>
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

                </div>
                
            </div>

        </footer>


        {/* mobile */}
        <footer className='md:hidden'>
            <div className='flex-col pt-[50px] bg-black px-[17px] pb-[200px]'>

                <div className='flex-col text-white text-[13px]'>
                    <p className=''> Privacy </p>
                    <p className='mt-[16px]'> Terms of Use </p>
                    <p className='mt-[16px]'> Services </p>
                    <p className='mt-[16px]'> Cookie Policy </p>
                    <p className='mt-[16px]'> Cancellation & Refunds </p>
                    <p className='mt-[16px]'> Shipping</p>
                    <p className='mt-[16px]'> Legal </p>
                </div>

                <div className='flex mt-[25px] justify-between '>
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

                    <Link href={SOCIAL_LINKS.youtube} target="_blank">
                        <div className="flex text-white">
                            <BsTwitterX  className='text-white text-[13px]' />
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

                    <Link href={SOCIAL_LINKS.twitter} target="_blank">
                        <div className="flex text-white">
                            <BsTwitterX className='text-white text-[12px]' />
                        </div>
                    </Link> */}

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

                <div className='flex text-white mt-[20px] place-content-center place-items-center'>
                    <FaRegCopyright className='text-[13px]' />
                    <p className='ml-[5px] text-[11px]'> {new Date().getFullYear()} Intelli </p>
                </div>


            </div>
        </footer>


    </>
)}