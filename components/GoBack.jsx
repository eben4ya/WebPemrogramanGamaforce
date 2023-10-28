import React from "react";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

const GoBack = () => {
  return (
    <Link href="/" className=" text-white border border-white p-2 rounded-full self-start ">
      <TbArrowBackUp className="text-white" />
    </Link>
  );
};

export default GoBack;
