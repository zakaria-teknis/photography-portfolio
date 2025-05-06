"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const inputError = (element) => {
    return (
      validationErrors.length > 0 &&
      validationErrors.some((error) => error.element === element)
    );
  };

  const inputErrorMessage = (element) => {
    const error = validationErrors.find((error) => error.element === element);
    return error ? error.message : "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = [];

    if (!name || /^\s+$/.test(name)) {
      errors.push({
        element: "name",
        message: "Please enter your name",
      });
    }

    if (!email || /^\s+$/.test(email)) {
      errors.push({
        element: "email",
        message: "Please enter your email",
      });
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({
        element: "email",
        message: "Please enter a valid email",
      });
    }

    if (!message || /^\s+$/.test(message)) {
      errors.push({
        element: "message",
        message: "Please enter a message",
      });
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Message", message);

    try {
      setLoading(true);
      const res = await fetch("https://formspree.io/f/mdkggjoq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setValidationErrors([]);
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }

      if (!res.ok) {
        setValidationErrors([]);
        setSuccess(false);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    } catch (error) {
      setValidationErrors([]);
      setSuccess(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form id="contact-form" className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div>
          <label
            id="name-label"
            className="flex flex-col gap-1 mb-1 font-bold"
            htmlFor="name">
            Name
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={loading || success || error}
              aria-labelledby="name-label"
              aria-describedby="name-error"
              className={`font-normal px-3 py-2 border ${inputError("name") ? "border-red-500" : "border-zinc-50"} rounded-sm placeholder:text-zinc-400`}
              placeholder="Your Name"
              id="name"
              name="name"
              type="text"
            />
          </label>
          {inputError("name") && (
            <span
              aria-live="polite"
              id="name-error"
              className="text-red-500 font-medium">
              {inputErrorMessage("name")}
            </span>
          )}
        </div>
        <div>
          <label
            id="email-label"
            className="flex flex-col gap-1 mb-1 font-bold"
            htmlFor="email">
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loading || success || error}
              aria-labelledby="email-label"
              aria-describedby="email-error"
              className={`font-normal px-3 py-2 border ${inputError("email") ? "border-red-500" : "border-zinc-50"} rounded-sm placeholder:text-zinc-400`}
              placeholder="Your Email"
              id="email"
              name="email"
              type="email"
            />
          </label>
          {inputError("email") && (
            <span
              aria-live="polite"
              id="email-error"
              className="text-red-500 font-medium">
              {inputErrorMessage("email")}
            </span>
          )}
        </div>
        <div>
          <label
            id="message-label"
            className="flex flex-col gap-1 mb-1 font-bold"
            htmlFor="message">
            Message
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              disabled={loading || success || error}
              aria-labelledby="message-label"
              aria-describedby="message-error"
              className={`font-normal px-3 py-2 border ${inputError("message") ? "border-red-500" : "border-zinc-50"} rounded-sm placeholder:text-zinc-400`}
              rows="3"
              placeholder="Your Message..."
              id="message"
              name="message"
              type=""></textarea>
          </label>
          {inputError("message") && (
            <span
              aria-live="polite"
              id="message-error"
              className="text-red-500 font-medium">
              {inputErrorMessage("message")}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={(e) => handleSubmit(e)}
        disabled={loading && success && error}
        id="submit-button"
        className={`text-center font-medium px-4 py-2 border ${loading ? "bg-transparent border-zinc-50" : success ? "bg-green-500 border-green-500" : error ? "bg-red-500 border-red-500" : "bg-zinc-50 border-zinc-50"} ${!loading && !success && !error && "text-zinc-950 hover:cursor-pointer hover:text-zinc-50 hover:bg-zinc-950 border"}`}
        type="submit">
        {loading
          ? "Sending..."
          : success
            ? "Thank you for reaching out! ❤️"
            : error
              ? "Something went wrong, please try again in a few seconds."
              : "Let's begin"}
      </button>
    </form>
  );
}
