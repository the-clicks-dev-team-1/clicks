import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Steps = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-transpatent w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div
          className="text-3xl md:text-7xl text-gradient bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50 bg-clip-text text-transparent"
        >
          The way we work
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              1. Initial Meeting: Let&apos;s Get Acquainted
            </AccordionTrigger>
            <AccordionContent>
              We start with a casual conversation to understand your business,
              goals, and objectives. Tell us about your target audience and
              current marketing efforts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              2. In-Depth Analysis: Diving into Details
            </AccordionTrigger>
            <AccordionContent>
              We conduct a detailed analysis of your current marketing
              strategies, evaluate competitors and the market. We&apos;ll review
              your website and social media presence to know exactly where to
              start.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              3. Strategic Planning: Building the Plan
            </AccordionTrigger>
            <AccordionContent>
              At this stage, we develop a marketing strategy, set goals, KPIs,
              and an action plan. We identify the channels and methods of
              promotion, allocate budget and resources.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              4. Creativity and Content: Creating Magic
            </AccordionTrigger>
            <AccordionContent>
              Our creative minds develop unique branding and visual elements. We
              create content for your website, blogs, social media, and ad
              campaigns. Videos, graphics, and other marketing materials –
              everything will be ready!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              5. Technical Implementation: Innovating
            </AccordionTrigger>
            <AccordionContent>
              We handle the development and optimization of your website, set up
              and manage ad campaigns (PPC, SEO, SMM). We implement analytical
              tools to track data.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              6. Campaign Launch: Onward to Success!
            </AccordionTrigger>
            <AccordionContent>
              Content is published, ad campaigns are launched! We actively
              manage and optimize them to achieve maximum results.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              7. Monitoring and Reporting: Keeping You Informed
            </AccordionTrigger>
            <AccordionContent>
              We constantly monitor campaign results and regularly report to
              you. We share data analysis and recommendations to adjust the
              strategy and achieve better outcomes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              8. Feedback and Improvement: Growing Together
            </AccordionTrigger>
            <AccordionContent>
              We discuss the results, make changes, and optimize the strategy
              based on your feedback. We plan the next steps and long-term
              strategies to ensure your business continues to grow.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Steps;
