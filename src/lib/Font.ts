import { Open_Sans, Source_Sans_3, Roboto_Mono, Roboto, Inter, Geist, Geist_Mono } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});


export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
  })

export const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',  
})

export const geist = Geist({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans', 
})

export const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',  
})

export const geistSans = Geist({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-geist-sans",

});

