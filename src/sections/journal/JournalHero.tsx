import { Link } from "react-router-dom";
import journalCover from "../../assets/journal-cover.png";

const JournalHero = () => {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              Ideation Welfare Society
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-blue-950">

              International Journal
              of Research

            </h1>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">

              An academic and research publication initiative
              focused on promoting innovation,
              scholarly contribution,
              and interdisciplinary research.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition"
              >
                Submit Paper
              </Link>

              <Link
                to="/contact"
                className="border border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                View Publications
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  Research
                </h3>

                <p className="text-gray-600 mt-2">
                  Academic Publications
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  Scholarly
                </h3>

                <p className="text-gray-600 mt-2">
                  Contributions
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  Global
                </h3>

                <p className="text-gray-600 mt-2">
                  Research Perspective
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[320px] sm:max-w-md h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 flex items-center justify-center">
              <img
                src={journalCover}
                alt="International Journal of Research"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default JournalHero;