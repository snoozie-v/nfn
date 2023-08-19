

import mva from '../assets/mva.jpg'
import secret from '../assets/secret.jpg'
import bookclub from '../assets/book club.png'
import bffc from '../assets/bffc.png'
import blackvemarket from '../assets/blackvemarket.jpg'
import corgi from '../assets/corgi.jpg'
import cowboys from '../assets/cowboys.png'
import exo from '../assets/exo.jpg'
import goatz from '../assets/goatz.jpg'
import hero from '../assets/hero.png'
import kbk from '../assets/kbk.png'
import minomob from '../assets/minomob.jpg'
import vvardogs from '../assets/vvardogs.jpg'
import nonfungibulls from '../assets/nonfungibulls.png'
import inka from '../assets/inka.jpg'
import gangster from '../assets/gangstergor.jpg'
import nfn from '../assets/nfn.jpg'
import wov from '../assets/wov.png'
import vpunks from '../assets/vpunks.jpg'
import vfs from '../assets/vfs.jpg'
import venons from '../assets/venons.jpg'
import vekings from '../assets/vekings.png'
import vecalendar from '../assets/vecalendar.jpg'
import ukiyoe from '../assets/ukiyoe.jpg'
import paper from '../assets/paper.png'
import smuzzies from '../assets/smuzzies.jpg'
import psycho from '../assets/psychobeasts.jpg'
import stonerp from '../assets/stonerp.jpg'
import nonerds from '../assets/nonerds.jpg'
import sha from '../assets/sha.jpg'
import npo from '../assets/npo.jpg'
import Footer from './Footer'

import React from 'react'

function Home() {
    return (
        <div className="font-mono justify-center">
          <div className='bg-slate-800 justify-center'>
            
              <img src={hero} className='justify-center rounded-md'/>
              
             
              <div className='p-8 text-sm sm:text-lg lg:text-2xl 2xl:text-3xl sm:grid sm:grid-cols-3 sm:gap-2 sm:justify-items-center text-blue-50'>
                    
                    <div>
                    <div className='p-2 sm:flex font-bold font-lg sm:text-2xl lg:text-3xl 2xl:text-4xl'>Start Here</div>
                    <ul className='pb-4'>
                      <li className='hover:underline'><a href="https://docs.vechain.org/sync2/get-sync2">- Get Wallet</a></li>
                      <li className='hover:underline'><a href="https://docs.vechain.org/sync2/user-guide">- Wallet User Guide</a></li>
                      <li className='hover:underline'><a href="https://www.youtube.com/watch?v=sEg2leamt0g">- Collection Offers</a></li>
                      <li className='hover:underline'><a href="https://www.youtube.com/watch?v=sDxd0HeaVno">- How to mint</a></li>
                      <li className='hover:underline'><a href="https://vechain.energy/">- Dev Discord</a></li>
                    </ul>
                    </div>
                  <div>
                    <div className='p-2 sm:flex font-bold font-lg sm:text-2xl lg:text-3xl 2xl:text-4xl'>Foundation</div>
                    <ul className='pb-4'>
                      <li className='hover:underline'><a href="https://www.vechain.org">- VeChain.org</a></li>
                      <li className='hover:underline'><a href="https://www.vechain.org/assets/whitepaper/whitepaper-3-0.pdf">- Whitepaper 3.0</a></li>
                      <li className='hover:underline'><a href="https://www.vechain.org/sustainability/#building">- Sustainability</a></li>
                      <li className='hover:underline'><a href="https://docs.vechain.org/connex">- Documentation</a></li>
                      <li className='hover:underline'><a href="https://github.com/vechain/grant-program">- Grant Program</a></li>
                    </ul>
                  </div>
    
                  <div>
                    <div className='p-2 sm:flex font-bold font-lg sm:text-2xl lg:text-3xl 2xl:text-4xl'>Top Volume</div>
                    <ul className='pb-4'>
                      <li>- <a className="hover:underline" href="https://exoworlds.io/">Exo Worlds</a></li>
                      <li>- <a className="hover:underline" href="https://twitter.com/madvapesnft">Mad V Apes</a></li>
                      <li>- <a className="hover:underline" href="https://vesea.io/">Vekings</a></li>
                      <li>- <a className="hover:underline" href="https://vpunks.com/#/">VPunks</a></li>
                      <li>- <a className="hover:underline" href="https://twitter.com/Tradze_Town">Tradze Town</a></li>
                    </ul>
                  </div>
                  </div>
                  <div>
                  <img src={nonfungibulls} className='w-full' style={{ maxWidth: '100%', margin: '1rem auto', borderRadius: '10px' }} />

                  <div className="p-8  text-bold lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 text-base flex justify-center hover:underline">
                    <a href='https://non-fungibulls.com/mint'>NonFungiBulls Mint Page</a>
                  </div>
                  <div className="p-8 text-bold lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 text-base flex justify-center hover:underline">
                    <a href='https://medium.com/@nonfungiblenews1/subscribe'>Newsletter Signup</a>
                  </div>
                  </div>
                  <div className="p-8 text-bold lg:text-4xl md:text-3xl sm:text-2xl text-blue-50 flex text-base justify-center">Non-FungiBulls Artwork</div>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-2'>
                    
                  <img src={stonerp} className='flex w-full h-[420px] xl:h-[640px] rounded-md' />
                  <img src={exo} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={paper} className='flex w-full h-[420px] xl:h-[640px] rounded-md' />
                  <img src={vvardogs} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={minomob} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={ukiyoe} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={kbk} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={mva} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={bffc} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={cowboys} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={blackvemarket} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={bookclub} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={corgi} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={secret} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={inka} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={gangster} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={wov} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={vpunks} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={vfs} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={venons} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={vecalendar} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={smuzzies} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={psycho} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={sha} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={nonerds} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={npo} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={nfn} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={vekings} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  <img src={goatz} className='flex w-full h-[420px]  xl:h-[640px] rounded-md' />
                  </div>
                
                
              <Footer />
            </div>
        </div>
      )
}

export default Home
