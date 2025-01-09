import NewsletterForm from "./NewsLetterForm";

const SubscriptionSection = () => {
  return (
    <div className="py-20 mb-32 #bg-[var(--bg900)] bg-[var(--blue1)] light:bg-[var(--ice-blue)]">
      <div className="container px-4 md:px-20 lg:px-40 mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)] max-w-xl mx-auto mb-6">
          Get the latest insights and trends delivered straight to your inbox.
          Subscribe to our newsletter and never miss an update.
        </p>
        <NewsletterForm className="#bg-neutral-800 bg-[var(--blue2)] light:bg-[var(--gray-0)] border border-[var(--ocean-blue)]" />
      </div>
    </div>
  );
};

export default SubscriptionSection;
