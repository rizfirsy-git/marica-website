import MainLayout from "@/layout/MainLayout";
import React from "react";

const Help = () => {
  return (
    <article>
      <section className="p-4">Help</section>
    </article>
  );
};

Help.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Help;
