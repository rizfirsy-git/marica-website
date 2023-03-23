import { useContext } from "react";
import { Provider } from "react-redux";
import store from "@/store/store";
import ThemeContext from "@/store/theme-context";
import Head from "next/head";
import Navbar from "@/widgets/Navbar";
import Footer from "@/widgets/Footer";
import Sidebar from "@/widgets/Sidebar";

const MainLayout = ({ children, title, icon }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="color-scheme" content="light dark" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <div id="container" className={`${theme ? "dark" : "light"} flex`}>
          <div className="max-w-xs grid grid-cols-1 place-content-center gap-4 bg-white lg:block lg:w-1/4 lg:h-screen fixed left-0 right-0 bottom-0 lg:sticky lg:top-0 lg:left-0 z-[999999]">
            <Sidebar />
          </div>
          <main id="container" className="relative w-full">
            <Navbar />
            <div className="relative min-h-screen bg-white dark:bg-slate-900 rounded-t-3xl md:rounded-t-none md:rounded-tl-3xl md:rounded-bl-3xl">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </Provider>
    </>
  );
};

export default MainLayout;
