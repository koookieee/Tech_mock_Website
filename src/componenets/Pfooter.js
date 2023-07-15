import React from 'react';
import "./pfooter.css";
import {MdOutlineFacebook} from "react-icons/md"
import {BsInstagram} from "react-icons/bs"
const Pfooter = () => {
  return (
    <div className='pf-div'>
      <div className='pf-column'>
        <div className='pf-about'>
          <h3>Xzect Labs Pvt. Ltd.</h3>
          <p className='pf-p'>
            Xzect provides a diverse array of services that enable both businesses and individuals to bring their vision to life. Our specialties include software development, website design and SEO, cloud services, robotics and automation, 3D printing and prototyping, data science and analytics, AI and machine learning, IOT, AR and VR, blockchain, and other tech-related services. Our team of experienced professionals is available to assist with the design and development of new products, exploration of robotics and automation possibilities, or any other requirements.
          </p>
          <p>
            <b>Registered Address: </b>
            203, 2-A/3, Asaf Ali Road, Delhi - 110002
          </p>
          <p>
            <b>CIN: </b>
            U72200DL2022PTC408714 
          </p>
          <p>
            <b>GST: </b>
            07AAACX4373J1Z2
          </p>
        </div>
       
      </div>

      <div className='pf-column'>
        <div className='pf-se'>
          <h3>Services</h3>
          <ul className='pf-ul'>
            <li>Software & App Development</li>
            <li>Website Development & SEO</li>
            <li>Cloud Services</li>
            <li>Robotics & Automation</li>
            <li>3D Printing & prototyping</li>
            <li>Data Science & Analytics</li>
            <li>AI & Machine Learning</li>
            <li>IOT, AR & VR</li>
            <li>Blockchain</li>
            <li>Tech Consultancy</li>
            <li>Research & Development</li>
            <li>View all Services</li>
          </ul>
        </div>
      </div>

      <div className='pf-column'>
        <div className='pf-in'>
          <h3>Industries</h3>
          <ul className='pf-ul'>
            <li>eCommerce</li>
            <li>Hyperlocal</li>
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Education</li>
            <li>Gaming</li>
            <li>Social Networking</li>
            <li>Agriculture</li>
            <li>Travel & Aviation</li>
            <li>Logistics</li>
            <li>Restaurant</li>
            <li>Real Estate</li>
            <li>View all Industries</li>
          </ul>
        </div>
      </div>

      <div className='pf-column'>
        <div className='pf-so'>
          <h3>Resources</h3>
          <ul className='pf-ul'>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Webinars</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Legal Information</li>
            <li>Blog</li>
            <li>Youtube (@xzect_labs)</li>
            <li>Github (@xzect)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pfooter;
