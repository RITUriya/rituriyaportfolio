const Contact = () => {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-tr from-white via-blue-50 to-sky-100 contact-container">
      <div className="max-w-3xl mx-auto text-center contact-title">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Get in Touch</h1>
        <p className="mb-4 text-gray-700">
          Let's collaborate, build, or chat! ✉️
        </p>
        <div className="mb-8 flex flex-col md:flex-row justify-center gap-10 text-center">
          <div>
            <p className="text-lg font-medium">
              {" "}
              <a
                href="mailto:rituriya093@gmail.com"
                className="text-blue-600 hover:underline"
              >
                📧 Email
              </a>
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">
              {" "}
              <a
                href="https://www.linkedin.com/in/ritur06/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                💼 LinkedIn
              </a>
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">
              {" "}
              <a
                href="https://github.com/RITUriya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                👨‍💻 GitHub
              </a>
            </p>
          </div>
        </div>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="grid gap-6 text-left contact-description"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 border rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};
export default Contact;
