import { ChevronRight, ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = async () => {
  return (
    <section className="min-h-[90vh] transition-all duration-300  flex-col gap-4 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full  border rounded-3xl">
      <main className="min-h-60 w-full gap-4 p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col capitalize justify-center items-center text-center">
          <div className="flex items-center transition-all duration-300 bg-secondary p-2 px-4 my-8  gap-2 rounded-3xl border ">
            <span className="mt-0.5 transition-all duration-300 rounded-full bg-primary px-2 py-1 text-xs font-semibold leading-none text-primary-foreground">
              New
            </span>

            <span className="text-sm  px-2">Hurry! We have special 20% off on our service.</span>

            <Button
              variant={'link'}
              size={'sm'}
              className="text-sm py-0 font-bold text-primary">
              Check Now
            </Button>
          </div>
          <h1 className="text-7xl transition-all duration-300 font-bold max-w-4xl mx-auto text-center ">
            Manage And Optimize Your Business
            <span className="text-primary px-2 transition-all duration-300">SEO</span>
          </h1>
          <p className="transition-all duration-300 text-xl text-muted-foreground mt-4">
            Boost your website ranking with our PowerFull seo tools.
          </p>
          <p className="transition-all duration-300 text-xl text-muted-foreground">
            Optimize your site and dominate the search results with ease
          </p>
        </div>
        <div className="p-4 flex flex-row justify-center items-center gap-4">
          <Button className="group">
            Get Started
            <ChevronRight className="transition-all duration-300 -translate-x-1 group-hover:translate-x-1.5 " />
          </Button>
          <Button
            variant={'secondary'}
            className="group">
            Request a Demo
            <ChevronRight className="transition-all duration-300 -translate-x-1 group-hover:translate-x-1.5 " />
          </Button>
        </div>
      </main>
      <ul className="h-full w-full transition-all duration-300  p-4 grid grid-cols-4 gap-4">
        <li className="hover:-translate-y-8 shadow-lg transition-all duration-300 translate-x-0  h-96 w-full col-span-1 rounded-3xl bg-secondary border-secondary flex justify-center items-center flex-col gap-4 p-4">
          <div className="bg-background animate-pulse h-full w-full rounded-3xl flex justify-center items-center aspect-square">
            <ImageIcon className="size-20 text-muted-foreground" />
          </div>
        </li>
        <li className="hover:-translate-y-8 shadow-lg transition-all duration-300 translate-x-0  h-96 w-full col-span-1 rounded-3xl bg-secondary border-secondary flex justify-center items-center flex-col gap-4 p-4">
          <div className="bg-background animate-pulse h-full w-full rounded-3xl flex justify-center items-center aspect-square">
            <ImageIcon className="size-20 text-muted-foreground" />
          </div>
        </li>
        <li className="hover:-translate-y-8 shadow-lg transition-all duration-300 translate-x-0  h-96 w-full col-span-1 rounded-3xl bg-secondary border-secondary flex justify-center items-center flex-col gap-4 p-4">
          <div className="bg-background animate-pulse h-full w-full rounded-3xl flex justify-center items-center aspect-square">
            <ImageIcon className="size-20 text-muted-foreground" />
          </div>
        </li>
        <li className="hover:-translate-y-8 shadow-lg transition-all duration-300 translate-x-0  h-96 w-full col-span-1 rounded-3xl bg-secondary border-secondary flex justify-center items-center flex-col gap-4 p-4">
          <div className="bg-background animate-pulse h-full w-full rounded-3xl flex justify-center items-center aspect-square">
            <ImageIcon className="size-20 text-muted-foreground" />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
