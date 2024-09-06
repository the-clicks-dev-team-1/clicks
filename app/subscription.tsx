import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Subscription successful!");
      } else {
        setMessage(data.error || "Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="py-20 bg-[var(--bg900)]">
      <div className="container px-4 md:px-20 lg:px-40 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-neutral-300 max-w-xl mx-auto">
          Get the latest insights and trends delivered straight to your inbox.
          Subscribe to our newsletter and never miss an update.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full sm:w-auto p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 sm:flex-1"
            required
          />
          <button
            type="submit"
            className="mt-4 sm:mt-0 sm:ml-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-center text-white">{message}</p>}
      </div>
    </div>
  );
};

export default SubscriptionForm;
