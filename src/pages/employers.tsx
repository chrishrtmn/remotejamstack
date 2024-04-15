import Head from "next/head";
import Masthead from "../components/employers/masthead";
// import Features from '../components/employers/features'
import CTA from "../components/employers/cta";
import FAQ from "../components/employers/faq";
import FeaturedJobs from "../components/employers/featured-jobs";
import Pricing from "../components/employers/pricing";
import SiteMetrics from "../components/employers/site-metrics";

const EmployersPage = () => {
  return (
    <>
      <Head>
        <title>Employers &amp; Recruiters - Remote Jamstack</title>
      </Head>

      <Masthead />
      {/* <Features /> */}
      <SiteMetrics />
      <FeaturedJobs />
      <FAQ />
      <Pricing />
      <CTA />
    </>
  );
};

export default EmployersPage;
