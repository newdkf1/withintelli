import Link from 'next/link'
import Image from 'next/image'

import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

import { DIM } from '@/lib/Consts'

import { SOCIAL_LINKS, PAGES_LINKS } from '@/lib/PagesLinks'
import { VIDEO_LINKS } from '@/lib/VideoArtifactsLinks';
import { DEMO_LINKS, BLOG_PRODS_LINKS } from '@/lib/BlogProdsLinks';

import BOMBigIMG from '../../../../public/co/bom_big.png'
import BOMSMIMG from '../../../../public/co/bom_small.png'

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


                <div className='flex w-full pt-[40px] pb-[1px] bg-black place-content-center place-items-center'>
                    <iframe
                    width={home_video_1_w}
                    height={home_video_1_h}
                    allow="autoplay"
                    src={home_welcome_video}
                    title="welcome to intelli">
                    </iframe>
                </div>


                <div className='flex-col pt-[30px] pb-[30px] w-full bg-[#fff] mx-auto   place-content-center place-items-center'>

                    <div className="flex w-[1200px] h-[700px] -mt-[0px]">
                        <Image src={BOMBigIMG} width={1200} height={700} alt="Business Operations Modernization with Intelli"/>                  
                    </div>                         

                    <div className='flex pt-[10px] max-w-[1200px]'>
                        <h1 className={` text-center ${openSans.className} text-black text-[120px] font-[100] tracking-[1px] leading-[200px] `}>
                            Business Operations Modernizations
                        </h1>
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

                <div className='flex-col pt-[30px] pb-[20px] w-full bg-[#fff] mx-auto   place-content-center place-items-center'>

                    <div className="flex w-[400px] h-[240px] -mt-[0px]">
                        <Image src={BOMSMIMG} width={400} height={240} alt="Business Operations Modernization with Intelli"/>                  
                    </div>                         

                    <div className='flex px-[10px] pt-[10px] max-w-[400px]'>
                        <h1 className={` text-center ${openSans.className} text-black text-[30px] font-[100] tracking-[1px] leading-[60px] `}>
                            Business Operations Modernizations
                        </h1>
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