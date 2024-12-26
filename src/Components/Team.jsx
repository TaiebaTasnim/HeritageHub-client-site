import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & Historian",
      image: "https://i.ibb.co.com/0Mbn1cd/male-2.jpg",
      bio: "Passionate historian with over 10 years of experience uncovering stories behind artifacts.",
    },
    {
      name: "Tannim Taieba",
      position: "Artifact Specialist",
      image: "https://i.ibb.co.com/m5yKc6t/female-1.jpg",
      bio: "Expert in identifying, preserving, and restoring priceless historical relics.",
    },
    {
      name: "Emily White",
      position: "Cultural Researcher",
      image: "https://i.ibb.co.com/jG0y49r/female-2.jpg",
      bio: "Cultural enthusiast dedicated to connecting artifacts with their cultural roots.",
    },
    {
      name: "Michael Green",
      position: "Archivist",
      image: "https://i.ibb.co.com/Tktp7ht/male-1.jpg",
      bio: "Skilled archivist specializing in cataloging and digitizing historical collections.",
    },
    {
      name: "Sarah Johnson",
      position: "Artifact Restorer",
      image: "https://i.ibb.co.com/7gZVL0R/female-3.jpg",
      bio: "Dedicated to the art and science of artifact preservation and restoration.",
    },
    {
      name: "Falaq Yelmaz",
      position: "Curator",
      image: "https://i.ibb.co.com/r2Cg7FG/pexels-olly-712513.jpg",
      bio: "Experienced curator designing engaging exhibitions to showcase artifacts.",
    },
  ];

  return (
    <div>
      <section className="bg-white text-[#000029] py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#000029] mb-12" data-aos="fade-up">
            Meet Our Team
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 }, // Mobile: 1 slide
              768: { slidesPerView: 2 }, // Tablet: 2 slides
              1024: { slidesPerView: 3 }, // Desktop: 3 slides
            }}
            modules={[Navigation]}
            className="team-slider"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  className="bg-[#000029] text-white p-6 rounded-lg shadow-lg border-b-8 border-[#00FFFF] flex flex-col justify-between"
                  style={{ minHeight: "380px" }}  // Ensure consistent height for all cards
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#00FFFF]"
                  />
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#00FFFF] font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-300 text-sm flex-grow">{member.bio}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Team;
