import React, {useState, useEffect, useContext} from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css"
import {HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex";

const Home = () => {
  return (
  <div className={Style.homePage}>
    <HeroSection/>
    <Service/>
    <BigNFTSilder/>
    <Title
    heading="Audio Collection"
    paragraph="Discover the most outstanding NFTs in all topics of life."
    />
    <AudioLive/>
    <Slider/>
    <FollowerTab/>
    <Collection/>
    <Title
    heading="Featured NFTs"
    paragraph="Discover the most outstanding NFTs in all topics of life."
    />
    <Filter/>
    <NFTCard/>
    <Title
    heading="Audio Collectio"
    paragraph="Discover the most outstanding NFTs in all topics of life."
    />
    <Category/>
    <Subscribe/>
    <Brand/>
    <Video/>



  </div>)
};

export default Home;