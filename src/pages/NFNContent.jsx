import React from 'react'
import Footer from './Footer'

export default function NFNContent() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800 font-mono">
      <a href="https://medium.com/@nonfungiblenews1/non-fungible-news-letter-429f8dc052f0" target="_blank" rel="noopener noreferrer" className="p-4 flex flex-col justify-center items-center">
        <h3 className="text-blue-50 text-lg font-semibold mb-2">Check out our latest newsletter on Medium!</h3>
        <p class="text-gray-600 text-sm border-2 border-gray-400 py-1 px-2 rounded-lg bg-gray-100">Click to read now</p>


      </a>
      <div className="flex-grow min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <iframe className="w-full h-80" src="https://www.youtube.com/embed/CUtwomVoSfs" title="Bye Bye middleman, hello future!  KEEP MORE OF YOUR MONEY! #tech #money #shorts #blockchain" allowfullscreen></iframe>
      <iframe className="w-full h-80" src="https://www.youtube.com/embed/Dn5zguf7FgE" title="Understanding the $1.3 TRILLION dollar industry. #shorts #technology #money #motivation #learning"  allowfullscreen></iframe>

        <iframe className="w-full h-80" src="https://www.youtube.com/embed/lHGdHzM5EaQ" title="ETH hit $2,000 with Shanghai Hard Fork | BULLRUN INCOMING?! #shorts #ethereum #crypto" allowFullScreen />
        <iframe className="w-full h-80" src="https://www.youtube.com/embed/fFo3bZ_Oqbw" title="$30 BILLION needs better management strategy. #shorts #blockchain" allowFullScreen />
        <iframe className="w-full h-80" src="https://www.youtube.com/embed/y_gs2dlJfpc" title="Changing the way over 3,000,000,000 people game. #games #shorts #gaming" allowFullScreen />
        <iframe className="w-full h-80" src="https://www.youtube.com/embed/7bTb6pnugNA" title="Bitcoin back to $30,000 | What you need to know. #shorts #gold ##money" allowFullScreen />
      </div>
      <Footer className="mt-auto" />
    </div>
  )
}
