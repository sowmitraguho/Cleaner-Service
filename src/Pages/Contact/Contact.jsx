import contactus from '../../assets/Contact-Us.jpg'
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="pt-24 bg-white ">
      <div className="container mx-auto  py-12" >
        <h1 className="text-3xl font-bold text-slate-900 pb-4 text-center">
          Contact US
        </h1>
        <p className="text-xl text-slate-900 pb-4 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          quia maiores. Veritatis quae expedita incidunt odio quam veniam hic.
          Eveniet possimus accusantium sunt inventore provident voluptatem quos
          officia repellendus blanditiis. Repudiandae quae culpa quam minus nam
          et ut explicabo ea quod, libero, rerum sequi optio odit necessitatibus
          quaerat, dicta inventore. Recusandae dicta libero blanditiis itaque
          eum quisquam quis modi.
        </p>
        <div className="contact text-slate-900 grid grid-cols-2 gap-4" >
          <div className="address rounded-xl my-auto p-40 mx-auto" style={{
            
            backgroundImage:
                `url(${contactus})`,
            //height: "100vh",
            //marginTop: "-70px",
            //fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            //filter: "blur(2px)",
            
        }}>
            <div className="contact-inside p-4 rounded-xl w-full" style={{
                backdropFilter: "blur(8px)",
                
            }}>
            <h1 className="text-3xl text-blue-500 text-center font-bold pb-8 ">Contact US</h1>
            <div className="offline-address flex gap-4 items-center">
              <CiMail />
              <address>8/16, arambag, shantihouse, Dhaka.</address>
            </div>
            <div className="email flex gap-4 items-center">
              <SiGmail />
              <p className="text-sm">cleaner-service@gmail.com</p>
            </div>
            <div className="phone flex gap-4 items-center">
              <FaPhoneAlt />
              <h2 className="text-base">Call Us - 0124567889</h2>
            </div>
            </div>
            
          </div>
          <div className="contact-form w-full">
            <h2 className="text-blue-500 text-center text-2xl font-bold">
              Message Us
            </h2>
            <input
              className="bg-white block border border-slate-500 p-4 rounded-xl w-full mt-4"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="bg-white block border border-slate-500 p-4 rounded-xl w-full mt-4"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <textarea
              className="bg-white block border border-slate-500 p-4 rounded-xl w-full mt-4"
              name="message"
              id="msg"
              cols="30"
              rows="10"
            ></textarea>
            <Link className="btn btn-primary mt-4 px-16 ">Submit</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
