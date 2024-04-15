const ContactForm = () => {
  return (
    <form className="bg-white rounded-md">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="hello@email.com"
        className="w-full px-3 py-2 mb-5 text-lg text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
        required
        disabled
        aria-disabled
      />
      <label className="sr-only">Message</label>
      <textarea
        type="text"
        name="message"
        className="w-full px-3 py-2 mb-5 text-lg text-gray-800 placeholder-gray-500 placeholder-opacity-50 border border-gray-200 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
        placeholder="Your message..."
        required
        disabled
        aria-disabled
      />
      <button
        type="submit"
        disabled
        aria-disabled
        className="w-full px-4 py-2 text-lg font-normal leading-6 text-gray-400 bg-gray-300 rounded-md md:ml-1 md:w-auto hover:bg-red-600 focus:outline-none"
      >
        Contact Us
      </button>
    </form>
  );
};

export default ContactForm;
