import React from 'react'
import { heroabout, tricky, tdogg, snoozie }from '../assets'


function About() {
  return (
    <div>
      <div className="font-mono justify-center text-blue-50">
          <div className='bg-slate-800 justify-center'>
            
                <img src={heroabout} className='p-4 justify-center'/>
                <div className='text-blue-50 p-4'>
                Non-Fungible News is a team of three guys who saw a void in the Vechain NFT 
                community that needed to be filled and set out on a mission to do just that. 
                Co-founders Boomer and Taylor have been at it since October of 2021 and have 
                not looked back. The team focuses on interviewing different project teams in 
                the space, with many doxxing (showing their faces) for the first time on their 
                YouTube channel. As they grow and generate more awareness, the goal is to travel 
                around doing live in-person interviews starting in the United States and eventually 
                taking to the rest of the globe.
                </div>

                <div className='p-4 grid grid-cols-2 gap-2'>
                <img src={tricky} className='pl-12 w-120 h-[480px]'></img>

                <div className=''>
                TrickyBoom, or just Boomer in real life, is just your average everyday guy. 
                Always working, tinkering with things, building things and trying to find
                a gig for the time and place. Married to Amanda, has 2 boys Brenton and Hank. 
                They enjoy spending time at the beach in the summer, skiing and sledding
                in the winter and hanging out as a family.<br></br>

                <br></br>Tricky got into crypto in early 2021 and being a mover and a shaker began
                learning the charts and day trading. Then came NFTs, game over. VePunks 
                was the first, then came VeKings and that was his one true love. Long 
                about fall of 2021, after realizing what NFTs are bringing to the world, 
                he launched Non-Fungible News, interviewing different projects in the 
                VeChain NFT ecosystem. Slowly but surely, his plans are coming together.
                </div>
                <img src={tdogg} className='pl-12 w-[410px] h-[480px]'></img>
                <div className='p-2'>Tdogg, or Taylor in real life is a good old fashioned cowboy. 
                He’s got himself a nice little ranch out in the country. Married to Chelsea with 
                3 daughters. Still very involved in the western lifestyle but enjoys learning new 
                things and bringing innovation to the table.<br></br>

                <br></br>Taylor came on shortly after NFN launched as the “idea man”. If you’ve been in 
                spaces with him you know why. He’s always thinking of ways to better Non-Fungible 
                News and the NFT industry as a whole.</div>

                <img src={snoozie} className='pl-12 w-[410px]'></img>
                <div>Snoozie has recently joined the NFN team to help where able.  Outside of 
                    VeChainNFTS Chris is married with two children and enjoys photographing
                    nature in sunny Phoenix, Arizona.  <br></br>

                    <br></br>The team plans to spread the word that #VeChainHasNFTS and it's our
                    belief that there will always be a story to be told.  This technoogy has grabbed
                    us and we know it will grab many others as VeChain gains popularity. <br></br>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About
