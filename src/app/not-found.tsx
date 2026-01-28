import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function NotFound() {
    return (
      <>
      <Navbar />

      <div className='flex-col overflow-scroll'>

        <div className="flex pt-[20px] text-center text-black h-[600px]">
          <p className="text-3xl font-bold">The resource does not exist or has been migrated</p>
          <p className="text-3xl font-bold" >This page has been migrated or doesn&apos;t exist.</p>
        </div>
      </div>

      <Footer />

      

      </>
    );
  }

