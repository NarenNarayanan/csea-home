function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-left font-medium">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-left font-medium">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-left font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
