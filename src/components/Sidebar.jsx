import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <aside className="w-full h-full">
      <div className="md:block p-4 rounded-xl w-full h-full">
        <div className="h-full flex flex-col justify-between">
          <ul className="pt-1 fixed left-0 right-0 bottom-0 h-24 bg-white flex justify-center item-start lg:grid border border-t-2">
            <li className="hidden lg:block">
              <Logo />
            </li>
            <li>
              <Link
                className="block py-4 px-4 hover:bg-semangka/10 rounded-xl lg:pl-4"
                href="/activities"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-4 hover:bg-semangka/10 rounded-xl lg:pl-4"
                href="/browse"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-4 hover:bg-semangka/10 rounded-xl lg:pl-4"
                href="/watchlist"
              >
                Watchlist
              </Link>
            </li>
          </ul>
          <div className="hidden lg:grid grid-cols-1 gap-1 pt-4 border-t-2 border-semangka/20">
            <Link
              className="block py-4 px-4 hover:bg-semangka/10 rounded-xl lg:pl-4"
              href="/user-setting"
            >
              Setting
            </Link>
            <Link
              className="block py-4 hover:bg-semangka/10 rounded-xl pl-4"
              href="/help"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
