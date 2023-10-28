import React from "react";
import Profile from "@/components/Profile";
import Task from "@/components/Task";
import Contact from "@/components/Contact";

const MainPage = () => {
  return (
    <article className="flex flex-col justify-center items-center gap-y-4 ">
      <Profile />
      <Task />
      <Contact />
    </article>
  );
};

export default MainPage;
