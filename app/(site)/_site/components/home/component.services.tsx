import {
  Rocket,
  TrendingUp,
  BarChart,
  FileSearch,
  Shield,
  Users,
  ImageIcon,
  ChevronRight,
  Sparkle,
  Sparkles,
} from 'lucide-react';

import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

export default function Services() {
  const seoServices = [
    {
      icon: TrendingUp,
      title: 'Keyword Research',
      description: 'Identify the best keywords for your business',
      content: 'We conduct in-depth keyword research to target the phrases that bring the most value to your business.',
      extendedDescription: [
        'Our team analyzes your industry, audience, and competitors to identify high-value keywords.',
        'We focus on terms that attract qualified leads to your site.',
        'By using these insights, we help maximize your site’s visibility on search engines.',
        'You’ll reach users who are actively searching for services like yours.',
        'Our keyword research sets a strong foundation for all SEO efforts.',
      ],
    },
    {
      icon: BarChart,
      title: 'On-Page Optimization',
      description: 'Enhance your site’s content and structure',
      content: "Our team optimizes your website's pages for better rankings and user experience.",
      extendedDescription: [
        'We review your website’s structure, meta tags, and on-page content for SEO best practices.',
        'Our approach ensures that each page aligns with search engine algorithms and user intent.',
        'By refining on-page elements, we make your site easier to navigate and understand.',
        'We optimize for both search engines and your audience to increase visibility.',
        'On-page optimization provides a seamless and relevant experience for users.',
      ],
    },
    {
      icon: FileSearch,
      title: 'Content Strategy',
      description: 'Engage audiences with valuable content',
      content: 'We create a custom content strategy to boost engagement and authority.',
      extendedDescription: [
        'Our experts develop a strategic content plan that aligns with your brand’s voice.',
        'We focus on producing valuable content that resonates with your target audience.',
        'By positioning your brand as a trusted source, we foster engagement and loyalty.',
        'Each piece is crafted to improve search engine rankings and capture organic traffic.',
        'A well-executed content strategy is key to building long-term authority online.',
      ],
    },
    {
      icon: Shield,
      title: 'Technical SEO',
      description: 'Optimize your site’s backend structure',
      content: 'Our technical team ensures your site meets search engine standards for better visibility.',
      extendedDescription: [
        'Our team assesses your site’s technical elements like speed, mobile-friendliness, and security.',
        'We focus on factors that impact search engine indexing and ranking.',
        'By addressing backend issues, we improve overall site performance and accessibility.',
        'A well-structured site is crucial for both user experience and SEO.',
        'Technical SEO ensures your website is built to meet search engine standards.',
      ],
    },
    {
      icon: Users,
      title: 'Link Building',
      description: 'Build quality backlinks',
      content: 'We help build authoritative backlinks that drive traffic and improve rankings.',
      extendedDescription: [
        'Our link-building strategy focuses on acquiring high-quality backlinks from reputable sources.',
        'Backlinks are essential for establishing trust with search engines and improving rankings.',
        'We develop partnerships and content that encourage other sites to link to yours.',
        'By enhancing your backlink profile, we increase your site’s authority and visibility.',
        'Quality backlinks drive referral traffic and improve search engine trust in your content.',
      ],
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Ensure fast and responsive site performance',
      content: "We optimize your website's speed and responsiveness for the best user experience.",
      extendedDescription: [
        'Our team assesses your site’s performance and identifies areas for improvement.',
        'We optimize loading times, responsiveness, and overall speed for user satisfaction.',
        'A fast website improves user experience and reduces bounce rates.',
        'Performance optimization also plays a key role in SEO rankings.',
        'A responsive site retains visitors and boosts your SEO performance over time.',
      ],
    },
  ];
const stats = [
  { value: '200', label: 'People' },
  { value: '500+', label: 'Projects' },
  { value: '250+', label: 'Customers' },
  { value: 'A couple', label: 'Coffee breaks' },
];
  return (
    <section className="min-h-[90vh]  py-12    transition-all duration-300  flex-col gap-4 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full  border rounded-3xl">
      <div className="grid px-8  gap-6 grid-cols-2 w-full  lg:gap-12 ">
        <div className="flex flex-col w-full h-full  justify-center space-y-4">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl ">Our SEO Services</h3>
            <p className="  md:text-xl ">
              Elevate your online presence with our comprehensive SEO solutions tailored to boost your business.
            </p>
            <div className="flex  py-4 gap-4 flex-row">
              <Button>Get Started</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="grid grid-cols-4 py-4 w-full h-full gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-secondary  hover:scale-105 transition-all duration-300 flex text-left flex-col justify-center items-center ">
                <p className="text-2xl text-primary font-bold ">{stat.value}</p>
                <p className="text-2xl font-semibold ">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <li className="hover:-translate-y-8 shadow-lg transition-all duration-300 translate-x-0  w-full col-span-1 rounded-3xl bg-secondary border-secondary flex justify-center items-center flex-col gap-4 p-4">
            <div className="bg-background animate-pulse h-full w-full rounded-3xl flex justify-center items-center aspect-video">
              <ImageIcon className="size-20 text-muted-foreground" />
            </div>
          </li>
        </div>
      </div>
      <div className=" px-4 md:px-6 py-12 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 h-full lg:grid-cols-3">
          {seoServices.map(({ icon: Icon, title, description, extendedDescription }, index) => (
            <Card
              className="bg-secondary flex flex-col  justify-start shadow-lg w-auto  h-full rounded-3xl"
              key={index}>
              <CardHeader>
                <Icon className="h-14 p-2 rounded-3xl bg-primary/20 text-primary w-14 " />
                <CardTitle className="text-4xl py-4">{title}</CardTitle>
                <CardDescription className="text-xl">{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {extendedDescription.map((item, index) => (
                    <li
                      className="py-4 text-sm flex h-full flex-row hover:text-primary transition-all duration-300 border-t group border-muted-foreground/20"
                      key={index}>
                      <span className="relative mr-2 w-10 p-2">
                        <Sparkle className="inline absolute  transition-all duration-300  scale-100 group-hover:scale-0 " />
                        <Sparkles className="inline absolute  transition-all duration-300  scale-0 group-hover:scale-100 group-hover:text-primary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Grow?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let’s discuss how we can help increase your online visibility and reach.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
