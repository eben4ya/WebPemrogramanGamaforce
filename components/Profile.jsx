"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  return (
 
      <section className="flex flex-col justify-center items-center text-white text-2xl md:text-4xl ">
        <div className="relative w-[200px] h-[200px] rounded-full bg-[#181818] ">
          <Image
            src="/img/profile.png"
            alt="profile"
            fill
            className="absolute object-contain rounded-full"
          />
        </div>
        <h1 className="font-extrabold mt-6">
          <span className="">Hello, </span>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm Eben",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I'm TIF 22",
              1000,
              "I ❤️ Webdev & ML",
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-lg ">see my gamaforce assignment</p>
      </section>
    
  );
};

export default Profile;
