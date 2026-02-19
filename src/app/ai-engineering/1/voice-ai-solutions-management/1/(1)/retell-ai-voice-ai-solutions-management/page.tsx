import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import Section from './sec';

export const metadata: Metadata = {
  title: "Intelli | Retell AI Voice Solutions Management for 🇺🇸 USA & 🇨🇦 Canada",

  description: 'Choosing a vendor for AI agents shouldn’t mean surrendering control. If you’re building on the LangChain stack, ' + 
                'you should own the code, the graphs, the evals, and the bills. Intelli is a vendor‑agnostic engineering partner ' + 
                'across LangChain + LangGraph + LangSmith that ships agentic systems you can run, audit, and scale on your terms. ' + 
                'If you want a reliable, vendor‑agnostic partner for LangChain/LangGraph/LangSmith builds—and a team ' + 
                'that will own delivery end‑to‑end without owning your IP—let’s talk.',
            
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

