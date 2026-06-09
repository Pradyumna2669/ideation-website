import { Link } from "react-router-dom";

export default function AboutCTASection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div
          className="
            rounded-3xl
            bg-blue-950
            px-8
            py-12
            text-center
            text-white
          "
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Join Ideation
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Begin Your Learning Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Become part of a learning ecosystem built around
            curiosity, mentorship, academic excellence and
            holistic development.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="
                rounded-xl
                border
                border-white/30
                bg-orange-500
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-orange-600
              "
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}