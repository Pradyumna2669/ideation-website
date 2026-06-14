import { Link } from "react-router-dom";

const ContactCTASection = () => {
  return (
    <section className="bg-blue-950 py-14">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-orange-400 font-semibold uppercase tracking-[0.25em] text-sm">
          Admissions Open 2026
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
          Ready to Join the Ideation Family?
        </h2>

        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Connect with us to find the right learning pathway for your child.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">

          <Link
            to="/contact"
            className="
              rounded-xl
              bg-orange-500
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-orange-600
            "
          >
            Enquire Now
          </Link>

          <a
            href="tel:9834117689"
            className="
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              font-semibold
              text-white
              backdrop-blur-sm
              transition
              hover:bg-white/20
            "
          >
            📞 98341 17689
          </a>

        </div>

        <div className="mt-6 text-sm text-slate-400">
          Ashok Colony, Morshi Road, Amravati
        </div>

      </div>
    </section>
  );
};

export default ContactCTASection;