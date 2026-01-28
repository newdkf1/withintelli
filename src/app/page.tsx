import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import HomeHeroSection from '@/components/pages/HomePage/hero';

export default function Home() {


  return (

    <main className='overflow-hidden px-[0px] mx-auto' >

      <Navbar />

      <HomeHeroSection />

      <Footer />

      {/* <intelli4-convai agent-id="agent_3001k6eerbzyftwbmssx2fvbedwr"  ic-pos="rb2" ic-pos-mob="rb2" ></intelli4-convai>
      <script src="https://unpkg.com/@intelli4/convai-cw-embed" async type="text/javascript"></script> */}
      
    </main>
  )
}

