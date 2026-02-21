import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Section from './sec';

export const metadata: Metadata = {
  title: "Intelli | Voice Automation and Customer Engagement Systems for 🇺🇸 USA & 🇨🇦 Canada SMBs and Enterprise",

  description: 'Intelli is a Retell AI and Voice AI solutions partner helping businesses implement, manage, and ' + 
                'scale intelligent voice automation and customer engagement systems.',
            
  twitter: {
    card: "summary_large_image"
  }
}


export default function Home() {


  return (

    <main className='overflow-hidden px-[0px] mx-auto' >

      <Navbar />

      <Section />

      <Footer />
      
    </main>
  )
}

