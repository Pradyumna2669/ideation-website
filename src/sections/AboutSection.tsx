import SectionHeading from "../components/SectionHeading";

import classroomImg from "../assets/about/classroom.jpg";
import activityImg from "../assets/about/activity.jpeg";
import studentsImg from "../assets/about/students.jpeg";

const stats = [
  {
    value: "15+",
    label: "Years of Service",
  },
  {
    value: "5000+",
    label: "Students Guided",
  },
  {
    value: "5",
    label: "Institutions",
  },
  {
    value: "100+",
    label: "Achievements",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-14 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          title="About Ideation Welfare Society"
          subtitle="Shaping Minds Since 2009"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10 md:mt-16">

          {/* Images */}

          <div className="grid grid-cols-2 gap-4">

            <div className="col-span-2">
              <img
                src={classroomImg}
                alt="Classroom"
                className="
                  w-full
                  h-48 sm:h-64 md:h-[280px] lg:h-[340px]
                  object-cover
                  rounded-3xl
                  shadow-lg
                "
              />
            </div>

            <img
              src={activityImg}
              alt="Activity"
              className="
                w-full
                h-36 md:h-52
                object-cover
                rounded-3xl
                shadow-lg
              "
            />

            <img
              src={studentsImg}
              alt="Students"
              className="
                w-full
                h-36 md:h-52
                object-cover
                rounded-3xl
                shadow-lg
              "
            />

          </div>

          {/* Content */}

          <div>

            <span
              className="
                text-blue-600
                uppercase
                tracking-wider
                font-semibold
                text-sm
              "
            >
              Our Story
            </span>

            <h3
              className="
                mt-4
                text-3xl md:text-4xl
                font-bold
                text-slate-900
                leading-tight
              "
            >
              Education Beyond
              <br />
              Memorisation
            </h3>

            <p
              className="
                mt-6
                text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Ideation Welfare Society is committed to
              nurturing young minds through concept-based,
              integrated, and student-centred education.
            </p>

            <p
              className="
                mt-4
                text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Through our institutions, we focus on
              academic excellence, practical learning,
              research orientation, personality development,
              and mentorship that prepares students for
              future challenges.
            </p>

            <p
              className="
                mt-4
                text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Since 2009, thousands of students have
              benefited from our commitment to quality
              education, dedicated faculty, and a culture
              that encourages curiosity, confidence, and
              lifelong learning.
            </p>

          </div>

        </div>

        {/* Statistics */}

        <div
          className="
            mt-14 md:mt-24
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4 md:gap-6
          "
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-slate-50
                rounded-2xl
                p-5 md:p-8
                text-center
                border
                border-slate-100
              "
            >
              <h4
                className="
                  text-3xl md:text-4xl
                  font-bold
                  text-blue-600
                "
              >
                {item.value}
              </h4>

              <p
                className="
                  mt-2
                  text-slate-600
                  font-medium
                  text-sm md:text-base
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}