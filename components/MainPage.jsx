import React from "react";
import Profile from "@/components/Profile";
import Task from "@/components/Task";

const MainPage = () => {
  return (
    <article className="flex flex-col justify-center items-center gap-y-4 ">
      <Profile />
      <Task />
    </article>
  );
};

export default MainPage;
