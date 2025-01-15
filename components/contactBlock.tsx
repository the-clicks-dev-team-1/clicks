"use client";

import ContactForm from "../app/snippets/form-snippet";

type ContactBlockProps = {
  consultation?: string;
};

const ContactBlock = ({ consultation }: ContactBlockProps) => {
  return <ContactForm consultation={consultation} />;
};

export default ContactBlock;
