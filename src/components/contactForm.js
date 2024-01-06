"use client";
import { useState } from "react";
import "./contact.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    area: "",
    rent: "",
  });
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currentData) => {
      return { ...currentData, [changedField]: newValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkRes = await fetch("api/userExists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const { checkEmailExists, checkPhoneExists } = await checkRes.json();

    if (checkEmailExists || checkPhoneExists) {
      // Return an error if either exists
      setError(["Email or Phone number already exists."]);
      return;
    }

    const res = await fetch("api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Corrected the header name
      body: JSON.stringify(formData),
    });
    console.log("Form Data: ", formData);

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        area: "",
        rent: "",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 mx-44 p-16 px-40 pt-8 border rounded-3xl flex flex-col gap-4"
      >
        <h1 className="text-4xl font-semibold text-center mb-4">
          Apply now to be first in line
        </h1>

        <div className="name flex justify-between">
          <div className="firstname flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          <div className="lastname flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
              placeholder="Your surname"
            />
          </div>
        </div>
        <div className="email flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="email@mail.com"
          />
        </div>
        <div className="phone flex flex-col">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
            placeholder="+27 123 456 7890"
          />
        </div>
        <div className="area flex flex-col">
          <label htmlFor="area">Area of property</label>
          <input
            type="text"
            id="area"
            value={formData.area}
            name="area"
            onChange={handleChange}
            placeholder="Woodstock, Cape Town, South Africa"
          />
        </div>
        <div className="rent flex flex-col">
          <label htmlFor="rent">Rent fees for the property (R)</label>
          <div className="">
            <input
              type="number"
              min="0"
              id="rent"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              placeholder="10 000"
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-full mt-4 px-5 py-2 text-white bg-blue-600 hover:bg-blue-800 hover:text-black transition ease-in-out duration-300 font-medium capitalize"
        >
          Submit Application
        </button>
        {error.length > 0 && (
          <div className="errors bg-slate-100 rounded-md p-4">
            {" "}
            {error.map((error, index) => (
              <div
                className={`error ${
                  success ? "text-green-600" : "text-red-600"
                } py-1`}
                key={index}
              >
                {error}
              </div>
            ))}
          </div>
        )}
      </form>
    </>
  );
}
