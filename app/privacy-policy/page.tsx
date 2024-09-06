"use client";

import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";

const PrivacyPolicy: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Your privacy is important to us. This Privacy Policy explains how The
          Clicks Full-Service Digital Marketing Agency collects, uses, and
          discloses your information.
        </p>
      </div>

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="text-[var(--text-gray)]">
            We collect various types of information in connection with the
            services we provide, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-[var(--text-gray)]">
            <li>
              Personal Information: Name, email address, phone number, and other
              contact details.
            </li>
            <li>
              Usage Data: Information about how you interact with our website,
              such as IP addresses, browser types, and pages viewed.
            </li>
            <li>
              Cookies and Tracking Technologies: Information collected through
              cookies and other tracking technologies.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-[var(--text-gray)]">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-[var(--text-gray)]">
            <li>Providing and improving our services.</li>
            <li>Communicating with you about our services and offerings.</li>
            <li>
              Analyzing usage of our website to improve our content and user
              experience.
            </li>
            <li>
              Complying with legal obligations and protecting our legal rights.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            3. Sharing Your Information
          </h2>
          <p className="text-[var(--text-gray)]">
            We may share your information with third parties under certain
            circumstances, including:
          </p>
          <ul className="list-disc list-inside mt-4 text-[var(--text-gray)]">
            <li>
              Service Providers: We may share your information with service
              providers who help us operate our business.
            </li>
            <li>
              Legal Requirements: We may disclose your information to comply
              with legal obligations or in response to lawful requests by public
              authorities.
            </li>
            <li>
              Business Transfers: We may share or transfer your information in
              connection with a merger, sale, or other business transaction.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">4. Your Rights</h2>
          <p className="text-[var(--text-gray)]">
            You have certain rights regarding your personal information,
            including:
          </p>
          <ul className="list-disc list-inside mt-4 text-[var(--text-gray)]">
            <li>
              The right to access the personal information we hold about you.
            </li>
            <li>
              The right to request that we correct any inaccuracies in your
              personal information.
            </li>
            <li>
              The right to request the deletion of your personal information.
            </li>
            <li>
              The right to object to the processing of your personal
              information.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            5. Security of Your Information
          </h2>
          <p className="text-[var(--text-gray)]">
            We take the security of your information seriously and implement
            reasonable measures to protect it. However, no method of
            transmission over the Internet or method of electronic storage is
            completely secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-[var(--text-gray)]">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this Privacy Policy periodically to stay
            informed about how we are protecting your information.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-[var(--text-gray)]">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <p className="mt-4 text-[var(--text-gray)]">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@theclicks.ca" className="text-sky-400">
              info@theclicks.ca
            </a>
          </p>
          <p className="mt-2 text-[var(--text-gray)]">
            <strong>Phone:</strong> +1 (506) 477-0324
          </p>
          <p className="mt-2 text-[var(--text-gray)]">
            <strong>Address:</strong> 46 Ruelle Désiré, Dieppe, NB, Canada, E1A
            0G9
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
