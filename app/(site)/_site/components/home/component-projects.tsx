import { ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

interface Project {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl?: string; // optional project image
}

const data: Project[] = [
  {
    title: 'E-commerce SEO Strategy for Local Fashion Brand',
    description:
      'Boosted organic traffic and local search rankings for a fashion brand, resulting in a 150% increase in sales.',
    linkText: 'View project',
    linkUrl: '#',
  },
  {
    title: 'Comprehensive SEO Overhaul for SaaS Startup',
    description:
      'Increased visibility and improved user engagement for a SaaS company through technical SEO and content marketing.',
    linkText: 'Learn more',
    linkUrl: '#',
  },
  {
    title: 'SEO for Health & Wellness Blog',
    description:
      'Optimized content strategy to increase readership and engagement by 200% for a health and wellness blog.',
    linkText: 'See results',
    linkUrl: '#',
  },
  {
    title: 'Local SEO Domination for Restaurant Chain',
    description:
      'Achieved top local search rankings for a restaurant chain, driving foot traffic and online reservations.',
    linkText: 'Discover project',
    linkUrl: '#',
  },
  {
    title: 'Speed Optimization for E-commerce Platform',
    description:
      'Reduced page load times by 40%, leading to a significant improvement in user experience and conversions.',
    linkText: 'Explore case study',
    linkUrl: '#',
  },
  {
    title: 'SEO Migration for Large News Site',
    description:
      'Handled a seamless SEO migration for a news platform, preserving rankings and enhancing organic reach.',
    linkText: 'View project',
    linkUrl: '#',
  },
  {
    title: 'Content Strategy for Tech Startup',
    description: 'Developed a content strategy for a tech startup that resulted in a 300% increase in organic traffic.',
    linkText: 'See strategy',
    linkUrl: '#',
  },
  {
    title: 'Multi-Location SEO for Fitness Chain',
    description:
      'Implemented a multi-location SEO strategy that boosted visibility across all branches of a fitness chain.',
    linkText: 'Read case study',
    linkUrl: '#',
  },
  {
    title: 'Cloud-Based SEO Tools for Digital Agency',
    description: 'Leveraged cloud-based SEO tools to optimize operations and improve scalability for a digital agency.',
    linkText: 'Find out more',
    linkUrl: '#',
  },
  {
    title: 'Enhanced Dark Mode Compatibility for Blog Network',
    description:
      'Implemented dark mode styling and improved SEO, resulting in higher engagement for a network of blogs.',
    linkText: 'Learn about it',
    linkUrl: '#',
  },
];

const RecentProjects: React.FC = () => {
  return (
    <section className="min-h-[90vh] overflow-hidden flex-col mb-4 gap-4 transition-all duration-300 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full border rounded-3xl">
      <div className="py-6 pt-16">
        <div className="mx-auto px-4">
          {/* Section title */}
          <Carousel
            opts={{
              align: 'center',
              dragFree: true,
              loop: true,
            }}
            className="w-full">
            <div className="mb-10 flex-col md:mb-16 flex justify-center items-center">
              <h2 className="mb-4 text-center text-4xl font-bold md:mb-6">Recent Projects</h2>
              <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
                Explore our recent projects and see how we&apos;ve helped businesses succeed with tailored SEO strategies.
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
            <div className="w-full flex justify-between flex-row max-w-7xl mx-auto pt-16">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
