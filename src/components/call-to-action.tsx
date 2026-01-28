import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { SOCIAL_LINKS, PAGES_LINKS } from '@/lib/PagesLinks'

export default function CallToAction() {
    return (
        <section className="flex py-16 px-10">
            <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center mx-auto px-10 md:px-[250px]">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Request A Demo</h2>
                    <p className='mt-[20px]'>Grow more, do more with INTELLI4.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4 ">
                        {/* <Button
                            asChild
                            size="lg">
                            <Link href={PAGES_LINKS['get-started']} className='bg-black text-white'>
                                <span>Get Started</span>
                            </Link>
                        </Button> */}

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href={PAGES_LINKS['get-started']}>
                                <span>Request A Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
