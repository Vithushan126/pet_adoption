import React, { useState } from "react";
import WhiteLogo from "../../assets/logo.png";
import Visa from "../../assets/Visa.png";
import Master from "../../assets/Mastercard.png";
import Amex from "../../assets/Amex.png";
import Paypal from "../../assets/PayPal.png";
import Googlepay from "../../assets/Googlepay.png";
import Applepay from "../../assets/ApplePay.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import FooterBaground from "../../assets/FooterBag.jpg";

const links = [
  { text: "Accessibility statement", href: "#" },
  { text: "Contact us", href: "/contact" },
  { text: "Privacy policy", href: "#" },
  { text: "Terms and conditions", href: "#" },
  { text: "Cookie Policy", href: "#" },
];

const Footer = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const paymentMethods = [
    { src: Visa, alt: "Visa" },
    { src: Master, alt: "MasterCard" },
    { src: Amex, alt: "Amex" },
    { src: Paypal, alt: "PayPal" },
    { src: Googlepay, alt: "Google Pay" },
    { src: Applepay, alt: "Apple Pay" },
  ];

  const languages = ["EN", "FR", "GR", "IT"];

  return (
    <footer
      className="w-full  text-text-color py-10 mt-10 relative  bg-cover "
      style={{
        backgroundImage: `url(${FooterBaground})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="sm:flex grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-around">
          {/* Help Section */}
          <div>
            <h3 className="font-medium text-sm mb-4 ">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" font-medium text-sm hover:underline">
                  Pet Adoption
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Pet Care Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Pet Medical Advice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Donation & Sponsorship Options
                </a>
              </li>
            </ul>
          </div>

          {/* Travellers Section */}
          <div>
            <h3 className="font-medium text-base mb-4 text-smokyGray">Guide</h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Pet Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Adoption Certificate Generation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Health
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Pets Information
                </a>
              </li>
            </ul>
          </div>

          {/* Guide Section */}
          <div>
            <h3 className="font-medium text-base mb-4 text-smokyGray">Guide</h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Imprint
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Data Protection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Pets Information
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-medium text-base mb-4 text-smokyGray">
              About Us
            </h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Our People
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightGray font-medium text-sm hover:underline"
                >
                  Our Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div
          className="bg-darkBlue absolute top-1/2 -right-6 transform -translate-y-1/2 w-[120px] h-[71px] bg-contain bg-no-repeat -rotate-90"
          style={{ backgroundImage: `url(${WhiteLogo})` }}
        ></div>

        {/* Footer Bottom Section */}
        <div className="relative mt-4 border-t border-lightGray pt-8 max-w-[1300px] mx-auto">
          <div className="sm:flex grid grid-cols-1 md:grid-cols-3  justify-between">
            {/* Subscription */}
            <div>
              <h3 className="font-medium text-base mb-4 text-smokyGray">
                Subscribe to our special offer
              </h3>
              <p className="text-lightGray font-medium text-sm mt-6 max-w-[320px] leading-relaxed">
                Save with our latest fares and offers.{" "}
                <a href="#" className="underline block">
                  Unsubscribe or change your preferences
                </a>
                .
              </p>
              <form className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-4 space-y-4 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 border border-lightGray w-[231px] h-8 sm:w-[auto]"
                />
                <button
                  type="submit"
                  className="bg-darkBlue text-white font-medium text-sm w-[132px] h-8 hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-lightGray font-medium text-sm mt-6 whitespace-pre-line">
                For details on how we use your information, <br /> please see
                our{" "}
                <a href="#" className="underline">
                  privacy policy
                </a>
                .
              </p>
            </div>

            {/* Payment & Language */}
            <div className="flex flex-col space-y-4 text-center md:text-start">
              {/* Payment Section */}
              <div>
                <h3 className="font-medium text-base mb-4 text-smokyGray">
                  Payment Method
                </h3>
                <div className="flex justify-center flex-wrap gap-3 md:justify-start">
                  {paymentMethods.map((method, index) => (
                    <img
                      key={index}
                      src={method.src}
                      alt={method.alt}
                      className={`h-6 w-8 md:h-8 md:w-11 object-contain cursor-pointer ${
                        selectedPayment === index
                          ? "ring-2 ring-darkBlue rounded"
                          : ""
                      }`}
                      onClick={() => setSelectedPayment(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Language Section */}
              <div>
                <h3 className="font-medium text-base mb-4 mt-8 text-smokyGray">
                  Select Language
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className={`px-2 py-1 h-9 w-12 border rounded-xl ${
                        selectedLanguage === lang
                          ? "bg-darkBlue text-white"
                          : ""
                      } hover:bg-darkBlue hover:text-white`}
                      onClick={() => setSelectedLanguage(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4 text-center md:text-start">
              <div>
                <h3 className="font-medium text-base mb-4 text-smokyGray ">
                  Contact
                </h3>
                <p className="text-lightGray font-medium text-sm mt-2 leading-relaxed">
                  Langstrasse 214, 8005 Zurich
                </p>
                <p>
                  <a
                    href="mailto:info@efly.ch"
                    className="text-lightGray font-medium text-sm mt-2 leading-relaxed hover:underline"
                  >
                    info@efly.ch
                  </a>
                </p>
                <p className="text-lightGray font-medium text-sm mt-2 leading-relaxed">
                  +41 44 668 0606
                </p>
                <div className="relative mt-8">
                  {/* Social Media Title */}
                  <h3 className="font-medium text-base mb-4 text-smokyGray">
                    Social Media
                  </h3>

                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-6 md:justify-start">
                    <a href="#" className="text-socialmedia ">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-socialmedia">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-socialmedia">
                      <Youtube size={26} />
                    </a>
                    <a href="#" className="text-socialmedia">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-4 border-t border-lightGray pt-8 max-w-[1300px]  ">
          <div className="flex justify-center gap-2 font-medium text-sm space-x-2 mt-2 sm:flex-nowrap overflow-x-scroll mx-0">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lightGray hover:underline "
              >
                {link.text}
              </a>
            ))}
          </div>
          <p
            className="text-darkcolor mt-4 text-center font-medium text-sm"
            aria-hidden="true"
          >
            &copy; {new Date().getFullYear()} Vairamuthtu Vithushan. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
