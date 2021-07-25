import React from "react";
import { supabase } from "../../supabase";

const Contact = () => {
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailresponse, setEmailresponse] = React.useState("");

  const form = async () => {
    if (contact.name && contact.message && contact.email) {
      const { data, error } = await supabase.from("contactform").insert({
        name: contact.name,
        email: contact.email,
        message: contact.message,
      });
      setEmailresponse("Your message has been save will revert asap!");
      setContact({ name: "", email: "", message: "" });
    } else {
      setEmailresponse("Something went wrong !");
    }
  };

  return (
    <div id="contact">
      <div className="pt-28"></div>
      <h2 className="text-5xl text-center font-bold text-third">Contact Me</h2>
      <div className="flex flex-row flex-wrap items-center justify-evenly py-20">
        <div className="relative">
          <img src="./img/contact.svg" alt="" className="w-full lg:mb-20" />
          <a
            className="absolute text-first top-laptop sm:text-lg sm:top-small text-2xl left-8 lg:top-tab lg:left-4"
            href="tel:+917977060652"
          >
            <p className="">+91 7977060652</p>
          </a>
          <a
            className="absolute  bottom-28 left-16"
            href="mailto:mehulgawhale123@gmail.com?subject=query&cc=mehulgawhale123@gmail.com"
          >
            <img src="./img/mail.svg" alt="" />
          </a>
          <a
            className="absolute  top-6 right-12 "
            href="https://www.linkedin.com/in/mehul-gawhale/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="./img/linkedin.svg" alt="" />
          </a>
          <a
            className="absolute top-6 left-7  "
            href="https://github.com/mehul2410"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 0C22.5084 0 29 6.6554 29 14.8667C29 21.4338 24.8501 27.0047 19.0921 28.9724C18.357 29.1188 18.096 28.6546 18.096 28.2587C18.096 27.7686 18.1134 26.1679 18.1134 24.1785C18.1134 22.7923 17.6494 21.8875 17.1289 21.4264C20.358 21.0581 23.751 19.8009 23.751 14.0908C23.751 12.4668 23.1884 11.1415 22.2575 10.1004C22.4083 9.72489 22.9056 8.21273 22.1154 6.16533C22.1154 6.16533 20.9003 5.76697 18.1322 7.68967C16.9496 7.36002 15.7278 7.19144 14.5 7.18911C13.2732 7.19133 12.0523 7.35992 10.8707 7.68967C8.0997 5.76697 6.8817 6.16533 6.8817 6.16533C6.09435 8.21273 6.5917 9.72489 6.74105 10.1004C5.8145 11.1415 5.24755 12.4668 5.24755 14.0908C5.24755 19.7864 8.6333 21.0629 11.8538 21.4385C11.4391 21.8097 11.0635 22.4645 10.933 23.4259C10.1065 23.8058 8.0069 24.4632 6.7135 22.1911C6.7135 22.1911 5.94645 20.7627 4.49065 20.6583C4.49065 20.6583 3.0769 20.6395 4.39205 21.5617C4.39205 21.5617 5.3418 22.0184 6.00155 23.7367C6.00155 23.7367 6.85271 26.3901 10.8866 25.4911C10.8939 26.7338 10.9069 27.9049 10.9069 28.2587C10.9069 28.6517 10.6401 29.1116 9.91655 28.9738C4.15425 27.0091 0 21.4352 0 14.8667C0 6.6554 6.4931 0 14.5 0Z"
                  fill="#122E4F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <form
          className="bg-first p-10 w-contact flex flex-col border space-y-2 border-fourth  rounded-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-fourth animate-pulse text-center">
            {emailresponse}
          </p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ name: e.target.value })}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="h-44 resize-none"
            placeholder="Message"
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
          <input
            type="submit"
            placeholder="Send"
            onClick={form}
            className="bg-fourth cursor-pointer text-first text-lg py-2 rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
