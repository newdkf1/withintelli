import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Section from './sec';

export const metadata: Metadata = {
  title: "Intelli | Why Build Local AI & On-Premise LLM Solutions",

  description: 'Explore the benefits of Local AI and on-premise Large Language Model (LLM) solutions. Intelli provides custom local AI development ' + 
                'for enterprises seeking data security, regulatory compliance, and full infrastructure control.',
            
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

