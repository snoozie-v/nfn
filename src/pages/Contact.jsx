import React from 'react'
import Footer from './Footer'
import hero from '../assets/hero.png'
import nfn from '../assets/nfn.jpg'
import vekings from '../assets/vekings.png'

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <img src={hero} className='justify-center rounded-md'/>
      <div className="flex-grow font-mono justify-center text-blue-50 bg-slate-800 justify-center">
        <div className="p-8 lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 text-base flex justify-center hover:underline">
          <a href='https://medium.com/@nonfungiblenews1/subscribe'>Click Here for Newsletter Sign up</a>
        </div>
        <div className="p-8 lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 text-base flex justify-center hover:underline">
          <a href='https://discord.gg/6BjRw9KyTB'>Click Here for Discord Link</a>
        </div>
        <div className="p-8 lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 text-base flex justify-center hover:underline">
          <a href='https://twitter.com/Not_So_Fungible'>Click Here for Twitter Link</a>
        </div>
        <div className='sm:grid sm:grid-cols-3 sm:gap-2'>
        <img src={nfn} className='flex w-full h-[480px] xl:w-full xl:h-[640px] rounded-md' />
        <img src={vekings} className='flex w-full h-[480px] xl:w-full xl:h-[640px] rounded-md' />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
