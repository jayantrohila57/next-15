import { MessageSquareQuoteIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardDescription,  CardTitle } from '../ui/card';

interface TestimonialData {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar: string;
  initials: string;
}

// Define an array of testimonials related to an SEO company
const testimonials: TestimonialData[] = [
  {
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechCorp',
    testimonial:
      '"Our website traffic has increased significantly since using their services. The strategies implemented are effective and efficient."',
    avatar: '/placeholder.svg?height=40&width=40',
    initials: 'SJ',
  },
  {
    name: 'Alex Chen',
    position: 'Digital Marketing Specialist',
    company: 'Creative Agency',
    testimonial:
      '"The team understands our needs and provides tailored solutions that truly work. Highly recommended for any SEO needs!"',
    avatar: '/placeholder.svg?height=40&width=40',
    initials: 'AC',
  },
  {
    name: 'Emily Davis',
    position: 'Freelancer',
    company: 'Self-Employed',
    testimonial:
      '"Their insights into SEO have been invaluable. I’ve seen a noticeable difference in my clients’ online presence."',
    avatar: '/placeholder.svg?height=40&width=40',
    initials: 'ED',
  },
  {
    name: 'Michael Brown',
    position: 'Marketing Director',
    company: 'Innovate Solutions',
    testimonial:
      '"The analytics capabilities are outstanding. We’ve gained invaluable insights into our campaigns, allowing us to make data-driven decisions with confidence."',
    avatar: '/placeholder.svg?height=40&width=40',
    initials: 'MB',
  },
  {
    name: 'Emily Davis',
    position: 'Freelancer',
    company: 'Self-Employed',
    testimonial:
      '"Their insights into SEO have been invaluable. I’ve seen a noticeable difference in my clients’ online presence."',
    avatar: '/placeholder.svg?height=40&width=40',
    initials: 'ED',
  },
  {
    name: 'Michael Brown',
    position: 'Marketing Director',
    company: 'Innovate Solutions',
    testimonial:
      '"The analytics capabilities are outstanding. We’ve gained invaluable insights into our campaigns, allowing us to make data-driven decisions with confidence."',
    avatar: '/placeholder.svg?height=40&width=40"',
    initials: 'MB',
  },
];

export default async function Testimonial() {
  return (
    <section className="py-16 px-4 transition-all duration-300  flex-col gap-4 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full  border rounded-3xl">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border-none bg-transparent shadow-none">
            <CardContent className="p-8 gap-4 flex flex-col items-center justify-center text-center">
              <MessageSquareQuoteIcon className="size-8 text-primary" />
              <blockquote className="italic text-xl min-h-28 ">{testimonial.testimonial}</blockquote>
              <div className="w-full flex flex-col gap-2 items-center justify-center">
                <Avatar className="size-14">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="bg-primary/20 ">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription className="text-sm w-full text-muted-foreground">
                  {testimonial.position}, {testimonial.company}
                  <div className="-ml-1 flex justify-center w-full gap-0.5">
                    {Array.from({ length: 5 })
                      .fill(null)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="h-6 w-6 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
