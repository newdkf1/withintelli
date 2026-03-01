import Link from 'next/link'
import Image from 'next/image'

import { GoDotFill } from "react-icons/go";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

import { DIM } from '@/lib/Consts'

import { SOCIAL_LINKS, PAGES_LINKS } from '@/lib/PagesLinks'
import { VIDEO_LINKS } from '@/lib/VideoArtifactsLinks';
import { DEMO_LINKS, BLOG_PRODS_LINKS } from '@/lib/BlogProdsLinks';

import ContactForm from '@/components/forms/contactForm';

export default function Section() {

    const video_1       = VIDEO_LINKS['ai-engineering-1']['intelli-ai-agents']['1-anthropic-(1)-anthropic-claude-code']
    const video_1_alt   = "Voice AI Solutions Management with Intelli"
    const video_1_w     = DIM['video-width-1'], video_1_h     =  DIM['video-height-1']
    const video_1_w_mob = DIM['video-width-2'], video_1_h_mob = DIM['video-height-2']


    return (
    <>
        {/* desktop */}
        <div className='hidden md:flex'>

            <div className='flex-col w-full mx-auto'>

                <div className='flex bg-black pt-[40px] pb-[5px]  place-content-center place-items-center'>
                    <iframe
                    width={video_1_w}
                    height={video_1_h}
                    allow="autoplay"
                    src={video_1}
                    title={video_1_alt}>
                    </iframe>
                </div>

                <div className='flex pt-[40px] pb-[60px]   bg-green-0 place-content-center place-items-center'>

                    <ContactForm />

                </div>



            </div>

        </div>


        {/* mobile */}
        <div className='flex md:hidden'>

            <div className='flex-col w-full mx-auto '>

                <div className='flex pt-[30px] pb-[2px] bg-black place-content-center place-items-center'>
                    <iframe
                    width={video_1_w_mob}
                    height={video_1_h_mob}
                    allow="autoplay"
                    src={video_1}
                    title={video_1_alt}>
                    </iframe>
                </div>

                <div className='flex pt-[0px] pb-[0px]  bg-green-0 place-content-center place-items-center'>

                    <ContactForm />

                </div>


            </div>

        </div> 
               
    </>
)}