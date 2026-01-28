'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { RiCloseLargeFill } from "react-icons/ri";

import { LeadFormSchema } from '../../forms/leadFormSchema';
import { sendEmail } from "@/actions/EmailAction";

export default function GetStartedFormSection() {

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
        {/* light cream bg-[#fdf8ed] */}
        <div className='flex-col z-100 w-full h-screen min-h-[6500px] absolute top-0 left-0 bg-[#fdf8ed]  opacity-95'>

            <div className='flex pl-[20px] pt-[20px]'>
                <Link href="/">
                <RiCloseLargeFill className='text-[28px] text-gray-600' />
                </Link>
            </div>


        </div>

        <div className='flex-col w-full z-101  absolute top-[80px] left-0 place-content-center place-items-center'>

                <div className='flex-col px-[40px] pt-[30px] pb-[40px] bg-gray-200  min-h-[730px] w-[400px] md:w-[680px] opacity-100'>

                    <form className="space-y-10  " onSubmit={handleSubmit(submitForm)}>

                        <div className="flex w-full">
                            <label className="block w-[270px]">
                                <span className={`block text-blue-700 font-[300] text-[24px] mb-[4px]      `}>Name</span>
                                <input
                                    type="text"
                                    className="bg-white border border-gray-200 rounded-lg py-[12px] px-[15px] w-[350px] md:w-[450px] text-black text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                    // className={`block border text-slate-600 text-[18px] px-4 py-1 mt-[4px] rounded-lg border-gray-200 focus:bg-white focus:border-blue-600 focus:ring-0 outline-none w-full  disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`}
                                    {...register("name")}
                                    disabled={isSubmitting}
                                />
                            </label>
                            {errors.name && (
                                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="flex w-full">
                            <label className="block w-[270px]">
                                <span className={`block text-blue-700 font-[300] text-[24px] mb-[4px]      `}>Email</span>
                                <input
                                    type="Email"
                                    className="bg-white border border-gray-200 rounded-lg py-[12px] px-[15px] w-[350px] md:w-[450px] text-black text-[18px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none"
                                    {...register("email")}
                                    disabled={isSubmitting}
                                />
                            </label>
                            {errors.name && (
                                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="flex-col mt-[15px] text-slate-600">
                            <label className="block">
                                <span className={` text-blue-700 font-[300] text-[24px] mb-[4px]      `}>
                                    Company details and support requirements:

                                </span>
                                <span className={`block text-blue-700 font-[300] text-[16px] ml-[5px] mb-[4px]`}>
                                    (max 600 characters)
                                </span> 

                                <textarea
                                    rows={8}
                                    placeholder='eg., We are a real estate firm [Name: XYZ, Our website:xxxx] based in California, USA with 20 employees. We are looking for help with AI Voice Agent, Digital Marketing, CRM Setups, Web Design etc.'
                                    className={`bg-white border border-gray-200 rounded-lg py-[12px] px-[15px] w-[350px] md:w-[600px] text-gray-500 text-[15px] leading-[25px] focus:bg-white focus:border-blue-600 focus:ring-0 outline-none     `}
                                    {...register('comments')}
                                    disabled={isSubmitting}
                                />
                            </label>

                            {errors.comments && (
                                <p className='ml-1 text-sm text-red-400'>{errors.comments.message}</p>
                            )}

                        </div>       

                        {!disableSubmit && (
                            <button type="submit" disabled={disableSubmit}  className='flex bg-blue-400 w-[300px] text-white rounded-lg py-[20px] px-[20px]'>
                                SUBMIT
                            </button>
                        )}  

                        {disableSubmit && (
                            <div className='flex bg-gray-300 w-[300px] text-white rounded-lg py-[20px] px-[20px]'>
                                Submitting
                            </div>                            
                        )}     

                    </form>

                    {submitted && (
                        <p className='text-black'> Thank you. Your request has been submitted. Our support tem will reach out to you.</p>
                    )}


                </div>
        </div>
    </>

)}