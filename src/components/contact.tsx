"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxr823g",
        "template_cmt2sj3",
        e.currentTarget as HTMLFormElement,
        "niEuRekZU5oukj-vD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 lg:py-16" id="contact">
      <h2 className="text-4xl font-semibold font-header text-primary mb-4">
        contact
      </h2>
      <p className="text-base text-primary mb-6">
        Need a fast, fluid, and gorgeous website? Shoot me a message and we will
        see what is up.
      </p>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <form onSubmit={sendEmail} className="flex flex-col space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-base text-primary">
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name here"
                  className="border-b-2 border-primary py-2 px-0 text-primary focus:outline-none bg-transparent"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-base text-primary">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email here"
                  className="border-b-2 border-primary py-2 px-0 text-primary focus:outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-base text-primary">
                Message
              </label>
              <textarea
                required
                rows={7}
                id="message"
                name="message"
                placeholder="Enter your message here"
                className="border-b-2 border-primary py-2 px-0 text-primary focus:outline-none resize-none bg-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-center bg- border-2 border-primary text-primary font-bold text-base py-2 px-8 rounded-full hover:bg-primary hover:text-background transition"
            >
              Submit
            </button>
            <div className="mt-4">
              {status && (
                <p className="text-base text-accent border-2 border-accent py-2 px-4 rounded">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
