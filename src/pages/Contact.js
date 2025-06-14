import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-blue-50 text-gray-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Priya Dharshini"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="priya@example.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
