import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Section from './sec';

export const metadata: Metadata = {
  title: "Why Vendor-Agnostic Matters in AI Agent Engineering | LangChain Solutions Management with Intelli",

  description: 'Discover why vendor-agnostic AI agent engineering ensures flexibility, cost optimization, ' + 
                'governance control, and future-ready enterprise AI systems.',
            
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

