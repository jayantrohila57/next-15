import Projects from './_site/components/home/component-projects';
import AboutUs from './_site/components/home/component.about';
import Faq from './_site/components/home/component.faq';
import Hero from './_site/components/home/component.hero';
import SeoImprovementTable from './_site/components/home/component.improvement';
import InfoComponent from './_site/components/home/component.info';
import TrustedBySection from './_site/components/home/component.logos';
import AgileSEOComponent from './_site/components/home/component.methodology';
import Services from './_site/components/home/component.services';
import Testimonial from './_site/components/home/component.testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <InfoComponent />
      <TrustedBySection />
      <AgileSEOComponent />
      <SeoImprovementTable />
      <Projects />
      <Testimonial />
      <Faq />
    </>
  );
}
