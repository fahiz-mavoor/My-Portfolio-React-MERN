import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";
// import AOS from 'aos';
import { FaArrowRightLong } from "react-icons/fa6";

import { Button,  } from 'antd';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SampleProject = () => {
  const items = [
    { 
      id: 10,
      title: "Drive Wave",
      image: "../images/DriveWave.png",
      type: "Project",
      subtitle: "car rental website node, express, mongodb and hbs",
      description:
        " is a car rental website designed to provide a seamless experience for users looking to rent vehicles. Built using modern web technologies such as Node.js, Express, MongoDB, and Handlebars (HBS), Drive Wave offers robust backend management paired with an intuitive user interface, catering to customers, administrators, and vendors. The platform not only allows users to rent cars but also enables third-party car owners to list and manage their vehicles, expanding the range of available options for renters.",
    },
    {
      id: 20,
      title: "Recipe Fusion",
      type: "mini",
      image: "../images/RecipeFusion.png",
      description:
        "This project involves developing a robust backend for a recipe-sharing application using Node.js, Express, and MongoDB. The application leverages JWT (JSON Web Tokens) for secure user authentication, including the implementation of refresh tokens to maintain long-term user sessions without compromising security.",
      subtitle:
        "Secure and Scalable Recipe Sharing Backend with JWT Authentication",
    },
    {
      id: 30,
      image: "../images/Seminar.png",
      type: "mini",
      title: "Seminar Hall Booking",
      subtitle: "car rental website node, express, mongodb and hbs",
    },
    {
      id: 40,
      image: "../images/TODO.png",
      type: "mini",
      title: "kanban  To do",
      subtitle: "car rental website node, express, mongodb and hbs",
    },
  ];
  const [selectedId, setSelectedId] = useState(null);

  const onItemClick = (itemId) => {
    setSelectedId(itemId === selectedId ? null : itemId);
  };
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <>
      <h1 className="text-black dark:text-white text-center text-3xl font-bold opacity-35 ">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 gap-4 p-8 md:px-24 relative">
        {items
          .filter((item) => !"project" || item.type.toLowerCase() === "project")
          .map((item, index) => (
            <motion.div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              key={index}
              layoutId={item.id}
              onClick={() => onItemClick(item.id)}
              // style={{ backgroundColor: '#A6A001' }}
              className="item p-5 rounded-2xl bg-[#999f04] dark:bg-[#A6A001]    flex flex-col justify-center shadow-2xl z-0 text-white cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                className=" hover:grayscale relative  object-cover  flex-shrink-0  h-[200px] rounded-lg "
                alt={item.title}
              />
              <motion.h2 className="text-2xl font-bold text-center my-3">
                {item.title}
              </motion.h2>
              {/* <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          ))}
</div>
        <h1 className="text-black dark:text-white text-center text-3xl font-bold opacity-35 ">
          MINI PROJECTS
        </h1>
<div className=" grid-cols-1 grid md:grid-cols-3 gap-4 p-8 md:px-24 relative">
        {items
          .filter((item) => !"mini" || item.type.toLowerCase() === "mini")
          .map((item, index) => (
            <motion.div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              key={index}
              layoutId={item.id}
              onClick={() => onItemClick(item.id)}
              // style={{ backgroundColor: '#A6A001' }}
              className="item p-5 rounded-2xl bg-[#999f04] dark:bg-[#A6A001]    flex flex-col justify-center shadow-2xl z-0 text-white cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                className=" hover:grayscale relative  object-cover  flex-shrink-0  h-[200px] rounded-lg "
                alt={item.title}
              />
              <motion.h2 className="text-2xl font-bold text-center my-3">
                {item.title}
              </motion.h2>
              {/* <motion.h5>{item.subtitle}</motion.h5> */}
            </motion.div>
          ))}
       
      </div>
      <Button className="w-40 flex shadow-lg items-center h-fit mx-24 ms-auto">
          <Link to="/projects">View All Projects</Link>
          <FaArrowRightLong/>
        </Button>
    </>
  );
};

export default SampleProject;
