const Contact = () => {
  return (
    <div className="bg-gray-100 h-screen mt-32 mb-20">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-7">Contact Us</h1>
        <div className="bg-white p-8 rounded-md shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
