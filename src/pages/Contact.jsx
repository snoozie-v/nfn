import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <div className="">
        <div className="font-mono justify-center text-blue-50 bg-slate-800 justify-center">

      <div className="p-8 lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 text-base flex justify-center hover:underline">
                    <a href='https://discord.gg/6BjRw9KyTB'>Click Here for Discord Link</a>
                  </div>
      <div className="p-8 lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 text-base flex justify-center hover:underline">
                    <a href='https://twitter.com/Not_So_Fungible'>Click Here for Twitter Link</a>
                  </div>
                  
      <Footer className='bottom: 0px;'/></div>
    </div>
  )
}

export default Contact
