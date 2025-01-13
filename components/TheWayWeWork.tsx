import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TheWayWeWork() {
  const testimonials = [
    {
      quote:
        "We start with a casual conversation to understand your business, goals, and objectives. Tell us about your target audience and current marketing efforts.",
      name: "1. Initial Meeting: Let's Get Acquainted",
      designation: "",
      src: "/images/thewaywework/initial-meeting.png",
    },
    {
      quote:
        "We conduct a detailed analysis of your current marketing strategies, evaluate competitors and the market. We'll review your website and social media presence to know exactly where to start.",
      name: "2. In-Depth Analysis: Diving into Details",
      designation: "",
      src: "/images/thewaywework/in-debth.webp",
    },
    {
      quote:
        "At this stage, we develop a marketing strategy, set goals, KPIs, and an action plan. We identify the channels and methods of promotion, allocate budget and resources.",
      name: "3. Strategic Planning: Building the Plan",
      designation: "",
      src: "/images/thewaywework/strategic-planning.jpg",
    },
    {
      quote:
        "Our creative minds develop unique branding and visual elements. We create content for your website, blogs, social media, and ad campaigns. Videos, graphics, and other marketing materials – everything will be ready!",
      name: "4. Creativity and Content: Creating Magic",
      designation: "",
      src: "/images/thewaywework/creativity.jpg",
    },
    {
      quote:
        "We handle the development and optimization of your website, set up and manage ad campaigns (PPC, SEO, SMM). We implement analytical tools to track data.",
      name: "5. Technical Implementation: Innovating",
      designation: "",
      src: "/images/thewaywework/technical.jpg",
    },
    {
      quote:
        " Content is published, ad campaigns are launched! We actively manage and optimize them to achieve maximum results.",
      name: "6. Campaign Launch: Onward to Success!",
      designation: "",
      src: "/images/thewaywework/campaign.webp",
    },
    {
      quote:
        "We constantly monitor campaign results and regularly report to you. We share data analysis and recommendations to adjust the strategy and achieve better outcomes.",
      name: "7. Monitoring and Reporting: Keeping You Informed",
      designation: "",
      src: "/images/thewaywework/monitoring-reporting.webp",
    },
    {
      quote:
        "We discuss the results, make changes, and optimize the strategy based on your feedback. We plan the next steps and long-term strategies to ensure your business continues to grow.",
      name: "8. Feedback and Improvement: Growing Together",
      designation: "",
      src: "/images/thewaywework/Customer-Feedback.webp",
    },
  ];

  return (
    <div className="container mb-32 md:px-10">
      <div
        className="text-3xl md:text-7xl text-gradient bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50 bg-clip-text text-transparent #text-center"
      >
        The way we work
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
