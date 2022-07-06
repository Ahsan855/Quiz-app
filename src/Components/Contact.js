import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>your message has been succsesfully sent. i will contact you soon.</p>
  );
};

const Contact = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0mnj1h4",
        "template_aff937n",
        form.current,
        "-6NCfkZzSqCmZNykw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div id="contact">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57930.486595553644!2d89.33518714882788!3d24.841455210267195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1654933817318!5m2!1sen!2sbd"
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 sm:h-1/6 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 mb-1">Bogura, Rajshahi , Bangladesh</p>
                <h1>My Resume</h1>
                <a
                  className="text-primary underline text-2xl"
                  href="https://drive.google.com/file/d/1GFCbamBcTuBQk-LZEw9K7eLvVJU5Tzcj/view?usp=sharing"
                >
                  Link
                </a>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  md.ahsanhabib9869@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">01744154906</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-[#60A5FA] text-4xl font-bold title-font mb-5">
              Contact{" "}
              <span className="text-[#570DF8] border-b-2 border-primary">
                Me
              </span>
            </h2>

            <form onSubmit={sendEmail} ref={form}>
              <div className="relative mb-4 text-left">
                <label for="name" className="leading-7 text-md text-accent">
                  fullName
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 text-left">
                <label for="email" className="leading-7 text-md text-accent">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 text-left">
                <label for="message" className="leading-7 text-md text-accent">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white btn-primary btn btn-outline text-lg"
              >
                Send Message
              </button>
              <div>{result ? <Result /> : null}</div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
