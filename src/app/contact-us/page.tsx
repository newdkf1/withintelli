import Image from 'next/image'
import Link from "next/link";

import { Metadata } from 'next';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import PageContent from './content';

export const metadata: Metadata = {
  title: "Contact Us",

  description: 'Intelli is a global IT and business consulting firm that partners with organizations to modernize operations, strengthen digital foundations, and enable sustainable growth. ' + 
                'Intelli advises businesses, enterprises, and institutions across enterprise technology, digital platforms, large-scale transformation programs, managed growth and enterprise turnaround. ' + 
                'Our work spans technology and innovation management, digital transformation, business process optimization, data systems, and enterprise software services, helping organizations ' + 
                'operate more efficiently, scale with confidence, and adapt continuously in changing markets. ' + 
                'We take a problem-first, business-aligned approach, working closely with leadership teams to design, build, and manage mission-critical digital systems ' + 
                'that support both immediate operational needs and long-term strategic objectives. Our engagements typically include ' + 
                'both build and managed services, aligned to clients’ operational, governance, and growth mandates.' + 
                'Intelli operates as a vendor-agnostic partner, offering both build and managed services tailored to clients’ operational, governance, and long-term growth needs.',
            
  twitter: {
    card: "summary_large_image"
  }
}


export default function Page() {
    return (
    <>
        <contactuspage className='px-[0px] mx-auto' >


        <PageContent />


        </contactuspage>
    </>

)}