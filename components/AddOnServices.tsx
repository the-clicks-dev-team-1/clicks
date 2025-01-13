import { AnimatedTestimonials } from "./ui/animated-testimonials";

const AddOnServices = () => {
  const testimonials = [
    {
      quote:
        "We create compelling videos that showcase your story, promote your products, and captivate viewers across all platforms. Whether it’s promotional videos, tutorials, or social media reels, we bring your vision to life with creativity and precision.",
      name: "Video Production",
      designation: "",
      src: "/images/addonservices/video.png",
    },
    {
      quote:
        "We connect you with influencers who align with your audience and values, crafting authentic campaigns that drive engagement and deliver measurable results.",
      name: "Influencer Marketing",
      designation: "",
      src: "/images/addonservices/influencer.png",
    },
    {
      quote:
        "We optimize your online presence to ensure your business appears at the top of local search results, from Google Maps to 'near me' searches.",
      name: "Local SEO",
      designation: "",
      src: "/images/addonservices/local.png",
    },
    {
      quote:
        "We monitor online reviews, manage public perception, and implement strategies to build trust and credibility. By addressing feedback and promoting positive content, we help your business maintain a strong, reliable presence.",
      name: "Reputation Management",
      designation: "",
      src: "/images/addonservices/reputation.png",
    },
  ];

  return (
    <div className="container mb-32 md:px-10">
      <div className="font-bold text-2xl md:text-3xl text-gradient bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50 bg-clip-text text-transparent">
        Add-On Services
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default AddOnServices;
