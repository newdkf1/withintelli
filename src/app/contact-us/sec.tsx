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


export default function Section() {

    return (
    <>
        {/* desktop */}
        <div className='hidden md:flex'>

            <div className='flex-col w-full mx-auto'>


                <div className='flex pt-[40px] pb-[60px] pl-[15%] pr-[10%]  bg-green-0 place-content-center place-items-center'>

                    <ContactForm />

                </div>



            </div>

        </div>

        {/* mobile */}
        <div className='flex md:hidden'>

            <div className='flex-col w-full mx-auto'>

                <div className='flex pt-[40px] pb-[60px] pl-[15%] pr-[10%]  bg-green-0 place-content-center place-items-center'>

                    <ContactForm />

                </div>

            </div>

        </div>

    </>

)}