import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src="https://2.bp.blogspot.com/-wSxu58lDh_4/WfM3gNuEUZI/AAAAAAAACs4/ob7wdy3TLQorNVGBq3lIEo3gp9UrpMEewCLcBGAs/s1600/Screen%2BShot%2B2017-10-27%2Bat%2B14.26.53.png"
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Platform</h1>
        <p className="mt-4 text-lg md:text-xl">
          Explore & Experience the world news with us
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg">
          Get Started
        </button> */}
      </div>
    </div>
  );
}

export default Hero;
