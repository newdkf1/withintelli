import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Section from './sec';

import { IntelliDesc } from "@/lib/Consts";


export const metadata: Metadata = {
  title: {
    default: IntelliDesc["contact-us-title"],
    template: "%s"
  },
    
  description: IntelliDesc["contact-us-desc"],
            
  twitter: {
    card: "summary_large_image"
  },

}

export default function Page() {
    return (
    <>
      <main className='overflow-hidden px-[0px] mx-auto' >

        <Navbar />

        <Section />

        <Footer />
        
      </main>
    </>

)}