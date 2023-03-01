import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
        <div className='bg-gray-100 h-screen flex justify-center items-center flex-col'>
  
            <header className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-[#D5D0ED] text-center mb-4">Keep your <span className='text-[#2D2926]'>will</span> safe and secure</h1>
                <p className='text-center text-2xl'>Store them with us</p>
            </div>
            </header>
            <section className=' w-100 bg-white shadow-2xl p-6 rounded-2xl flex justify-center items-center flex-col mt-20'>
               <p className='font-bold'>Login As</p>
                <div className='mt-7 flex flex-row space-x-7 justify-center'>
                    <Button isPrimary={true}><Link href={{pathname : "/signin", query: {"user":"testator"}}}>Testator</Link></Button> 
                    <Button isPrimary={false}><Link href={{pathname : "/signin", query: {"user":"beneficiary"}}}>Beneficiary</Link></Button> 
                </div>
            </section>
            <p className='mt-5'>Do you want to proclaim death of a testator? <Link href={{pathname : "/signin", query: {"user":"beneficiary"}}}>Family Doctor</Link></p>
        </div>
   
  )
}

export default Hero