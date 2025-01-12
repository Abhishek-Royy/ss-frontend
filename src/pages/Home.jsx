import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Footer from "../components/Footer";

function Home() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://ss-backend-hikp.onrender.com/api/v2/getdata")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Close modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Navbar />
      <Hero/>
      <div className="flex justify-center flex-wrap p-5 bg-gradient-to-t bg-gray-100 from-slate-700">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer md:w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-[60vh] overflow-y-hidden m-2 hover:scale-95"
            >
              <img
                className="rounded-t-lg h-40 w-full object-cover"
                src={item?.bgImg}
                alt="Background Image"
              />
              <div className="p-3">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item?.title}
                </h5>
                <p className="text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {item?.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>

      {/* Fullscreen Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg dark:bg-gray-800 p-5 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white text-4xl font-bold"
            >
              &times;
            </button>
            <img
              className="w-full rounded-lg"
              src={selectedItem?.bgImg}
              alt="Background Image"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedItem?.title}
              </h2>
              <p className="mt-3 text-gray-700 dark:text-gray-400">
                {selectedItem?.description}
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default Home;
