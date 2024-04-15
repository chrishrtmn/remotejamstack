const NewsletterForm = () => {
  return (
    <form className="relative p-1 bg-white rounded-md md:flex">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        aria-disabled
        disabled
        placeholder="Not currently accepting signups..."
        className="flex-grow w-full px-3 py-2 mb-1 text-mg text-gray-400 border-none hover:cursor-not-allowed rounded-md md:mb-0 md:w-auto focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent md:rounded-tl-md md:rounded-bl-md"
        required
      />
      <button
        aria-disabled
        disabled
        type="submit"
        className="w-full px-4 py-2 text-lg font-normal leading-6 md:min-w-[115px] md:max-w-[150px] text-gray-400 bg-gray-300 rounded-md md:ml-1 hover:cursor-not-allowed focus:outline-none md:rounded-tr-md md:rounded-tl-none md:rounded-bl-none md:rounded-br-md"
      >
        Notify Me
      </button>
    </form>
  );
};

export default NewsletterForm;
