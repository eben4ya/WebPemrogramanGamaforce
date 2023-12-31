import React from "react";
import Link from "next/link";

const list = [
  {
    task: "Program 3.1",

    url: "/3.1",
  },
  {
    task: "Program 3.2",
    url: "/3.2",
  },
  {
    task: "Program 3.3",
    url: "/3.3",
  },
];

const Task = () => {
  return (
    <section className="flex flex-col gap-y-6 mt-6 md:w-[300px] w-screen">
      {list.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className=" text-white text-2xl text-center font-semibold bg-black border-2 border-white  rounded-full p-2 hover:opacity-70"
        >
          {item.task}
        </Link>
      ))}
    </section>
  );
};

export default Task;
