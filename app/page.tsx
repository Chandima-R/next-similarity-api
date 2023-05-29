import Link from 'next/link'
import LargeHeading from './components/shared/LargeHeading'
import Paragraph from './components/shared/Paragraph'
import Image from 'next/image'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & opeb-source text similarity API',
}

export default function Home() {
  return (
    <div
      className='relative h-screen flex items-center justify-center oveflow-x-hidden'
    >
      <div
        className='container pt-32 max-w-7xl mx-auto w-full h-full'
      >
        <div
          className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'
        >
          <LargeHeading size='lg' className='three-d text-black dark:text-light-gold' text={''}>
            Easily Determine <br /> text similarity.
          </LargeHeading>
        
          <Paragraph className='max-w-xl lg:text-left' text={''}>
            With the text similarity API, you can easily determine the similarity between two texts with a free{' '}.
            <Link href='/login' className='underline underline-offset-2 text-black dark:text-light-gold'>API key</Link>
          </Paragraph>
          <div className='relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image 
              priority
              className='img-shadow'
              quality={100}
              style={{objectFit: 'contain'}}
              fill
              src='/typewriter.png'
              alt='typewriter'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
