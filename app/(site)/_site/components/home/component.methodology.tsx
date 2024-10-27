// src/components/AgileSEOComponent.tsx
import React from 'react';
import {
  Calendar,
  CheckCircle,
  BarChart,
  Eye,
  RefreshCcw,
  Users,
  Star,
  CheckSquare,
  Shield,
  Target,
  Lightbulb,
} from 'lucide-react';

const AgileSEOComponent: React.FC = () => {
  const methodologySteps = [
    {
      title: 'Sprint Planning',
      description: 'Set short-term SEO goals, prioritize tasks, and assign them.',
      icon: <Calendar className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Implementation',
      description: 'Execute planned tasks with a focus on quick wins.',
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Testing and Measurement',
      description: 'Monitor KPIs and conduct A/B tests.',
      icon: <BarChart className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Review and Analysis',
      description: 'Analyze results and document learnings.',
      icon: <Eye className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Adaptation',
      description: 'Adjust strategies based on insights and algorithm changes.',
      icon: <RefreshCcw className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Retrospective',
      description: 'Discuss outcomes and identify process improvements.',
      icon: <Users className="w-6 h-6 text-primary" />,
    },
  ];

  const keyPrinciples = [
    {
      title: 'Flexibility',
      description: 'Adapt quickly to changes.',
      icon: <Star className="w-6 h-6 text-green-600" />,
    },
    {
      title: 'Continuous Improvement',
      description: 'Regularly refine strategies.',
      icon: <CheckSquare className="w-6 h-6 text-green-600" />,
    },
    {
      title: 'Collaboration',
      description: 'Encourage teamwork.',
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Base decisions on data.',
      icon: <BarChart className="w-6 h-6 text-green-600" />,
    },
    {
      title: 'User-Centric Approach',
      description: 'Improve user experience.',
      icon: <Lightbulb className="w-6 h-6 text-green-600" />,
    },
    {
      title: 'Rapid Iteration',
      description: 'Implement changes quickly.',
      icon: <Target className="w-6 h-6 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: 'Faster Response',
      description: 'Respond quickly to changes in the market.',
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Efficient Resources',
      description: 'Optimize the use of time and budget.',
      icon: <CheckSquare className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Improved Collaboration',
      description: 'Enhance teamwork across departments.',
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Alignment with Goals',
      description: 'Better alignment with business objectives.',
      icon: <Target className="w-6 h-6 text-blue-600" />,
    },
    {
      title: 'Increased Innovation',
      description: 'Foster a culture of experimentation.',
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    },
  ];

  const challenges = [
    {
      title: 'Mindset Shift',
      description: 'Requires a shift in organizational mindset.',
      icon: <Shield className="w-6 h-6 text-red-600" />,
    },
    {
      title: 'Rigid Structures',
      description: 'Can be difficult to implement in rigid structures.',
      icon: <RefreshCcw className="w-6 h-6 text-red-600" />,
    },
    {
      title: 'Tracking Capabilities',
      description: 'Needs robust tracking capabilities.',
      icon: <BarChart className="w-6 h-6 text-red-600" />,
    },
    {
      title: 'Team Adaptability',
      description: 'Requires adaptability from team members.',
      icon: <Users className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <section className="min-h-[90vh] py-16 overflow-hidden flex-col mb-4 gap-4 transition-all duration-300 p-4 flex justify-center items-center mt-4 h-full bg-gradient-to-tr from-secondary/20 via-primary/10 to-secondary/20 w-full  border rounded-3xl">
      <div className="mb-10 flex-col md:mb-16 flex justify-center items-center">
        <h2 className="mb-4 text-center text-4xl font-bold md:mb-6">Agile SEO Methodology</h2>
        <p className="mx-auto max-w-screen-md text-center text-muted-foreground  md:text-lg">
          Discover how our SEO services stand out and give your business a competitive edge.
        </p>
      </div>
      {/* Methodology Steps Section */}
      <div className="mb-6 grid grid-cols-6 w-full gap-4">
        <h3 className="text-2xl  col-span-2 font-semibold text-primary mb-4 h-full w-full bg-secondary flex justify-center items-center text-center rounded-3xl  shadow">
          Methodology Steps
        </h3>
        <div className="grid col-span-4 grid-cols-1 md:grid-cols-2 gap-4">
          {methodologySteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-secondary p-8 rounded-md shadow-sm transition-transform transform hover:scale-102">
              {step.icon}
              <div>
                <h4 className="font-bold">{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Principles div */}
      <div className="mb-6 grid grid-cols-6 w-full gap-4">
        <h3 className="text-2xl  col-span-2 font-semibold text-primary mb-4 h-full w-full bg-secondary flex justify-center items-center text-center rounded-3xl  shadow">
          Key Principles
        </h3>
        <div className="grid col-span-4 grid-cols-1 md:grid-cols-2 gap-4">
          {keyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-secondary p-8 rounded-md shadow-sm transition-transform transform hover:scale-102">
              {principle.icon}
              <div>
                <h4 className="font-bold">{principle.title}</h4>
                <p>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits div */}
      <div className="mb-6 grid grid-cols-6 w-full gap-4">
        <h3 className="text-2xl  col-span-2 font-semibold text-primary mb-4 h-full w-full bg-secondary flex justify-center items-center text-center rounded-3xl  shadow">
          Benefits
        </h3>
        <div className="grid col-span-4 grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-secondary p-8 rounded-md shadow-sm transition-transform transform hover:scale-102">
              {benefit.icon}
              <div>
                <h4 className="font-bold">{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges div */}
      <div className="mb-6 grid grid-cols-6 w-full gap-4">
        <h3 className="text-2xl  col-span-2 font-semibold text-primary mb-4 h-full w-full bg-secondary flex justify-center items-center text-center rounded-3xl  shadow">
          Challenges
        </h3>
        <div className="grid col-span-4 grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-secondary p-8 rounded-md shadow-sm transition-transform transform hover:scale-102">
              {challenge.icon}
              <div>
                <h4 className="font-bold">{challenge.title}</h4>
                <p>{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgileSEOComponent;
