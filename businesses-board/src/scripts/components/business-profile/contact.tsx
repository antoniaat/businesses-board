import React from 'react';

interface Props {
  phone: string,
  email: string,
}

const Contact: React.FC<Props> = ({ phone, email }) => (
  <section className="contact">
    <article className="contact-phone">
      {phone}
    </article>
    <article className="contact-email">
      {email}
    </article>
  </section>
);

export default Contact;
