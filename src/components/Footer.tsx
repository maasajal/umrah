import logo from "@/app/assets/BELogo.png";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="border-t-4 border-[#003479]">
        <footer className="footer p-10 sm:px-20 row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <aside className="max-w-xs">
            <a className="btn btn-ghost h-full w-40">
              <Image
                className="dark:invert"
                src={logo}
                alt="company logo"
                width={100}
                height={100}
              />
            </a>
            <div className="leading-8">
              <p>
                BusinessEasy <br />
                Business ID: 3283660-3
              </p>
              <p>
                Invest your time and efforts on running your business. Leave the
                accounting to me. Make your life easy, comfortable and success.
              </p>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">Contact Info</h6>
            <a
              href="https://maps.app.goo.gl/xLLp3y92Z8ffJ5SC8"
              target="_blank"
              className="link link-hover flex items-center justify-center gap-2"
            >
              <FaLocationDot className="text-lg" />
              <address>
                Orivedenkatu 5, 33720, <br />
                Tampere, Finland
              </address>
            </a>
            <a
              href="tel:+358449869280"
              className="link link-hover flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" /> +358449869280
            </a>
            <a
              href="mailto:info@business-easy.com"
              className="link link-hover flex items-center justify-center gap-2"
            >
              <MdOutlineMail className="text-lg" /> umrah@business-easy.com
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Accounting Service</a>
            <a className="link link-hover">Bookkeeping Service</a>
            <a className="link link-hover">Financial Service</a>
            <a className="link link-hover">Financial Statement Preparation</a>
            <a className="link link-hover">Individual VAT & Tax Service</a>
            <a className="link link-hover">Payroll Service</a>
            <a className="link link-hover">VAT & Tax Service</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="bg-[#003479] text-white p-4 text-center">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              <Link
                href="https://business-easy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                BusinessEasy
              </Link>
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};
export default Footer;
