/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Nav from "../Component/Nav";
import Skill from "../Pages/Skill.jsx";

import { FaGithub, FaLinkedin ,FaInstagram, FaWhatsapp} from "react-icons/fa";
const AboutMe = () => {
  useEffect(() => {
    // Simulate fetching data from an API or data file
  }, []);

  return (
    <>
      <Nav />
      <div className="my-10">
        <div className="text-white relative">
          <img
            className="absolute  inset-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&"
            alt=""
          />
          <div className="bg-black bg-opacity-50 relative w-full h-full">
            <div className="flex flex-col  md:flex-row p-4 md:px-20 md:py-10 gap-4 md:gap-8">
              <div className="rounded-3xl md:items-center shadow-md  md:flex  hidden sm:block w-full md:w-1/5 lg:w-1/4 h-[410px]  object-cover">
                <img
                  className=" relative  rounded-3xl shadow-md"
                  src="../images/HeroImage.jpg"
                  alt="Profile"
                />
                <div className="absolute start-[300px] rounded p-1 flex flex-col gap-3  bg-[#08080879] ">
                  <FaGithub className="text-2xl"/>
                  <FaLinkedin className="text-2xl text-[#0762C8]" />
                  <FaInstagram className="text-2xl text-[#cd486b]" />
                  <FaWhatsapp className="text-2xl text-[#25D366]" />


                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-80 p-6 rounded-3xl h-fit w-full md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello!
                  My name is uhammed Fahiz k, and I'm a MERN Stack DEvoplepor
                  from Calicut. I graduated with a BCA from the University of
                  calicut, where I built a strong foundation in computer science
                  and software development.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Over
                  the past 8 Month, I've been passionately honing my skills in
                  the MERN stack (MongoDB, Express.js, React, Node.js) under the
                  guidance of an experienced mentor. This intensive practice has
                  allowed me to develop a deep understanding of full-stack
                  development and modern web technologies.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; During
                  this time, I've successfully completed over 30 mini projects,
                  which have helped me master various aspects of the MERN stack.
                  Additionally, I have built One that showcases my ability to
                  design, develop, and deploy full-stack applications from
                  scratch.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I
                  believe in the power of technology to solve real-world
                  problems and am eager to contribute to innovative projects.
                  Feel free to reach out to me at Fahizk100@gmail.com or connect
                  with me on{" "}
                  <a
                    href={
                      "https://www.linkedin.com/in/muhammed-fahiz-96726b287/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    LinkedIn
                  </a>
                  . I'm always open to new opportunities and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Education</h1>
        </div>
      </div>
      <Skill />
    </>
  );
};

export default AboutMe;
