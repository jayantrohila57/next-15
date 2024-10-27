'use client';

import * as React from 'react';

import {
  Accessibility,
  Code,
  FileText,
  HelpCircle,
  ImageIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

// This is our FAQ data. In a real application, this might come from an API or CMS.
const faqs = [
  {
    question: 'What is SEO and why is it important?',
    answer:
      'SEO, or Search Engine Optimization, is the practice of optimizing your website to increase its visibility in search engine results. Higher visibility means more traffic and potential customers for your business.',
    image: '/seo-basics.svg?height=400&width=600',
    icon: <HelpCircle className="h-5 w-5" />,
  },
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'SEO is a long-term investment. While some improvements can be seen in a few weeks, most significant results, like higher rankings and increased traffic, typically take 3-6 months of consistent optimization efforts.',
    image: '/seo-timeline.svg?height=400&width=600',
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    question: 'What SEO services do you offer?',
    answer:
      'Our SEO services include keyword research, on-page optimization, content strategy, technical SEO, link building, and performance optimization. We provide comprehensive SEO solutions tailored to your business needs.',
    image: '/seo-services.svg?height=400&width=600',
    icon: <Code className="h-5 w-5" />,
  },
  {
    question: 'Can SEO help my local business?',
    answer:
      'Absolutely. We offer Local SEO services that focus on optimizing your online presence to attract more local customers. This includes Google My Business optimization, local keywords, and directory listings.',
    image: '/local-seo.svg?height=400&width=600',
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    question: 'How do you approach keyword research?',
    answer:
      'We conduct in-depth keyword research to identify the terms your target audience is searching for. Our team analyzes search volume, competition, and relevancy to select the best keywords for your business.',
    image: '/keyword-research.svg?height=400&width=600',
    icon: <Search className="h-5 w-5" />,
  },
  {
    question: 'Is content important for SEO?',
    answer:
      'Yes, content is a cornerstone of SEO. Quality, relevant content helps attract users, answers their questions, and keeps them engaged on your site. We create SEO-friendly content strategies that align with your brand.',
    image: '/content-strategy.svg?height=400&width=600',
    icon: <FileText className="h-5 w-5" />,
  },
];

export default function Faq() {
  // const [selectedFaq, setSelectedFaq] = React.useState(faqs[0]);

  return (
    <section className="min-h-[90vh] px-4 transition-all duration-300  flex-col gap-4 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full  border rounded-3xl">
      <h2 className="text-3xl py-8 font-bold mb-6 w-full text-center">Frequently Asked Questions</h2>
      <div className="grid w-full   md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary border-secondary hover:-translate-y-8 shadow-lg transition-all duration-300 translate-x-0  order-1 md:order-none">
          <div className=" w-full col-span-1 rounded-3xl  flex justify-center items-center flex-col gap-4 p-4">
            <div className="bg-background animate-pulse h-full w-full rounded-3xl flex justify-center items-center aspect-square">
              <ImageIcon className="size-20 text-muted-foreground" />
            </div>
          </div>
          {/* {faqs.map((faq, index) => (
            <img
              key={index}
              src={faq.image}
              alt=""
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
                faq.question === selectedFaq.question ? 'opacity-100' : 'opacity-0',
              )}
            />
          ))} */}
        </div>
        <div className="space-y-6">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col justify-around gap-4"
            // onValueChange={(value) => {
            // const selected = faqs.find((faq) => faq.question === value);
            // if (selected) setSelectedFaq(selected);
            // }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                className="bg-secondary rounded-3xl py-2 px-4 shadow"
                value={faq.question}
                key={index}>
                <AccordionTrigger className=" text-left">
                  <span className="flex justify-start text-xl gap-4 items-center">
                    <span className="mr-2 rounded-3xl p-2 bg-primary/20 text-primary">{faq.icon}</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Need more help?</h3>
            <p className="mb-4">If you could not find the answer you were looking for, please reach out to us:</p>
            <div className="space-x-2 flex flex-row gap-4">
              <Button
                variant="default"
                className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" /> Email Support
              </Button>
              <Button
                variant="default"
                className="w-full justify-start">
                <Phone className="mr-2 h-4 w-4" /> Call Us
              </Button>
              <Button
                variant="default"
                className="w-full justify-start">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
