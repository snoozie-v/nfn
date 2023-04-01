import React from 'react'
import {useState } from 'react'
import Connex from "@vechain/connex"
import { Certificate } from 'thor-devkit'
import "antd/dist/reset.css";
import { Row, Col, Descriptions, Button } from "antd"


const connex = new Connex({
    node: "https://mainnet.veblocks.net",
    network: "main"
  });
  
console.log(connex.thor.genesis);

const TokenURIAbi = {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  };
  
  const balanceOf = {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  };
  
  const tokenOfOwnerByIndex = {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  };

export default function Wallet() {
  const [message, setMessage] = useState();
  const [certificate] = useState({
    purpose: "identification",
    payload: {
      type: "text",
      content: "to view Non-FungiBulls"
    }
  });
  const [verified, setVerified] = useState();
  const [nftImages, setNftImages] = useState([]);
  const [nftDescriptions, setNftDescriptions] = useState([]);
  const [nftTokenIds, setNftTokenIds] = useState([]);
  const [nftArtists, setNftArtists] = useState([]);
  const handleSigning = async () => {
    try {
      const signedMessage = await connex.vendor
        .sign("cert", certificate)
        .request();

      const userWallet = signedMessage.annex.signer;
      console.log(userWallet);
      verifySignature({
        ...certificate,
        ...signedMessage.annex,
        signature: signedMessage.signature
      });

      setMessage(signedMessage);
      await fetchNFTs(userWallet);
    } catch (err) {}
  };

  const verifySignature = async (signedCertificate) => {
    try {
      Certificate.verify(signedCertificate);
      setVerified("yes");
    } catch (err) {
      console.log(err);
      setVerified(err.message);
    }
  };

  async function fetchNFTs(userWallet) {
    const NFBULLS = connex.thor.account(
      "0xd64ae647c44bc1d2edde7c65d9605a0024b86c78"
    );

    const balance = NFBULLS.method(balanceOf);
    const nftID = NFBULLS.method(tokenOfOwnerByIndex);
    const nftURI = NFBULLS.method(TokenURIAbi);

    const output = await balance.call(userWallet);
    console.log(output.decoded[0]);
    const balanceValue = output.decoded[0];

    if (balanceValue > 0) {
      let images = [];
      let descriptions = [];
      let tokenIds = [];
      let artists = [];
      for (let i = 0; i < balanceValue; i++) {
        const nftIDOutput = await nftID.call(userWallet, i);
        const tokenId = nftIDOutput.decoded[0];

        const nftURIOutput = await nftURI.call(tokenId);
        const metadataResponse = await fetch(
          `https://ipfs.io/ipfs/${nftURIOutput.decoded[0].substr(7)}`
        );

        const metadata = await metadataResponse.json();
        const description = metadata.description;
        const imageUrl = metadata.image;
        const metaTokenId = metadata.tokenId;
        const artist = metadata.attributes[0].value;
        console.log(metadata);
        console.log(artist);
        const presentImage = await fetch(
          `https://ipfs.io/ipfs/${imageUrl.substr(7)}`
        );
        artists.push(artist);
        descriptions.push(description);
        tokenIds.push(metaTokenId);
        images.push(presentImage.url);
      }
      setNftArtists(artists);
      setNftTokenIds(tokenIds);
      setNftDescriptions(descriptions);
      setNftImages(images);
      return images;
    }
    return [];
  }

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col span={24} />
        <Col
          xs={{ span: 22, offset: 1 }}
          xl={{ span: 12, offset: 6 }}
          align="center"
        >
          <h1>Connect wallet to view Non FungiBulls</h1>
          <Button onClick={handleSigning}>Connect Wallet</Button>
        </Col>
        <Col xs={{ span: 22, offset: 1 }} xl={{ span: 12, offset: 6 }}>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="connected wallet address">
              {message?.annex?.signer}
            </Descriptions.Item>
            <Descriptions.Item label="verified">{verified}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <div>
        <div>
          {nftImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`NFT ${index} #${nftTokenIds[index]}`}
                style={{ width: "100%", height: "auto" }}
              />
              <Descriptions bordered column={1}>
                <Descriptions.Item label="Collection">
                  {nftDescriptions[index]}
                </Descriptions.Item>
                <Descriptions.Item label="Artist">
                  {nftArtists[index]}
                </Descriptions.Item>
                <Descriptions.Item label="tokenId">
                  {nftTokenIds[index]}
                </Descriptions.Item>
              </Descriptions>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}