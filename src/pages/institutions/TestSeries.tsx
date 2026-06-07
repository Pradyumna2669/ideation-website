import TestSeriesHero from "../../sections/test-series/TestSeriesHero";
import WhyTestSeriesSection from "../../sections/test-series/WhyTestSeriesSection";
import HowOurTestSeriesWorksSection from "../../sections/test-series/HowOurTestSeriesWorkssection";
import WhyChooseIdeationSection from "../../sections/test-series/WhyChooseIdeathonSection";
import StudentResultsSection from "../../sections/test-series/StudentResults";
import AdmissionCTA from "../../sections/test-series/TestSeriesCTASection"
const TestSeries = () => {
  return (
    <>
      <TestSeriesHero />
      <WhyTestSeriesSection />
      <HowOurTestSeriesWorksSection />
      <WhyChooseIdeationSection />
      <StudentResultsSection />
      <AdmissionCTA />
    </>
  );
};

export default TestSeries;