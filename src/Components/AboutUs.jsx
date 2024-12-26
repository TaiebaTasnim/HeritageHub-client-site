

const AboutUs = () => {
  return (
      <div className="py-10 px-6">
      <div className="container mx-auto w-[90%]">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#000029]"
            data-aos="fade-down"
          >
            About Us
          </h1>
          <p
            className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            <strong>
              Welcome to HeritageHub, your gateway to exploring the wonders of
              historical artifacts and timeless treasures.
            </strong>
          </p>
        </div>

        {/* About Us Sections */}
        <div className="grid lg:grid-cols-2 gap-12" >
             
          {/* <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#000029] mb-6">
              Preserving History, Inspiring Future
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              <strong>
                At HeritageHub, we are dedicated to preserving the cultural and
                historical richness of civilizations across the world. Our
                platform connects you with rare and significant artifacts,
                offering a glimpse into the stories and legacies of the past.
              </strong>
            </p>
            <button className="flex justify-center items-center gap-2 py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                Learn More
              </span>
            </button>
          </div> */}
          {/* Image Section */}
          <div
            className="p-4 border-[#000029] border-2 rounded-lg"
            data-aos="fade-right"
          >
            <div className="h-full">
              <img
                src="https://i.ibb.co.com/XtCYYTT/collector.jpg"
                alt="About Us"
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Content Section */}
             <div className="flex flex-col justify-center border-r-2  border-[#000029] pr-8" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#000029] mb-6">
              Preserving History, Inspiring Future
            </h2>
            <ul className="text-gray-500 text-lg leading-relaxed mb-6 space-y-4">
              <li className="list-disc ">
                <strong> Commitment to Preservation:</strong> Safeguarding the cultural and historical richness of civilizations worldwide.
              </li>
              <li className="list-disc ">
                <strong>Connecting You to History:</strong> Explore rare and significant artifacts that tell the stories of the past.
              </li>
              <li className="list-disc ">
                <strong> Inspiring Learning:</strong> Discover the legacies of ancient civilizations and their impact on the modern world.
              </li>
              <li className="list-disc ">
                <strong> A Gateway to Knowledge:</strong> Experience the wonders of timeless treasures through our well-curated platform.
              </li>
            </ul>
            <button className="flex justify-center items-center gap-2 py-3 px-6 bg-[#000029] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
              <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                Learn More
              </span>
            </button>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
