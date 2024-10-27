import Banner from './_site/components/home/component.banner';
import SmoothScrollProvider from './_site/components/context/smooth-scroll-provider';
import { ThemeProvider } from './_site/components/context/theme-provider';
import Header from './_site/components/home/component.header';
import { Kanit as FontManager } from 'next/font/google';
import Footer from './_site/components/home/component.footer';

const font = FontManager({
  subsets: ['latin'],
  weight: ['400'],
});

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container transition-all duration-300 bg-background text-foreground mx-auto px-4  ${font.className}`}>
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableColorScheme>
            <Banner />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
