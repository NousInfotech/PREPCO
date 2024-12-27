import React from 'react'
import { images } from '../../../public/assets'
import Image from 'next/image'
import Link from 'next/link'
import { PlanHeroProps } from '@/types'

const Hero: React.FC<PlanHeroProps> = ({ title, duration, pricing }) => {

    const timeline = duration === 12 ? "One Year" : duration === 6 ? "6 Month" : "Not - Defined"

    return (
        <section className='p-16 flex flex-row gap-4 justify-between items-center'>
            <div className='flex flex-col gap-4'>
                <div>
                    <h2 className='bg-custom-gradient bg-clip-text text-transparent text-custom-48-bold'>{title}</h2>
                    <p className='text-custom-24 font-normal text-secondaryDark'>Plan Validation {timeline} - 2 Members</p>
                </div>
                <h2 className='bg-custom-gradient bg-clip-text text-transparent text-custom-48-bold'>
                    &#8377;{pricing.toFixed(2)}
                </h2>
                <button className='w-full text-custom-24 bg-primary text-white p-5 shadow-double-inset rounded-tl-br-30'>
                    Buy Now
                </button>
                <Link href='/testimonials' passHref >
                    <p className='text-center underline text-custom-16 text-secondaryDark'>Here it from our client testimonials</p>
                </Link>
            </div>
            <div>
                <Image width={529} height={529} src={images.svgs.dummyHero} alt="hero-image" />
            </div>
        </section>
    )
}

export default Hero


// Basic Wellness Plan
// Plan Validity One Year - 2 Members
// ₹4,999.00
// Buy Now
// Hear It From Our Clients Testimonials!