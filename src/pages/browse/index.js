import MainLayout from "@/layout/MainLayout";
import Tag from "@/components/cards/Tag";
import Input from "@/components/inputs/Input";
import { Formik } from "formik";

const Browser = () => {
  return (
    <article>
      <div className="w-full sticky top-0 z-10 bg-white drop-shadow-sm p-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Cari film..."
          name="search"
          onChange={(e) => e}
          className="focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 w-fit py-3 px-6 rounded-lg bg-abu-terang"
        />
        <select className="p-4 bg-slate-100 rounded-lg">
          {[
            "Pilih kategori",
            "sports",
            "thriller",
            "action",
            "drama",
            "character",
            "fun",
          ].map((tag, index) => (
            <option key={index} value={tag}>
              <Tag>{tag}</Tag>
            </option>
          ))}
        </select>
      </div>
      <section className="p-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/5higYnVi4Ro"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/U0wTDK0VOeY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/Qto1u_uetiw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/aTq0QOZM_Ik"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/HnVWyCp5Jd4"
              title="YouTube video player"
              frameborder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/H09PmP5tsy8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
        </ul>
      </section>
    </article>
  );
};

Browser.getLayout = function getLayout(page) {
  return <MainLayout title="Semua movies di Marica">{page}</MainLayout>;
};

export default Browser;
