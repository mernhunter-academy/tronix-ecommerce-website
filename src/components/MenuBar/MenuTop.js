import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";
import Facebook from "../../../public/svg/Facebook";
import Instagram from "../../../public/svg/Instagram";
import Twiteer from "../../../public/svg/Twiteer";
import Linkedin from "../../../public/svg/Linkedin";
import { FaRegEnvelope } from "react-icons/fa";
// import Linkedin from "../../../public/svg/";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const MenuTop = () => {
  return (
    <>
      <div className="menu-top">
        <div className="d-flex justify-content-between align-items-center">
          <div className="social-media  d-flex align-items-center">
            <div className="media-icon">
              <Instagram />
            </div>
            <div className="media-icon">
              <Facebook />
            </div>
            <div className="media-icon">
              <Twiteer />
            </div>
            <div className="media-icon">
              <Linkedin />
            </div>
          </div>
          <div className="contact-media  d-flex align-items-center">
            <div className="d-flex align-items-center gap-2">
              <BsTelephone size={24} />
              <span className={poppins.className + " " + "phone"}>
                +12 345 6789 0
              </span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaRegEnvelope size={24} />
              <span className={poppins.className + " " + "phone"}>
                support@tronix.com
              </span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <IoPersonOutline size={24} />
              <span className={poppins.className + " " + "phone"}>Account</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuTop;
