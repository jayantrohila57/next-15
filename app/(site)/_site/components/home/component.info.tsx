import { ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
interface Feature {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const data: Feature[] = [
  {
    title: 'Unlock Exponential Growth with Tailored SEO Strategies for Success',
    description:
      'Unlock exponential growth with our tailored SEO strategies designed to elevate your online presence. From keyword optimization to content strategy, we ensure every aspect of your site contributes to your growth objectives. Experience measurable results that propel your business forward.',
    linkText: 'Discover how',
    linkUrl: '#',
  },
  {
    title: 'Robust Security Protocols to Safeguard Your Website from Threats',
    description:
      'Protect your website with our robust security protocols, safeguarding against vulnerabilities and threats. We implement advanced measures to keep your data safe and your site compliant with the latest standards. Rest easy knowing your online assets are in good hands.',
    linkText: 'Find out more',
    linkUrl: '#',
  },
  {
    title: 'Leverage Cloud-Based SEO Tools to Enhance Site Performance',
    description:
      'Harness the power of cloud-based SEO tools to boost your site’s performance and scalability. Our solutions offer flexibility and efficiency, enabling your site to handle traffic spikes seamlessly. Stay ahead of the competition with cutting-edge technology at your fingertips.',
    linkText: 'Explore options',
    linkUrl: '#',
  },
  {
    title: 'Speed Optimization Techniques to Improve Your Website Loading Times',
    description:
      'Enhance user experience and rankings with our proven speed optimization techniques for faster loading times. We analyze your site to identify bottlenecks and implement solutions that ensure quick, responsive performance. A faster site means happier users and better SEO.',
    linkText: 'Improve your speed',
    linkUrl: '#',
  },
  {
    title: '24/7 Support to Ensure Your SEO Campaigns Run Smoothly',
    description:
      'Benefit from our dedicated 24/7 support, ensuring your SEO campaigns run smoothly and efficiently at all times. Our expert team is ready to assist you with any challenges you face, providing proactive solutions tailored to your needs. Your success is our priority.',
    linkText: 'Get support',
    linkUrl: '#',
  },
  {
    title: 'Optimize Your Website for Dark Mode Users with Style',
    description:
      'Adapt your site for dark mode users with seamless design solutions that enhance usability and aesthetics. We ensure your content looks stunning in any setting, improving engagement and user satisfaction. Embrace modern design trends to attract a wider audience.',
    linkText: 'Learn about dark mode',
    linkUrl: '#',
  },
  {
    title: 'Comprehensive Analytics Services for Deep Insights into Performance',
    description:
      'Gain deep insights into your website’s performance with our comprehensive analytics services. We provide detailed reports that track your SEO progress, user behavior, and traffic sources. Use this data to make informed decisions and refine your strategies.',
    linkText: 'View analytics',
    linkUrl: '#',
  },
  {
    title: 'Develop a Robust Content Strategy That Engages Your Audience',
    description:
      'Elevate your brand with a robust content strategy that resonates with your audience. Our team creates compelling, SEO-friendly content that drives traffic and builds authority. Engage your visitors with valuable information that keeps them coming back.',
    linkText: 'Develop your content',
    linkUrl: '#',
  },
  {
    title: 'Specialized Local SEO Services to Dominate Your Local Market',
    description:
      'Dominate your local market with our specialized local SEO services. We optimize your online presence to attract customers in your area, enhancing visibility and driving foot traffic. Build strong connections within your community and watch your business thrive.',
    linkText: 'Boost local presence',
    linkUrl: '#',
  },
];
 
const InfoComponent: React.FC = ( ) => {
  return (
    <section className="min-h-[90vh] overflow-hidden flex-col mb-4 gap-4 transition-all duration-300 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full  border rounded-3xl">
      <div className=" py-6  pt-16 ">
        <div className="mx-auto  px-4">
          {/* Section title */}
          <Carousel
            opts={{
              align: 'center',
              dragFree: true,
              loop: true,
            }}
            className="w-full">
            <div className="mb-10 flex-col md:mb-16 flex justify-center items-center">
              <h2 className="mb-4 text-center text-4xl font-bold md:mb-6">Our Competitive Advantage</h2>
              <p className="mx-auto max-w-screen-md text-center text-muted-foreground  md:text-lg">
                Discover how our SEO services stand out and give your business a competitive edge.
              </p>
            </div>
            <CarouselContent className="-ml-1 gap-4 p-4">
              {data.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 md:basis-1/3 pl-4 lg:basis-1/4">
                  <Card
                    key={index}
                    className="bg-secondary flex flex-col justify-between   shadow-lg w-auto min-h-[30vh] p-4 aspect-square rounded-3xl">
                    <CardContent className="bg-background animate-pulse h-full rounded-3xl flex justify-center items-center aspect-video">
                      <ImageIcon className="size-20 text-muted-foreground" />
                    </CardContent>
                    <CardHeader className=" py-4 min-h-40">
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                      <CardDescription className="text-sm">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="">
                      <Button variant={'default'}>{feature.linkText}</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="w-full flex justify-between flex-row max-w-7xl mx-auto pt-16 ">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default InfoComponent;
