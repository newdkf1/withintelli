import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Section from './sec';

export const metadata: Metadata = {
  title: "Intelli | Anthropic Claude Code Solutions Management for SMBs and Enterprise",

  description: 'Intelli delivers Anthropic Claude Code solutions management, enabling secure AI development, automation, prompt engineering, and enterprise-scale AI integration.', 

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

