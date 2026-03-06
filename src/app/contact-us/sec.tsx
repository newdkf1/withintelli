'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { RiCloseLargeFill } from "react-icons/ri";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { LeadFormSchema } from '@/components/forms/leadFormSchema'
import { sendEmail } from "@/actions/EmailAction";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

import ContactForm from '@/components/forms/contactForm';

import JUSBIZWM from '../../../public/co/jusbiz-wm.png'

export default function Section() {

    return (
    <>
        {/* desktop */}
        <div className='hidden md:flex'>

            <div className='flex-col w-full mx-auto'>

                <div className='flex-col w-full pt-[40px] pb-[30px] bg-black place-content-center place-items-center'>

                    <div className='flex pt-[10px] max-w-[1200px]'>
                        <h1 className={` text-center ${geistMono.className} text-white text-[120px] font-[100] tracking-[1px] leading-[200px] `}>
                            Migrating to ...
                        </h1>
                    </div>

                    <div className="flex w-[350px] h-[150px] -mt-[0px]">
                        <Image src={JUSBIZWM} width={350} height={150} alt="Business Operations Modernization with Intelli"/>                  
                    </div>     

                </div>
                

                <div className='flex pt-[40px] pb-[60px] pl-[15%] pr-[10%]  bg-green-0 place-content-center place-items-center'>

                    <ContactForm />

                </div>



            </div>

        </div>

        {/* mobile */}
        <div className='flex md:hidden'>

            <div className='flex-col w-full mx-auto'>

                <div className='flex-col w-full pt-[20px] pb-[10px] bg-black place-content-center place-items-center'>

                    <div className='flex pt-[10px] max-w-[400px]'>
                        <h1 className={` text-center ${geistMono.className} text-white text-[40px] font-[100] -tracking-[3px] leading-[40px] `}>
                            Migrating to ...
                        </h1>
                    </div>

                    <div className="flex w-[270px] h-[100px] mt-[20px]">
                        <Image src={JUSBIZWM} width={270} height={100} alt="Business Operations Modernization with Intelli"/>                  
                    </div>     

                </div>                

                <div className='flex pt-[40px] pb-[60px] pl-[15%] pr-[10%]  bg-green-0 place-content-center place-items-center'>

                    <ContactForm />

                </div>

            </div>

        </div>

    </>

)}