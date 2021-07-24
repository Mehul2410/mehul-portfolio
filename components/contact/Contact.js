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
    <div className="pt-20" id="contact">
      <h2 className="text-5xl text-center font-bold text-third">Contact Me</h2>
      <div className="flex flex-row flex-wrap items-center justify-evenly py-20">
        <div>
          <img src="./img/contact.svg" alt="" className="w-full lg:mb-20" />
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
            className="bg-fourth  text-first text-lg py-2 rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
