import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer px-4 lg:px-20 w-screen text-center mb-16 sm:mb-0 py-4  text-white bg-myBlack">
      <div className="footer-section flex flex-wrap gap-2 justify-between items-center w-full lg:w-3/4 mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sk. Imran Hussain
        </p>

        <div className="footer-section-container flex gap-6 text-lg sm:text-2xl ">
          <a
            href="https://www.linkedin.com/in/sk-imran-hussain/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin icon  cursor-pointer hover:text-myYellow transition-all duration-300 text-base sm:text-xl"></i>
          </a>
          <a href="https://github.com/skimran-coder" target="_blank">
            <i className="fa-brands fa-github icon cursor-pointer hover:text-myYellow text-base sm:text-xl transition-all duration-300 "></i>
          </a>
          <a href="https://twitter.com/skimranhussain" target="_blank">
            <i className="fa-brands fa-x-twitter icon cursor-pointer text-base sm:text-xl hover:text-myYellow transition-all duration-300"></i>
          </a>
          <a href="https://www.instagram.com/skimranhussain4/" target="_blank">
            <i className="fa-brands fa-instagram icon cursor-pointer text-base sm:text-xl hover:text-myYellow transition-all duration-300"></i>
          </a>
          <a href="mailto:skimranhussain4.com" target="_blank">
            <i className="fa-regular fa-envelope icon cursor-pointer hover:text-myYellow text-base sm:text-xl transition-all duration-300 "></i>
          </a>
        </div>

        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <Link to={"/privacy-policy"} className="text-sm">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={"/terms-of-service"} className="text-sm">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to={"/cookie-policy"} className="text-sm">
              Cookie Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
