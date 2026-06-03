const ContactForm = () => {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              Contact Ideation Welfare Society
            </p>

            <h1 className="mt-4 text-5xl font-bold text-blue-950 leading-tight">

              Let’s Start
              Your Academic Journey

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">

              Reach out to us for admissions,
              academic guidance,
              institution enquiries,
              or research-related communication.

            </p>

            {/* CONTACT INFO */}
            <div className="mt-12 space-y-8">

              <div>

                <h3 className="text-2xl font-bold text-blue-950">
                  Contact Numbers
                </h3>

                <p className="mt-3 text-gray-600">
                  +91 9657778471
                </p>

                <p className="text-gray-600">
                  +91 9022443373
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-blue-950">
                  Email Address
                </h3>

                <p className="mt-3 text-gray-600">
                  ideation@example.com
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-blue-950">
                  Location
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Ashok Colony,
                  Morshi Road,
                  Amravati
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100">

              <h2 className="text-3xl font-bold text-blue-950">
                Send Us Your Enquiry
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Fill out the form below and our team
                will get back to you shortly.

              </p>

              {/* FORM */}
              <form className="mt-10 space-y-6">

                <div>

                  <label className="block mb-2 font-medium text-blue-950">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-950"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium text-blue-950">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-950"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium text-blue-950">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-950"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium text-blue-950">
                    Institution Interested In
                  </label>

                  <select
                    className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-950 bg-white"
                  >

                    <option>Integrated Learning</option>

                    <option>Tutorial</option>

                    <option>Test Series</option>

                    <option>Abhyasika</option>

                    <option>Journal</option>

                  </select>

                </div>

                <div>

                  <label className="block mb-2 font-medium text-blue-950">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-blue-950 resize-none"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-900 transition text-white px-8 py-4 rounded-xl font-semibold"
                >
                  Submit Enquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;