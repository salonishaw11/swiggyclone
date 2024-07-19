import React from "react";
const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-lg m-4 p-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black m-4 p-4"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-4 p-4"
          placeholder="message"
        />
        <button
          type="submit"
          className="border border-black bg-slate-200 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
