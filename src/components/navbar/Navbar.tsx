import Container from "../Container";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <div className=" w-full z-10 bg-black shadow-sm">
      <div className="py-5 border-black border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 ">
            <Logo />
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 py-6">
              <a
                href="https://github.com/kushagra-goyal-14"
                target="_blank"
                className="text-white hover:text-white dark:hover:text-white transform transition duration-500 hover:scale-110"
              >
                <svg
                  className={`w-5 h-5`}
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="sr-only">GitHub Account</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kushagra-goyal-kk/"
                target="_blank"
                className="text-white hover:text-white dark:hover:text-white transform transition duration-500 hover:scale-110"
              >
                <svg
                  className={`w-5 h-5`}
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>

                <span className="sr-only">LinkedIn Profile</span>
              </a>
              <a
                href="mailto:kushagragoyalkkg@gmail.com"
                target="_blank"
                className="text-white hover:text-white dark:hover:text-white transform transition duration-500 hover:scale-110"
              >
                <svg
                  className={`w-5 h-5`}
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>

                <span className="sr-only">Email Me</span>
              </a>

              <a
                href="https://kushagra-goyal-14.github.io/"
                target="_blank"
                className="text-white hover:text-white dark:hover:text-white transform transition duration-500 hover:scale-110"
                style={{
                  cursor: "pointer",
                }}
              >
                <svg
                  className={`w-5 h-5`}
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span className="sr-only">My Profile</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
