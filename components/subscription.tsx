import NewsletterForm from "./NewsLetterForm";

const SubscriptionSection = () => {
  return (
    <div className="py-20 bg-[var(--bg900)]">
      <div className="container px-4 md:px-20 lg:px-40 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-neutral-300 max-w-xl mx-auto mb-6">
          Get the latest insights and trends delivered straight to your inbox.
          Subscribe to our newsletter and never miss an update.
        </p>
        <NewsletterForm className="bg-neutral-800 light:bg-[var(--gray-0)]" />
      </div>
    </div>
  );
};

export default SubscriptionSection;
