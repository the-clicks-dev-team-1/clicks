import React from 'react';

const Form = () => {
  return (
    <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg mb-4">
            Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> <a href="mailto:info@theclicks.com" className="text-sky-400">sales@theclicks.com</a>
          </p>
          <p className="text-lg mb-2">
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-sky-400">+1(506)477-0324</a>
          </p>
          <p className="text-lg">
            <strong>Address:</strong> Dieppe, NB, Canada
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Send Us a Message</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;