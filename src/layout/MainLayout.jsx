import { useState } from "react";
import { ModalContext } from "@/libs/context/modal-context";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import LoginButton from "@/components/buttons/LoginButton";

const MainLayout = ({ children, title, icon }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalContext.Provider
        value={{
          isShow: showModal,
          toggleModal: toggleModalHandler,
        }}
      >
        <div className="flex">
          <div className="w-full grid place-content-center gap-4 bg-white lg:block lg:w-1/4 lg:h-screen fixed left-0 right-0 bottom-0 lg:sticky lg:top-0 lg:left-0 z-[999999]">
            <Sidebar />
          </div>
          <main id="container" className="relative w-full">
            <Navbar />
            <div className="bg-slate-100 min-h-screen rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </ModalContext.Provider>
    </>
  );
};

export default MainLayout;
