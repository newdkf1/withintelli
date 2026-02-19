'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { RiCloseLargeFill } from "react-icons/ri";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { LeadFormSchema } from './leadFormSchema'
import { sendEmail } from "@/actions/EmailAction";

import { geist, geistMono, geistSans, roboto, robotoMono, inter, sourceSansPro, openSans } from "@/lib/Font";

export default function ContactForm () {

    const [submitted, setSubmitted] = useState(false)

    const [disableSubmit, setDisableSubmit] = useState(false)
    
    type FormSchemaType = z.infer<typeof LeadFormSchema>;

    const { register, handleSubmit, watch, reset, trigger, getValues, formState: { errors, isSubmitting }} = 
            useForm<FormSchemaType>({resolver: zodResolver(LeadFormSchema)})

    const submitForm: SubmitHandler<FormSchemaType> = data => {
        setDisableSubmit(true);
        console.log("Started SUBMITTING");
        console.log(data);
        console.log("==")
        console.log(getValues())
        send(); 
    }

    const send = async () => {
        const result = await sendEmail(getValues())
        if (result.success) {
            console.log("Successfully submitted");
            console.log(result)
            setDisableSubmit(false);
            setSubmitted(true);
        }    
        if (!result.success) {
            console.log("error");
        }

    }


    return (
    <>

        {/* desktop */}
        {/* <div className='hidden md:block'>
            <div className='flex-col w-full bg-[#0d0047]  pb-[100px]'>


                <div className='flex pt-[50px] place-content-center place-items-center'>

                    <div className='flex-col pt-[40px] pb-[60px] pl-[30px] pr-[20px] w-[600px] min-h-[700px] bg-gray-200 rounded-lg border-[2px] border-gray-700  '>

                        <form className={` ${geistSans.className} `} onSubmit={handleSubmit(submitForm)}>

                            <div className="flex w-full">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Your Name</span>
                                    <input
                                        type="text"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[450px] text-gray-600 text-[18px] font-[300] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("name")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.name && (
                                    <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="flex w-full mt-[40px]">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Your Business Name</span>
                                    <input
                                        type="text"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[450px] text-gray-600 text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("businessName")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.businessName && (
                                    <p className="text-sm text-red-600 mt-1">{errors.businessName.message}</p>
                                )}
                            </div>

                            <div className="flex w-full mt-[40px]">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Employee Size</span>
                                    <input
                                        type="text"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[450px] text-gray-600 text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("employeeSize")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.employeeSize && (
                                    <p className="text-sm text-red-600 mt-1">{errors.employeeSize.message}</p>
                                )}
                            </div>

                            <div className="flex w-full mt-[40px]">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Your Work Email</span>
                                    <input
                                        type="Email"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[450px] text-gray-600 text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("email")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.email && (
                                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="flex-col mt-[40px] text-slate-600">
                                <label className="block">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Support Requirements</span>

                                    <textarea
                                        rows={8}
                                        placeholder= " We are a hospital based in Arizona. We are looking for AI workflow automations for patient bookings. "
                                        className={`bg-white border border-gray-600 pt-[10px] px-[15px] w-[450px] text-gray-500 text-[12px] font-[300] leading-[17px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none     `}
                                        {...register('comments')}
                                        disabled={isSubmitting}
                                    />
                                </label>

                                {errors.comments && (
                                    <p className='ml-1 text-sm text-red-400'>{errors.comments.message}</p>
                                )}

                            </div>       

                            {!disableSubmit && (
                                <button type="submit" disabled={disableSubmit}  className='flex   '>
                                    <div className='flex border-[0px] border-[#2600dfff] rounded-xl '>
                                        <div className="flex rounded-lg pl-[20px] py-[18px] w-[300px] bg-gradient-to-r from-[#2600dfff] to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-blue-600 dark:focus:ring-blue-800">
                                            <p className={`${openSans.className} text-[34px] text-white font-[400] text-left`}> Submit </p>
                                        </div>
                                    </div>
                                </button>
                            )}  

                            {disableSubmit && (
                                <div className='flex border-[0px] border-[#2600dfff] rounded-xl'>
                                    <div className="flex rounded-lg pl-[20px] py-[18px] w-[300px] bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-bl focus:ring-blue-600 dark:focus:ring-blue-800">
                                        <p className={`${openSans.className} text-[32px] text-white font-[400]`}> Submitting ... </p>
                                    </div>
                                </div>                   
                            )}   

                        </form>

                        {submitted && (
                            <p className='text-gray-500 text-[20px] leading-[24px] mt-[20px]'> Thank you. Your request has been submitted. Our support tem will reach out to you.</p>
                        )}

                    </div>

                </div>

            </div>

        </div> */}

     

        {/* mobile */}
        <div className='flex '>

            {/* bg-[#0d0047] */}
            
            <div className='flex-col w-full  h-fit pb-[100px] px-[10px]'>


                <div className='flex pt-[50px] place-content-center place-items-center'>

                    <div className='flex-col pt-[40px] pb-[60px] pl-[10px] pr-[20px] w-[360px] min-h-[700px] bg-gray-200 rounded-lg border-[1px] border-gray-400  '>

                        <form className={` ${geistSans.className} `} onSubmit={handleSubmit(submitForm)}>

                            <div className="flex w-full">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Your Name</span>
                                    <input
                                        type="text"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[330px] text-gray-600 text-[18px] font-[300] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("name")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.name && (
                                    <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="flex w-full mt-[40px]">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Your Business Name</span>
                                    <input
                                        type="text"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[330px] text-gray-600 text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("businessName")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.businessName && (
                                    <p className="text-sm text-red-600 mt-1">{errors.businessName.message}</p>
                                )}
                            </div>

                            <div className="flex w-full mt-[40px]">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Employee Size</span>
                                    <input
                                        type="text"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[330px] text-gray-600 text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("employeeSize")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.employeeSize && (
                                    <p className="text-sm text-red-600 mt-1">{errors.employeeSize.message}</p>
                                )}
                            </div>

                            <div className="flex w-full mt-[40px]">
                                <label className="block w-[270px]">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Your Work Email</span>
                                    <input
                                        type="Email"
                                        className="bg-white border border-gray-600 h-[60px] py-[12px] px-[15px] w-[330px] text-gray-600 text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                        {...register("email")}
                                        disabled={isSubmitting}
                                    />
                                </label>
                                {errors.email && (
                                    <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="flex-col mt-[40px] text-slate-600">
                                <label className="block">
                                    <span className={`block text-gray-700 font-[500] text-[19px] mb-[4px]  `}><sup className='mr-[5px] text-[15px]'>*</sup>Your Business Goals with Intelli</span>

                                    <textarea
                                        rows={8}
                                        placeholder= ""
                                        className={`bg-white border border-gray-600 pt-[10px] px-[15px] w-[330px] text-gray-500 text-[12px] font-[300] leading-[17px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none     `}
                                        {...register('comments')}
                                        disabled={isSubmitting}
                                    />
                                </label>

                                {errors.comments && (
                                    <p className='ml-1 text-sm text-red-400'>{errors.comments.message}</p>
                                )}

                            </div>       

                            {!disableSubmit && (
                                <button type="submit" disabled={disableSubmit}  className='flex   '>
                                    <div className='flex border-[0px] border-[#2600dfff] rounded-xl '>
                                        <div className="flex rounded-lg pl-[20px] py-[18px] w-[300px] bg-gradient-to-r from-[#2600dfff] to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-blue-600 dark:focus:ring-blue-800">
                                            <p className={`${openSans.className} text-[34px] text-white font-[400] text-left`}> Submit </p>
                                        </div>
                                    </div>
                                </button>
                            )}  

                            {disableSubmit && (
                                <div className='flex border-[0px] border-[#2600dfff] rounded-xl'>
                                    <div className="flex rounded-lg pl-[20px] py-[18px] w-[300px] bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-bl focus:ring-blue-600 dark:focus:ring-blue-800">
                                        <p className={`${openSans.className} text-[34px] text-white font-[400]`}> Submitting ... </p>
                                    </div>
                                </div>                   
                            )}     

                        </form>

                        {submitted && (
                            <p className='text-gray-500 text-[20px] leading-[24px] mt-[20px]'> Thank you. Your request has been submitted. Our support tem will reach out to you.</p>
                        )}

                    </div>

                </div>

            </div>

        </div>       

    </>
)}