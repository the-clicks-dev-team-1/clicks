"use client";

import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";

const Licensing: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold">Licensing</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          The Clicks Full-Service Digital Marketing Agency is committed to
          complying with all applicable licenses and regulations. This page
          outlines our licensing information.
        </p>
      </div>

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">1. Licensing Overview</h2>
          <p className="text-[var(--text-gray)]">
            The Clicks is a fully licensed digital marketing agency operating
            under the regulations and guidelines set forth by the relevant
            authorities. Our services are provided in accordance with the legal
            requirements of the regions we operate in.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            2. Intellectual Property
          </h2>
          <p className="text-[var(--text-gray)]">
            All content, trademarks, and data on this site, including but not
            limited to software, databases, text, graphics, icons, hyperlinks,
            private information, designs, and agreements, are the property of
            The Clicks or its content suppliers and are protected by local and
            international intellectual property laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            3. Third-Party Licenses
          </h2>
          <p className="text-[var(--text-gray)]">
            The Clicks may utilize third-party software and services that are
            licensed under various licenses. We ensure that all third-party
            components are used in compliance with their respective licenses.
          </p>
          <ul className="list-disc list-inside mt-4 text-[var(--text-gray)]">
            <li>
              Google Analytics: Used for tracking and reporting website traffic.
            </li>
            <li>FontAwesome: Used for icons and visual elements.</li>
            <li>Unsplash: Used for stock images.</li>
            {/* Добавьте другие лицензии и третьи стороны, если необходимо */}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            4. Compliance and Reporting
          </h2>
          <p className="text-[var(--text-gray)]">
            The Clicks is committed to maintaining compliance with all licensing
            requirements. If you believe there is a violation of licensing
            terms, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">5. Contact Us</h2>
          <p className="text-[var(--text-gray)]">
            If you have any questions or concerns about our licensing
            information, please contact us at:
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

export default Licensing;
