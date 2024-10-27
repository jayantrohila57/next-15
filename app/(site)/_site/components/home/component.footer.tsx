'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Rss,
  Moon,
  Sun,
  SearchCodeIcon,
} from 'lucide-react';

import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { theme, setTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className=" transition-all duration-300 flex-col gap-4 p-4 flex justify-center items-center my-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full border rounded-3xl">
      <div className=" py-8 md:py-12">
        <div className="  px-8 grid w-full grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-primary">Quick Links</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-primary">Quick Links</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:underline">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-primary">Quick Links</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:underline">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-primary">Quick Links</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:underline">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 px-8 border-t  border-muted-foreground/20 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="border rounded-3xl border-muted-foreground/20 bg-secondary p-4">
              <h2 className="text-lg font-semibold mb-4 text-primary">About Us</h2>
              <div className="flex transition-all duration-300 justify-start text-xl underline underline-offset-8 items-center flex-row">
                <SearchCodeIcon className="size-7 pr-2 inline" />
                SEO
              </div>
              <p className="mt-4 font-lg">
                We are a leading company specializing in innovative solutions for businesses of all sizes. We are a
                leading company specializing in innovative solutions for businesses of all sizes.
              </p>
            </div>
            <div className="border rounded-3xl border-muted-foreground/20 bg-secondary p-4">
              <div className="flex flex-row justify-between items-center">
                <div className="">
                  <h2 className="text-lg font-semibold mb-4 text-primary">Contact Us</h2>
                  <address className="not-italic">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>123 SEO Street, Digital City, 12345</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-5 w-5 mr-2" />
                      <a
                        href="tel:+11234567890"
                        className="hover:underline">
                        +1 (123) 456-7890
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <Mail className="h-5 w-5 mr-2" />
                      <a
                        href="mailto:info@example.com"
                        className="hover:underline">
                        info@example.com
                      </a>
                    </div>
                  </address>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com"
                    className="hover:text-primary"
                    aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="hover:text-primary"
                    aria-label="Twitter">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="hover:text-primary"
                    aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="hover:text-primary"
                    aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="/rss.xml"
                    className="hover:text-primary">
                    <Rss className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border rounded-3xl border-muted-foreground/20 bg-secondary p-4">
              <h2 className="text-lg font-semibold mb-4 text-primary">Newsletter</h2>
              <p className="mb-4">Stay updated with our latest news and offers.</p>
              <form
                onSubmit={handleSubmit}
                className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button
                  type="submit"
                  className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border rounded-3xl border-muted-foreground/20 bg-secondary p-4">
            <h2 className="text-lg font-semibold mb-4 text-primary">Our Location</h2>
            <div className="aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?maptype=satellite&pb=!1m18!1m12!1m3!1d3022.3527889121205!2d-73.98731308459366!3d40.75903117932675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1621517821271!5m2!1sen!2sus"
                width="100%"
                className="transition-all opacity-60 dark:invert grayscale  duration-300 flex-col gap-4 flex justify-center items-center mt-4 h-full bg-card w-full rounded-3xl"
                height="100%"
                loading="lazy"
                title="Google Maps Location"></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 px-8 border-t border-muted-foreground/20 flex flex-wrap justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>

          <div className="flex items-center space-x-2 mt-4 border p-2 rounded-full bg-secondary pl-4 transition-all duration-300 sm:mt-0">
            <span className="text-sm">Theme:</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
