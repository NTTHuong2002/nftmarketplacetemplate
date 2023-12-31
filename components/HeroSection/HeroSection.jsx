import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {

  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" handleClick={() => {}} />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;