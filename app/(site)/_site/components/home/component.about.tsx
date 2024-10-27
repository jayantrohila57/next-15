import React from 'react';
import { CheckCircle, Users, Target, Globe, ImageIcon } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="transition-all pb-16 duration-300  flex-col gap-4 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full  border rounded-3xl">
      <div className="space-y-4 text-center py-16">
        <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About us</h3>
        <p className="max-w-[600px] md:text-xl ">
          Elevate your online presence with our comprehensive SEO solutions tailored to boost your business.
        </p>
      </div>
      <div className="grid w-full gap-8 md:grid-cols-2 lg:gap-12">
        <div className="hover:-translate-y-8 shadow-lg transition-all duration-300 translate-x-0  w-full col-span-1 rounded-3xl bg-secondary border-secondary flex justify-center items-center flex-col gap-4 p-4">
          <div className="bg-background animate-pulse h-full w-full rounded-3xl flex justify-center items-center aspect-video">
            <ImageIcon className="size-20 text-muted-foreground" />
          </div>
        </div>
        <div className="">
          <h1 className="mb-4 text-center text-4xl font-bold  sm:text-4xl md:mb-6 md:text-left">
            Your SEO Success Partner
          </h1>
          <p className="mb-6  sm:text-lg md:mb-8">
            We are a dedicated SEO company committed to enhancing your online presence. Our tailored strategies are
            designed to boost your website&apos;s visibility, drive organic traffic, and achieve sustainable growth.
            <br />
            <br />
            Our team of experts utilizes advanced techniques to deliver measurable results. Let us help you reach your
            business goals with our comprehensive SEO solutions.
          </p>
          <h2 className="mb-2 text-center text-xl font-semibold py-4 sm:text-4xl md:mb-4 md:text-left">Why Choose Us?</h2>
          <div className="mb-6 flex flex-col gap-4">
            <div className="flex items-center p-2 gap-4">
              <CheckCircle className="mr-2 text-primary " />
              <p className="">Proven Track Record of Success</p>
            </div>
            <div className="flex items-center p-2 gap-4">
              <Users className="mr-2 text-primary " />
              <p className="">Expert Team of SEO Professionals</p>
            </div>
            <div className="flex items-center p-2 gap-4">
              <Target className="mr-2 text-primary " />
              <p className="">Customized Strategies for Your Business</p>
            </div>
            <div className="flex items-center p-2 gap-4">
              <Globe className="mr-2 text-primary " />
              <p className="">Global Reach with Local Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
