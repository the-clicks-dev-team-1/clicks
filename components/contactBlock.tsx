"use client";

import ContactForm from "../app/snippets/form-snippet";

type ContactBlockProps = {
  consultation?: string;
};

const ContactBlock = ({ consultation }: ContactBlockProps) => {
  return (
    <div id="contact">
      <ContactForm consultation={consultation} />
    </div>
  );
};

export default ContactBlock;
