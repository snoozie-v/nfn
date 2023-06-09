// import React from 'react'
// import { Connex } from '@vechain/connex'
// import { useEffect, useState } from 'react'
// import { abi } from 'thor-devkit'





// const connex = new Connex({
//     node: 'https://mainnet.veblocks.net',
//     network: 'main'
//   })

//   const VESEA_COLLECTION_OFFER_ACCEPTED = new abi.Event({
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "nftAddress",
//         type: "address"
//       },
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256"
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "seller",
//         type: "address"
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "buyer",
//         type: "address"
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "price",
//         type: "uint256"
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "remainingQty",
//         type: "uint256"
//       }
//     ],
//     name: "CollectionOfferAccepted",
//     type: "event"
//   });

// const VESEA_ADDRESS = "0xdab185Ca52b70e087eC0990aD59C612c3d7aAb14";


// export default function Stats() {
//     const [transfers, setTransfers] = useState([]);


//     async function getTransfers() {
//         try {
//             const event = connex.thor.account(VESEA_ADDRESS).event(VESEA_ADDRESS);
//             const logs = await event
//                 .filter([{}])
//                 .range({
//                     unit:'time',
//                     from: 1672512000,
//                     to: 1675075200
//                 })
//                 .order('desc')
//                 .apply(0, 5)
//                 console.log(logs)
                
//                 } catch (error) {
//                   console.log(error);
//                 }
//               }
            
             
            
//   return (
//     <div>
//      stats
//     </div>
//   )
// }


