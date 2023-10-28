import React from "react";
import Image from "next/image";
import Link from "next/link";

const contact = [
  {
    name: "github",
    href: "https://github.com/eben4ya/WebPemrogramanGamaforce",
    src: "/img/github-icon.svg",
  },
  {
    name: "lnkedin",
    href: "https://www.linkedin.com/in/benaya-imanuela/",
    src: "/img/linkedin-icon.svg",
  },
];

const Contact = () => {
  return (
    <section className="flex flex-row justify-center items-center gap-4 mt-4 ">
      {contact.map((item, index) => (
        <div className="relative w-[50px] h-[50px] " key={index}>
          <Link href={item.href}>
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="absoulte object-contain"
            />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Contact;
