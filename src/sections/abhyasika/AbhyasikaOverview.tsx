const AbhyasikaOverview = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              About Abhyasika
            </p>

            <h2 className="mt-4 text-4xl font-bold text-blue-950 leading-tight">

              A Space Designed
              for Focused Learning

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">

              Ideation Abhyasika provides
              a peaceful and disciplined study environment
              where students can focus on academics
              without distractions.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Maintaining consistency in study habits
              is one of the most important factors
              in academic success.
              Our study environment encourages students
              to develop concentration,
              discipline,
              and productive routines.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              The atmosphere is designed to help students
              remain focused,
              improve time utilisation,
              and maintain regular academic preparation.

            </p>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-slate-50 rounded-3xl p-10 border border-gray-100">

              <h3 className="text-3xl font-bold text-blue-950">
                Why Students Prefer Abhyasika
              </h3>

              <div className="mt-10 space-y-8">

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Distraction-Free Environment
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    A calm and focused atmosphere
                    helps students maintain concentration
                    during study hours.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Better Study Consistency
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Regular study routines improve discipline,
                    retention,
                    and long-term academic performance.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Productive Learning Space
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Students receive an environment
                    designed to encourage focused,
                    uninterrupted academic preparation.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AbhyasikaOverview;