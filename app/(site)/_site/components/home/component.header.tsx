import { ChevronRight, SearchCodeIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/theme-toggle';

const Header = () => {
  return (
    <header className="h-16 flex transition-all duration-300  justify-between bg-secondary/50  items-center rounded-3xl p-4 mt-4 border w-full">
      <h1 className="flex transition-all duration-300 justify-start text-xl underline underline-offset-8 items-center flex-row">
        <SearchCodeIcon className="size-7 pr-2 inline" />
        SEO
      </h1>
      <nav>
        <ul className="capitalize flex flex-row justify-between  items-center gap-4">
          <li className="px-4 transition-all duration-300 hover:text-primary cursor-pointer active:scale-[.96] scale-100 hover:scale-[1.1] active:text-primary ">
            HOME
          </li>
          <li className="px-4 transition-all duration-300 hover:text-primary cursor-pointer active:scale-[.96] scale-100 hover:scale-[1.1] active:text-primary ">
            HOW IT WORK{' '}
          </li>
          <li className="px-4 transition-all duration-300 hover:text-primary cursor-pointer active:scale-[.96] scale-100 hover:scale-[1.1] active:text-primary ">
            CONTACT US
          </li>
          <li className="px-4 transition-all duration-300 hover:text-primary cursor-pointer active:scale-[.96] scale-100 hover:scale-[1.1] active:text-primary ">
            OUR PLAN
          </li>
        </ul>
      </nav>
      <div className="capitalize flex flex-row justify-between  items-center gap-4">
        <ModeToggle />
        <Button
          variant={'outline'}
          className="group">
          Get Started
          <ChevronRight className="-translate-x-1 group-hover:translate-x-1.5 " />
        </Button>
      </div>
    </header>
  );
};
export default Header;
