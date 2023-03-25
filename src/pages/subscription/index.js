import MainLayout from "@/layout/MainLayout";
import React, { useState } from "react";
import Button from "@/components/buttons/Button";

const Subscription = () => {
  const [yearlyPlan, setYearlyPlan] = useState(true);
  const [monthlyPlan, setMonthlyPlan] = useState(false);

  return (
    <article>
      <section className="flex justify-center items-center h-full p-4 md:p-16">
        <div
          id="container"
          className="w-full md:w-fit p-4 md:p-8 rounded-2xl bg-white grid gap-8"
        >
          <ul
            id="features"
            className="w-full flex flex-col md:flex-row gap-8 justify-center"
          >
            <li className="max-w-[200px] h-auto">
              <div>
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.433 8.59598C15.8699 8.59383 15.3119 8.70278 14.7909 8.91659C14.2699 9.13039 13.7963 9.44486 13.397 9.84198L12.001 11.182L10.626 9.86198C10.226 9.4592 9.74991 9.13988 9.22548 8.92255C8.70104 8.70523 8.13867 8.59422 7.57099 8.59598C7.00367 8.5946 6.44171 8.70578 5.91765 8.92309C5.39359 9.1404 4.91786 9.45953 4.51799 9.86198C4.11508 10.262 3.7956 10.738 3.5781 11.2624C3.36061 11.7868 3.24942 12.3492 3.25099 12.917C3.25099 14.069 3.69999 15.155 4.51699 15.97C4.91684 16.3727 5.39272 16.692 5.91698 16.9094C6.44125 17.1267 7.00347 17.2377 7.57099 17.236C8.13434 17.2384 8.6926 17.1294 9.21364 16.9152C9.73469 16.701 10.2082 16.3859 10.607 15.988L12.002 14.65L13.378 15.97C14.193 16.786 15.279 17.236 16.433 17.236C17.587 17.236 18.671 16.787 19.486 15.97C20.303 15.156 20.753 14.07 20.753 12.915C20.753 11.76 20.304 10.677 19.487 9.85998C19.0866 9.45808 18.6106 9.13946 18.0864 8.92252C17.5622 8.70557 17.0003 8.59459 16.433 8.59598ZM8.85699 14.201C8.16999 14.889 6.97299 14.889 6.28499 14.201C6.11566 14.0326 5.98136 13.8324 5.88988 13.6118C5.79839 13.3913 5.75153 13.1548 5.75199 12.916C5.75199 12.43 5.94099 11.975 6.28699 11.629C6.62899 11.285 7.08599 11.096 7.57099 11.096C8.05599 11.096 8.51299 11.285 8.87599 11.647L10.197 12.917L8.85699 14.201ZM17.718 14.201C17.031 14.89 15.852 14.906 15.128 14.183L13.807 12.913L15.146 11.628C15.834 10.94 17.032 10.94 17.719 11.626C18.063 11.972 18.252 12.427 18.252 12.913C18.252 13.399 18.062 13.857 17.718 14.201Z"
                      fill="#49495C"
                    />
                  </svg>
                </div>
                <p>Konten tanpa batas</p>
              </div>
            </li>
            <div className="w-full h-[1px] md:w-[1px] md:h-full bg-abu"></div>
            <li className="max-w-[200px] h-auto">
              <div>
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.15625 14.625C7.34583 14.625 7.50246 14.5629 7.62613 14.4386C7.75038 14.315 7.8125 14.1583 7.8125 13.9688V12.875H9.5625V13.9688C9.5625 14.1583 9.62463 14.315 9.74888 14.4386C9.87254 14.5629 10.0292 14.625 10.2188 14.625C10.4083 14.625 10.5653 14.5629 10.6895 14.4386C10.8132 14.315 10.875 14.1583 10.875 13.9688V10.0312C10.875 9.84167 10.8132 9.68475 10.6895 9.5605C10.5653 9.43683 10.4083 9.375 10.2188 9.375C10.0292 9.375 9.87254 9.43683 9.74888 9.5605C9.62463 9.68475 9.5625 9.84167 9.5625 10.0312V11.5625H7.8125V10.0312C7.8125 9.84167 7.75038 9.68475 7.62613 9.5605C7.50246 9.43683 7.34583 9.375 7.15625 9.375C6.96667 9.375 6.81004 9.43683 6.68637 9.5605C6.56212 9.68475 6.5 9.84167 6.5 10.0312V13.9688C6.5 14.1583 6.56212 14.315 6.68637 14.4386C6.81004 14.5629 6.96667 14.625 7.15625 14.625ZM13.0625 14.625H16.125C16.3729 14.625 16.5806 14.541 16.748 14.373C16.916 14.2056 17 13.9979 17 13.75V10.25C17 10.0021 16.916 9.79412 16.748 9.62612C16.5806 9.45871 16.3729 9.375 16.125 9.375H13.0625C12.9458 9.375 12.8437 9.41875 12.7562 9.50625C12.6687 9.59375 12.625 9.69583 12.625 9.8125V14.1875C12.625 14.3042 12.6687 14.4063 12.7562 14.4938C12.8437 14.5813 12.9458 14.625 13.0625 14.625ZM13.9375 13.3125V10.6875H15.6875V13.3125H13.9375ZM4.75 19C4.26875 19 3.85692 18.8288 3.5145 18.4864C3.1715 18.1434 3 17.7313 3 17.25V6.75C3 6.26875 3.1715 5.85692 3.5145 5.5145C3.85692 5.1715 4.26875 5 4.75 5H18.75C19.2313 5 19.6434 5.1715 19.9864 5.5145C20.3288 5.85692 20.5 6.26875 20.5 6.75V17.25C20.5 17.7313 20.3288 18.1434 19.9864 18.4864C19.6434 18.8288 19.2313 19 18.75 19H4.75Z"
                      fill="#49495C"
                    />
                  </svg>
                </div>
                <p>Streaming dengan kualitas HD</p>
              </div>
            </li>
            <div className="w-full h-[1px] md:w-[1px] md:h-full bg-abu"></div>
            <li className="max-w-[200px] h-auto">
              <div>
                <div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5455 7.54545H18.2727V6.90909C18.2727 6.40277 18.0716 5.91718 17.7136 5.55916C17.3555 5.20114 16.87 5 16.3636 5H4.90909C4.40277 5 3.91718 5.20114 3.55916 5.55916C3.20114 5.91718 3 6.40277 3 6.90909V14.5455C3 15.0518 3.20114 15.5374 3.55916 15.8954C3.91718 16.2534 4.40277 16.4545 4.90909 16.4545H13.8182V17.0909C13.8182 17.5972 14.0193 18.0828 14.3773 18.4408C14.7354 18.7989 15.221 19 15.7273 19H19.5455C20.0518 19 20.5374 18.7989 20.8954 18.4408C21.2534 18.0828 21.4545 17.5972 21.4545 17.0909V9.45455C21.4545 8.94822 21.2534 8.46264 20.8954 8.10461C20.5374 7.74659 20.0518 7.54545 19.5455 7.54545ZM20.1818 17.0909C20.1818 17.2597 20.1148 17.4215 19.9954 17.5409C19.8761 17.6602 19.7142 17.7273 19.5455 17.7273H15.7273C15.5585 17.7273 15.3966 17.6602 15.2773 17.5409C15.158 17.4215 15.0909 17.2597 15.0909 17.0909V9.45455C15.0909 9.28577 15.158 9.12391 15.2773 9.00457C15.3966 8.88523 15.5585 8.81818 15.7273 8.81818H19.5455C19.7142 8.81818 19.8761 8.88523 19.9954 9.00457C20.1148 9.12391 20.1818 9.28577 20.1818 9.45455V17.0909ZM12.5455 18.3636C12.5455 18.5324 12.4784 18.6943 12.3591 18.8136C12.2397 18.933 12.0779 19 11.9091 19H8.72727C8.5585 19 8.39664 18.933 8.2773 18.8136C8.15795 18.6943 8.09091 18.5324 8.09091 18.3636C8.09091 18.1949 8.15795 18.033 8.2773 17.9137C8.39664 17.7943 8.5585 17.7273 8.72727 17.7273H11.9091C12.0779 17.7273 12.2397 17.7943 12.3591 17.9137C12.4784 18.033 12.5455 18.1949 12.5455 18.3636ZM18.9091 10.7273C18.9091 10.896 18.842 11.0579 18.7227 11.1772C18.6034 11.2966 18.4415 11.3636 18.2727 11.3636H17C16.8312 11.3636 16.6694 11.2966 16.55 11.1772C16.4307 11.0579 16.3636 10.896 16.3636 10.7273C16.3636 10.5585 16.4307 10.3966 16.55 10.2773C16.6694 10.158 16.8312 10.0909 17 10.0909H18.2727C18.4415 10.0909 18.6034 10.158 18.7227 10.2773C18.842 10.3966 18.9091 10.5585 18.9091 10.7273Z"
                      fill="#49495C"
                    />
                  </svg>
                </div>
                <p>Putar di beberapa perangkat sekaligus.</p>
              </div>
            </li>
          </ul>
          <div id="subscribe" className="grid md:grid-cols-2 gap-4">
            <div
              className={`${
                monthlyPlan && "border-2 border-pink-600"
              } relative border border-abu rounded-xl flex-1 w-full h-auto p-4`}
              onClick={() => {
                setYearlyPlan(false);
                setMonthlyPlan(true);
              }}
            >
              <p>
                Rp<span className="font-bold text-xl"> 35.000 </span>/bulan
              </p>
            </div>
            <div
              className={`${
                yearlyPlan && "border-2 border-pink-600"
              } relative border border-abu rounded-xl flex-1 w-full h-auto`}
              onClick={() => {
                setYearlyPlan(true);
                setMonthlyPlan(false);
              }}
            >
              <p className="bg-gradient-to-r from-pink-600 to-pink-100 text-white rounded-lg px-3 text-sm py-1 flex-1 w-fit">
                ⭐Direkomendasikan!
              </p>
              <div className="p-4">
                <p>
                  Rp<span className="font-bold text-xl"> 250.000 </span>/tahun
                </p>
              </div>
            </div>
          </div>
          <Button variant="primary" type="button">
            Lanjutkan
          </Button>
        </div>
      </section>
    </article>
  );
};

Subscription.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Subscription;
