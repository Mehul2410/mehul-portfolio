import React from "react";

const Contact = () => {
  return (
    <div className="pt-20">
      <h2 className="text-5xl text-center font-bold text-third">Contact Me</h2>
      <div className="flex flex-row flex-wrap justify-evenly py-20">
        <div>
          <img src="./img/contact.svg" alt="" className="w-contact" />
        </div>
        <form className="bg-first p-10 flex flex-col border space-y-2 border-fourth  rounded-2xl">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="email" />
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="message"
          />
          <input
            type="submit"
            placeholder="submit"
            className="bg-fourth mt-7 text-first text-lg py-2 rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
