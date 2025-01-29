import React from "react";
import CopyRigthFooter from "./CopyRightFooter";
import footerLogo from "../../assets/homePage/footerlogo.webp";

import map from "../../assets/footer/map.png";
import linkedIn from "../../assets/footer/linkedIn.png";
import linkedInLogo from "../../assets/footer/linkedInLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 md:w-[75%]">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={footerLogo}
            alt="AiSPRY Logo"
            className="w-40 h-auto mb-4"
          />

          <div className="mt-14 flex justify-between space-x-4">
            <div>
              <div className="text-sm">
                <span className="font-semibold text-md">Hyderabad:</span>{" "}
                2-56/2/19, 3rd Floor, Vijaya Towers, Ayyappa Society
                Road,Madhapur, Hyderabad, Telangana 500081
              </div>
              <div className="mt-2 text-sm">
                <span className="text-md font-semibold">Bengaluru:</span> 23,
                2nd Floor, 9th Main Road, 22nd Cross Road,7th Sector, HSR
                LayouNo, t Bengaluru, Karnataka 560102
              </div>
              <div className="mt-2 text-sm">
                <span className="text-md font-semibold">Chennai: No:</span> 1,
                1st Lane, Nungambakkam High Road, 1st Floor,Shantiram Center,
                Nungambakkam, Chennai, Tamil Nadu 600034
              </div>
            </div>

            <div className="flex flex-col items-center mt-4 pl-8">
              <a
                href="https://www.linkedin.com/company/aispry/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="linkedin" className="w-48" />
                <img src={linkedInLogo} alt="linkedinlogo" className="w-12 md:ml-8 mt-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <div>
            <img src={map} alt="map" className="w-full h-64" />
          </div>
          <div className="text-sm ">
            <p>AiSPRY has a global footprint in countries such as</p>
            <span className="md:ml-14">
              India | Malaysia | USA | UK | Australia
            </span>
          </div>
        </div>
      </div>
      <CopyRigthFooter />
    </footer>
  );
};

export default Footer;
