import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '../ui/table';
import { CheckCircle, XCircle, Info, CalendarIcon } from 'lucide-react'; // Import Lucide icons

const seoImprovements = [
  {
    area: 'Page Load Speed',
    currentStatus: '3.5s',
    potentialImprovement: '20%',
    description: 'Improving load speed enhances user experience and SEO rankings.',
    progress: 20,
    icon: <Info className="h-5 w-5 text-muted-foreground" />,
  },
  {
    area: 'Mobile Friendliness',
    currentStatus: 'Not Optimized',
    potentialImprovement: '40%',
    description: 'A mobile-friendly site is essential for SEO and user engagement.',
    progress: 40,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'Meta Tags Optimization',
    currentStatus: 'Missing',
    potentialImprovement: '50%',
    description: 'Meta tags are crucial for search engine indexing and click-through rates.',
    progress: 50,
    icon: <XCircle className="h-5 w-5 text-error" />,
  },
  {
    area: 'Alt Text for Images',
    currentStatus: 'Partial',
    potentialImprovement: '30%',
    description: 'Alt text improves accessibility and helps with image search rankings.',
    progress: 30,
    icon: <Info className="h-5 w-5 text-muted-foreground" />,
  },
  {
    area: 'Keyword Usage',
    currentStatus: 'Not Targeted',
    potentialImprovement: '60%',
    description: 'Effective keyword usage increases visibility and relevance in search results.',
    progress: 60,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'Backlinks',
    currentStatus: '5 Links',
    potentialImprovement: '100%',
    description: 'Quality backlinks significantly boost authority and ranking potential.',
    progress: 100,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'Content Quality',
    currentStatus: 'Low',
    potentialImprovement: '50%',
    description: 'High-quality content retains visitors and attracts backlinks.',
    progress: 50,
    icon: <XCircle className="h-5 w-5 text-error" />,
  },
  {
    area: 'Social Media Integration',
    currentStatus: 'Minimal',
    potentialImprovement: '35%',
    description: 'Integrating social media boosts traffic and enhances brand visibility.',
    progress: 35,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'User Engagement Rate',
    currentStatus: '1.5 Minutes',
    potentialImprovement: '25%',
    description: 'Higher engagement leads to better rankings and user retention.',
    progress: 25,
    icon: <Info className="h-5 w-5 text-muted-foreground" />,
  },
  {
    area: 'Internal Linking',
    currentStatus: 'Poor',
    potentialImprovement: '30%',
    description: 'Effective internal linking helps with site navigation and SEO.',
    progress: 30,
    icon: <XCircle className="h-5 w-5 text-error" />,
  },
  {
    area: 'Schema Markup',
    currentStatus: 'Not Implemented',
    potentialImprovement: '45%',
    description: 'Schema markup improves how search engines read your content.',
    progress: 45,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'Bounce Rate',
    currentStatus: '75%',
    potentialImprovement: '20%',
    description: 'A high bounce rate can negatively affect your rankings.',
    progress: 20,
    icon: <XCircle className="h-5 w-5 text-error" />,
  },
  {
    area: 'Domain Authority',
    currentStatus: '30',
    potentialImprovement: '50%',
    description: 'Higher domain authority improves ranking potential.',
    progress: 50,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'HTTPS Implementation',
    currentStatus: 'Not Secured',
    potentialImprovement: '100%',
    description: 'HTTPS is essential for security and trustworthiness.',
    progress: 100,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'Local SEO Optimization',
    currentStatus: 'Not Optimized',
    potentialImprovement: '40%',
    description: 'Local SEO helps you connect with nearby customers effectively.',
    progress: 40,
    icon: <Info className="h-5 w-5 text-muted-foreground" />,
  },
  {
    area: 'Site Architecture',
    currentStatus: 'Complex',
    potentialImprovement: '30%',
    description: 'A well-structured site enhances crawlability and user experience.',
    progress: 30,
    icon: <XCircle className="h-5 w-5 text-error" />,
  },
  {
    area: 'Content Updates Frequency',
    currentStatus: 'Infrequent',
    potentialImprovement: '20%',
    description: 'Regular updates keep your content fresh and relevant.',
    progress: 20,
    icon: <Info className="h-5 w-5 text-muted-foreground" />,
  },
  {
    area: 'Image Compression',
    currentStatus: 'High',
    potentialImprovement: '25%',
    description: 'Compressed images improve load time and user experience.',
    progress: 25,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'Mobile Page Speed',
    currentStatus: '4s',
    potentialImprovement: '30%',
    description: 'Improving mobile speed enhances user satisfaction and rankings.',
    progress: 30,
    icon: <XCircle className="h-5 w-5 text-error" />,
  },
  {
    area: 'External Links',
    currentStatus: 'Few',
    potentialImprovement: '50%',
    description: 'Quality external links improve authority and SEO performance.',
    progress: 50,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
  {
    area: 'Content Length',
    currentStatus: 'Short',
    potentialImprovement: '20%',
    description: 'Longer content tends to rank better in search engines.',
    progress: 20,
    icon: <XCircle className="h-5 w-5 text-error" />,
  },
  {
    area: 'URL Structure',
    currentStatus: 'Complex',
    potentialImprovement: '40%',
    description: 'A clean URL structure is better for SEO and user experience.',
    progress: 40,
    icon: <CheckCircle className="h-5 w-5 text-success" />,
  },
];

export default function SeoImprovementTable() {
  return (
    <section className="min-h-[90vh] py-12 transition-all duration-300 flex-col gap-4 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full border rounded-3xl">
      <div className="mb-10 flex-col md:mb-16 flex justify-center items-center">
        <h2 className="mb-4 text-center text-4xl font-bold md:mb-6">SEO Improvement Insights</h2>
        <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
          Discover how our SEO services stand out and give your business a competitive edge through targeted
          improvements.
        </p>
      </div>
      <Table className="h-full w-full  ">
        <TableCaption>Potential SEO Improvements for Your Website</TableCaption>
        <TableHeader>
          <TableRow className="text-3xl text-primary">
            <TableHead>SEO Area</TableHead>
            <TableHead>Current Status</TableHead>
            <TableHead>Potential Improvement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seoImprovements.map((improvement, index) => (
            <TableRow
              key={improvement.area}
              className="py-2 cursor-pointer">
              <TableCell className="font-medium text-xl flex items-center">
                {improvement.icon}
                <span className="ml-2">{improvement.area}</span>
              </TableCell>
              <TableCell>
                <span className="text-xl">{improvement.currentStatus}</span>
                <p className="text-muted-foreground text-sm">{improvement.description}</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <span>{improvement.potentialImprovement}</span>
                  <div className="relative w-full mx-4">
                    <div className="h-2  bg-muted-foreground/20 rounded-full">
                      <div
                        className="h-2 bg-primary rounded-full"
                        style={{ width: `${improvement.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </section>
  );
}
