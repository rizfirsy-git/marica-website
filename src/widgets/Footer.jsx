import Link from "next/link";
import Logo from "../components/Logo";

const footerLinks = [
  {
    pathname: "Tentang Marica",
    link: "/about",
  },
  {
    pathname: "Syarat penggunaan",
    link: "/syarat",
  },
  {
    pathname: "Kebijakan privasi",
    link: "/termsConditions",
  },
  {
    pathname: "Tanya jawab",
    link: "/about",
  },
];

const Footer = () => {
  return (
    <footer className="px-4 py-4 pb-28 md:pb-4 md:p-8 bg-white w-full grid gap-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <Logo />
          <ul className="flex flex-col md:flex-row items-center md:items-start gap-4 text-arang">
            {footerLinks.map((link) => (
              <li key={link.pathname}>
                <Link href={link.link} className="hover:text-pink-600 text-sm">
                  {link.pathname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <p className="mb-2 text-sm">Unduh aplikasi Marica</p>
          <ul className="flex items-center gap-4">
            <li className="bg-gradient-to-r from-pink-600 to-pink-400 rounded-lg grid place-content-center">
              <Link
                className="py-1 px-2 flex items-center"
                href="http://play.google.com/"
              >
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4.92051V18.0788C4.00009 18.1074 4.0086 18.1353 4.02448 18.159C4.04035 18.1827 4.06287 18.2012 4.08923 18.2122C4.11558 18.2232 4.14459 18.2261 4.17261 18.2207C4.20064 18.2152 4.22643 18.2016 4.24676 18.1816L11.0981 11.5L4.24676 4.81772C4.22643 4.79768 4.20064 4.78408 4.17261 4.77864C4.14459 4.7732 4.11558 4.77615 4.08923 4.78713C4.06287 4.79811 4.04035 4.81662 4.02448 4.84035C4.0086 4.86408 4.00009 4.89196 4 4.92051ZM13.9709 8.7545L5.38012 4.02153L5.37476 4.01851C5.22677 3.93816 5.08615 4.13838 5.20735 4.2549L11.9415 10.6941L13.9709 8.7545ZM5.20802 18.7451C5.08615 18.8616 5.22677 19.0618 5.37543 18.9815L5.38079 18.9785L13.9709 14.2455L11.9415 12.3052L5.20802 18.7451ZM17.4389 10.663L15.0399 9.34177L12.7843 11.5L15.0399 13.6572L17.4389 12.337C18.0914 11.9764 18.0914 11.0236 17.4389 10.663Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white text-sm">Playstore</p>
              </Link>
            </li>
            <li className="bg-gradient-to-r from-pink-600 to-pink-400 rounded-lg grid place-content-center">
              <Link
                className="py-1 px-2 flex items-center"
                href="http://appstore.com/"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4C16.4184 4 20 7.5816 20 12C20 16.4184 16.4184 20 12 20C7.5816 20 4 16.4184 4 12C4 7.5816 7.5816 4 12 4ZM12.4 12.8H7.44C7.22783 12.8 7.02434 12.8843 6.87431 13.0343C6.72429 13.1843 6.64 13.3878 6.64 13.6C6.64 13.8122 6.72429 14.0157 6.87431 14.1657C7.02434 14.3157 7.22783 14.4 7.44 14.4H7.8512L7.6216 14.8088C7.57023 14.9005 7.53742 15.0015 7.52506 15.1058C7.51269 15.2102 7.52101 15.316 7.54954 15.4172C7.57806 15.5184 7.62624 15.613 7.69131 15.6955C7.75639 15.7781 7.83708 15.847 7.9288 15.8984C8.02052 15.9498 8.12145 15.9826 8.22584 15.9949C8.33024 16.0073 8.43604 15.999 8.53722 15.9705C8.6384 15.9419 8.73297 15.8938 8.81553 15.8287C8.89809 15.7636 8.96703 15.6829 9.0184 15.5912L9.6848 14.4H12.4C12.6122 14.4 12.8157 14.3157 12.9657 14.1657C13.1157 14.0157 13.2 13.8122 13.2 13.6C13.2 13.3878 13.1157 13.1843 12.9657 13.0343C12.8157 12.8843 12.6122 12.8 12.4 12.8ZM13.9144 10.4088C13.816 10.2281 13.6518 10.0923 13.4558 10.0296C13.2599 9.96685 13.0473 9.98201 12.8623 10.0719C12.6772 10.1618 12.5339 10.3195 12.4622 10.5123C12.3904 10.7051 12.3956 10.9182 12.4768 11.1072L12.5184 11.1912L14.9824 15.5912C15.0822 15.7691 15.2462 15.9022 15.4408 15.9632C15.6354 16.0242 15.846 16.0086 16.0295 15.9195C16.213 15.8304 16.3556 15.6746 16.428 15.4839C16.5004 15.2932 16.4973 15.082 16.4192 14.8936L16.3776 14.8088L16.1488 14.4008H16.56C16.7651 14.4024 16.9631 14.3252 17.1129 14.185C17.2627 14.0448 17.3529 13.8525 17.3649 13.6477C17.377 13.4429 17.3098 13.2413 17.1775 13.0846C17.0451 12.9279 16.8575 12.828 16.6536 12.8056L16.56 12.8H15.2528L13.9144 10.4088ZM11.8984 6.8088C11.8 6.62814 11.6358 6.49233 11.4398 6.42959C11.2439 6.36685 11.0313 6.38201 10.8463 6.47191C10.6612 6.5618 10.5179 6.71953 10.4462 6.91233C10.3744 7.10513 10.3796 7.31817 10.4608 7.5072L10.5016 7.5912L11.0832 8.6288L9.6376 11.2096C9.53702 11.3878 9.50854 11.5978 9.55802 11.7963C9.6075 11.9949 9.73119 12.1669 9.90363 12.2771C10.0761 12.3872 10.2842 12.4271 10.4851 12.3885C10.6861 12.3499 10.8646 12.2358 10.984 12.0696L11.0344 11.9912L13.4984 7.5912C13.6003 7.41295 13.6298 7.20233 13.5808 7.00293C13.5317 6.80354 13.4079 6.63064 13.2349 6.52003C13.0619 6.40942 12.8529 6.36957 12.6514 6.40873C12.4498 6.44789 12.271 6.56306 12.152 6.7304L12.1016 6.8088L12 6.992L11.8984 6.8104V6.8088Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white text-sm">Appstore</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-pink-100 pt-4 flex flex-col justify-start items-center md:flex-row md:justify-between md:items-start gap-4">
        <p className="text-sm text-center md:text-left">
          © 2023 Marica dan entitas-entitas terkaitnya. Hak Cipta Dilindungi
          Undang-Undang.
        </p>
        <ul className="flex items-center gap-4">
          <li className="p-1 border-2 border-pink-200 rounded-lg grid place-content-center">
            <Link href="http://facebook.com/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.625 9.625H15.4375V12.4375H12.625V19H9.8125V12.4375H7V9.625H9.8125V8.44844C9.8125 7.33375 10.1631 5.92562 10.8606 5.15594C11.5581 4.38437 12.4291 4 13.4725 4H15.4375V6.8125H13.4687C13.0019 6.8125 12.625 7.18938 12.625 7.65531V9.625Z"
                  fill="#f472b6"
                />
              </svg>
            </Link>
          </li>
          <li className="p-1 border-2 border-pink-200 rounded-lg grid place-content-center">
            <Link href="http://instagram.com/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4871 8.85254C10.785 8.85254 10.1117 9.13145 9.61522 9.62791C9.11875 10.1244 8.83984 10.7977 8.83984 11.4998C8.83984 12.2019 9.11875 12.8753 9.61522 13.3718C10.1117 13.8682 10.785 14.1471 11.4871 14.1471C12.1892 14.1471 12.8626 13.8682 13.3591 13.3718C13.8555 12.8753 14.1344 12.2019 14.1344 11.4998C14.1344 10.7977 13.8555 10.1244 13.3591 9.62791C12.8626 9.13145 12.1892 8.85254 11.4871 8.85254Z"
                  fill="#f472b6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.22742 4.23538C10.0588 3.92154 12.9162 3.92154 15.7476 4.23538C17.2945 4.40807 18.5415 5.62583 18.7232 7.17836C19.059 10.0494 19.059 12.9497 18.7232 15.8208C18.5415 17.3733 17.2945 18.5911 15.7485 18.7646C12.9168 19.0785 10.0591 19.0785 7.22742 18.7646C5.68059 18.5911 4.43351 17.3733 4.25186 15.8216C3.91605 12.9503 3.91605 10.0496 4.25186 7.17836C4.43351 5.62583 5.68059 4.40807 7.22742 4.23538ZM15.5603 6.61225C15.3443 6.61225 15.1371 6.69807 14.9843 6.85082C14.8316 7.00358 14.7457 7.21077 14.7457 7.4268C14.7457 7.64283 14.8316 7.85002 14.9843 8.00277C15.1371 8.15553 15.3443 8.24135 15.5603 8.24135C15.7763 8.24135 15.9835 8.15553 16.1363 8.00277C16.289 7.85002 16.3748 7.64283 16.3748 7.4268C16.3748 7.21077 16.289 7.00358 16.1363 6.85082C15.9835 6.69807 15.7763 6.61225 15.5603 6.61225ZM7.61841 11.4996C7.61841 10.4734 8.02604 9.48928 8.75165 8.76368C9.47725 8.03808 10.4614 7.63044 11.4875 7.63044C12.5137 7.63044 13.4978 8.03808 14.2234 8.76368C14.949 9.48928 15.3566 10.4734 15.3566 11.4996C15.3566 12.5257 14.949 13.5098 14.2234 14.2354C13.4978 14.961 12.5137 15.3687 11.4875 15.3687C10.4614 15.3687 9.47725 14.961 8.75165 14.2354C8.02604 13.5098 7.61841 12.5257 7.61841 11.4996Z"
                  fill="#f472b6"
                />
              </svg>
            </Link>
          </li>
          <li className="p-1 border-2 border-pink-200 rounded-lg grid place-content-center">
            <Link href="http://youtube.com/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.2054 13.5294V9.13437L14.4307 11.3397L10.2054 13.5294ZM19.4841 8.37345C19.4841 8.37345 19.3317 7.29504 18.8624 6.82035C18.2681 6.19785 17.601 6.19472 17.2953 6.15797C15.1071 6 11.8234 6 11.8234 6H11.8171C11.8171 6 8.5342 6 6.3453 6.15797C6.03953 6.19472 5.37324 6.19707 4.77812 6.82035C4.3089 7.29504 4.15641 8.37345 4.15641 8.37345C4.15641 8.37345 4 9.63877 4 10.9049V12.0912C4 13.3565 4.15641 14.6226 4.15641 14.6226C4.15641 14.6226 4.3089 15.7003 4.77812 16.175C5.37246 16.7982 6.15449 16.7779 6.50249 16.8436C7.75373 16.9632 11.8203 17 11.8203 17C11.8203 17 15.1071 16.9953 17.2953 16.8373C17.601 16.8006 18.2681 16.7982 18.8624 16.175C19.3317 15.7003 19.4841 14.6226 19.4841 14.6226C19.4841 14.6226 19.6406 13.3565 19.6406 12.0912V10.9049C19.6406 9.63877 19.4841 8.37345 19.4841 8.37345Z"
                  fill="#f472b6"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
