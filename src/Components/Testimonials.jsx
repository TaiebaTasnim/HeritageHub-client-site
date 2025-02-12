//import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactStars from "react-rating-stars-component";

//import useAxiosPublic from "../../hooks/useAxiosPublic";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

const Testimonials = () => {
      const reviews = [
            {
              id: 1,
              img: person1,
              review:
                "HeritageHub is a treasure trove for history lovers! The vast collection of artifacts and detailed descriptions make learning about different cultures truly immersive.",
              name: "Alexander Graham",
              designation: "History Enthusiast",
              rating:4
            },
            {
              id: 2,
              img: person2,
              review:
                "I’ve always been fascinated by ancient artifacts, and HeritageHub provides an amazing platform to explore them. The search functionality is super helpful in finding specific pieces.",
              name: "Sophia Martinez",
              designation: "Museum Curator",
              rating:5
            },
            {
              id: 3,
              img: person3,
              review:
                "As an archaeology student, HeritageHub has been an invaluable resource for my research. The well-organized database and high-quality images of artifacts make studying so much easier!",
              name: "David Thompson",
              designation: "Archaeology Student",
              rating:4
            },
            {
                  id: 4,
                  img: "https://i.ibb.co.com/xXjyLh0/female-6.jpg",
                  review:
                    "HeritageHub is a fantastic initiative! It’s great to see a platform that helps preserve and showcase cultural heritage for future generations.",
                  name: "Emma Wilson",
                  designation: "Cultural Preservationist",
                  rating:4
                },
                {
                  id: 5,
                  img: "https://i.ibb.co.com/kqjjyJ9/pexels-moose-photos-170195-1036623.jpg",
                  review:
                    "The website is beautifully designed, easy to navigate, and full of interesting historical facts. I love spending time discovering new artifacts here!",
                  name: "Liam Leny",
                  designation: "Travel Blogger",
                  rating:4
                },
            
          ];
          
         
          

  return (
      <div className="container mx-auto w-[90%] bg-white dark:bg-black py-12"> 
            <div className=" ">
      
      <h2 className="text-4xl font-bold text-center mb-8 text-[#000029] dark:text-white">What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          // Adjust based on screen size
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          300: { slidesPerView: 1 },
        }}
        className="pb-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-6 bg-white border-t-2 border-r-2 border-l-2 border-[#000029]    rounded-lg shadow-2xl transform  transition-transform duration-300  border-b-8 border-b-[#00FFFF] "
            style={{ minHeight: "380px" }}>
             
              <div className="flex flex-col items-center">
                <img
                  src={review.img}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full mb-4 shadow-md border-[#00FFFF] border-4"
                />
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  {review.name || "Anonymous"}
                </h3>
                <h3 className="font-bold text-[14px] text-gray-600 mb-2">
                  {review.designation || "Anonymous"}
                </h3>
              </div>
              <p className="text-sm text-gray-600 italic mb-4 text-center ">
              
                &quot;{review.review}&quot;
              </p>
              <div className="flex justify-center">
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={24}
                  isHalf={true}
                  edit={false}
                  activeColor="#000029"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
   
  );
};

export default Testimonials;
