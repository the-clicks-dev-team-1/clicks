"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface NewsletterFormProps {
  onSuccess?: () => void;
  className?: string;
}

const NewsletterForm = ({ onSuccess, className }: NewsletterFormProps) => {
  const t = useTranslations("footer.newsletterFormProps");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

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
        setEmail("");
        onSuccess?.();
      } else {
        setMessage(data.error || "Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("email")}
          className={cn(
            "w-full md:w-auto p-3 rounded-lg text-white light:text-[var(--gray-100)] focus:outline-none focus:ring-2 focus:ring-sky-400 sm:flex-1",
            className
          )}
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300 disabled:opacity-50"
        >
          {isLoading ? t("subscribing") : t("subscribe")}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-white">{message}</p>}
    </div>
  );
};

export default NewsletterForm;
