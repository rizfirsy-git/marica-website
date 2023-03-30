import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/theme";
import Button from "@/components/buttons/Button";

import {
  faCaretDown,
  faBell,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../components/Logo";
import Link from "next/link";
import Image from "next/image";
import woman from "@/icons/woman.png";
import lightmode from "@/images/lightmode.png";
import darkmode from "@/images/darkmode.png";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.theme.theme);
  const { isLoading, error, userInfo } = useSelector((state) => state.user);
  console.log("userInfo: ", userInfo);

  return (
    <header className="w-full relative p-4 flex justify-between items-center bg-white z-50">
      <div className="w-fit flex gap-1 justify-between items-center">
        <Logo />
      </div>
      <div className="relative w-full h-full flex justify-between items-center gap-2">
        {profileMenu && (
          <div className="max-w-xs w-fit absolute z-[999999] top-10 right-0 p-4 rounded-xl bg-white border-2 border-pink-400">
            <ul className="border-b-2 border-pink-200 pb-2 mb-3 grid gap-1 w-full drop-shadow-xl">
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/my-profile"
                  className="block p-2 hover:bg-pink-100 rounded-lg cursor-pointer text-slate-600"
                >
                  My profile
                </Link>
              </li>
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/user-setting"
                  className="block p-2 hover:bg-pink-100 rounded-lg cursor-pointer text-slate-600"
                >
                  Settings
                </Link>
              </li>

              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/"
                  className="block p-2 hover:bg-pink-100 rounded-lg cursor-pointer text-slate-600"
                >
                  Logout
                </Link>
              </li>
            </ul>
            <button
              className="p-2 rounded-lg text-slate-600 bg-pink-100 w-full flex justify-between items-center"
              type="button"
              onClick={() => dispatch(toggleTheme())}
            >
              <p className="w-full text-left">Dark mode</p>
              <div>
                <Image
                  src={appTheme === "light" ? lightmode : darkmode}
                  alt={appTheme === "light" ? "day mode" : "night mode"}
                  width={200}
                  height={32}
                  className="rounded-lg"
                />
              </div>
            </button>
          </div>
        )}
        <div className="w-full flex gap-2 md:gap-4 justify-end items-center">
          {userInfo && (
            <Link
              href="/subscription"
              className="text-pink-700 flex justify-start items-center gap-1 w-fit py-1 px-2 rounded-xl bg-gradient-to-t from-pink-400 to-pink-200 text-xs border-2 border-pink-300 hover:text-white"
            >
              <FontAwesomeIcon icon={faCrown} height={14} />
              <p className="text-white">Upgrade ke Pro</p>
            </Link>
          )}
          {userInfo && (
            <div className="hover:text-pink-600 text-slate-600 cursor-pointer">
              <FontAwesomeIcon icon={faBell} height={20} />
            </div>
          )}
          {userInfo ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setProfileMenu(!profileMenu)}
            >
              <Image
                src={woman}
                alt="Rica"
                width={32}
                height={32}
                className="rounded-full bg-pink-600"
              />
              <p className="text-slate-600 hidden lg:flex items-center gap-2">
                <span>{userInfo.nama}</span>
                <FontAwesomeIcon icon={faCaretDown} height={14} />
              </p>
            </div>
          ) : (
            <Button isLink type="button" variant="secondary" href="/login">
              Masuk ke Marica
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
