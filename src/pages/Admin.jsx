import React, { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    bgImg: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // To track submission state
  const [error, setError] = useState(""); // For error handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    try {
      // Make API call
      const response = await fetch("https://ss-backend-hikp.onrender.com/api/v2/pushdata", {
        method: "POST", // Assuming POST is required for data submission
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully");
        setFormData({ title: "", bgImg: "", description: "" }); // Clear form after submission
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      setError("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${

          "https://www.nationsphotolab.com/cdn/shop/articles/2fe1cc57dafda934d73a023066de8337_807x.jpg?v=1708416066"
        })`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Background overlay */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-xl mx-auto bg-[#ffffff9e] rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-[#003ADE] mb-4">
            Add Your Details
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Please provide your information below and click Add to submit the
            form.
          </p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500 text-white text-center p-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Headline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bgImg"
                className="block text-sm font-semibold text-gray-700"
              >
                Image Link
              </label>
              <input
                type="text"
                id="bgImg"
                name="bgImg"
                value={formData.bgImg}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Image Link"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Write a brief description"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 mt-4 text-white rounded-lg ${
                  isSubmitting
                    ? "bg-gray-500"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } transition duration-200`}
              >
                {isSubmitting ? "Submitting..." : "Add"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Admin;

