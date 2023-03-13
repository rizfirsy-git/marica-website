import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

const links = [
  {
    pathname: "Serial",
    link: "/serial",
  },
  {
    pathname: "Film",
    link: "/film",
  },
  {
    pathname: "⭐Berlangganan",
    link: "/subscription",
  },
];

const Navbar = () => {
  const router = useRouter();
  console.log("router query:>", router);
  const urlRef = useRef("");

  useEffect(() => {
    urlRef.current = window.location.pathname;
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-bad-blueberry z-50">
      <div className="hidden md:block">
        <TextInput />
      </div>
      <div className="block md:hidden">
        {" "}
        <Link
          className="text-blueberry font-bold text-xl block py-4 hover:bg-indigo-100 rounded-xl pl-4"
          href="/"
        >
          Marica
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant={
            urlRef.current.slice(1) === "login" ? "secondary" : "primary"
          }
          isLink
          href="/login"
        >
          Masuk / Buat akun
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
