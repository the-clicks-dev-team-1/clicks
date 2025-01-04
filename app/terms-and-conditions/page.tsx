"use client";

import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const TermsAndConditions: FC = () => {
  return (
    <div className="bg-black light:bg-white text-white">
      <Navbar />

      <div className="bg-[var(--blue1)] light:bg-[var(--light-blue)] #bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms
          and Conditions&quot;) carefully before using The Clicks Full-Service
          Digital Marketing Agency website.
        </p>
      </div>

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto text-[var(--light-blue)] light:text-[var(--gray-70)]">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            By accessing or using the The Clicks website, you agree to be bound
            by these Terms. If you disagree with any part of the terms, then you
            may not access the service.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            2. Intellectual Property
          </h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            The content, design, and logos on this website are owned by The
            Clicks Full-Service Digital Marketing Agency and are protected by
            intellectual property laws. You may not use, reproduce, or
            distribute any content without our permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">3. Use of Service</h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            You agree to use the website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict or inhibit
            anyone else use of the website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">4. Termination</h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            We may terminate or suspend your access to our service immediately,
            without prior notice or liability, for any reason whatsoever,
            including if you breach the Terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            In no event shall The Clicks, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">6. Changes to Terms</h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            We reserve the right to modify or replace these Terms at any time.
            If a revision is material, we will try to provide at least 30 days
            notice before any new terms take effect. What constitutes a material
            change will be determined at our sole discretion.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">7. Governing Law</h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            These Terms shall be governed and construed in accordance with the
            laws of Canada, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@theclicks.ca" className="text-sky-400">
              info@theclicks.ca
            </a>
          </p>
          <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>Phone:</strong> +1 (506) 871-8210
          </p>
          <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>Address:</strong> 860 Main Street, Moncton, NB, Canada, E1A
            0G9
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
