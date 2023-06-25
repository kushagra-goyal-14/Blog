"use client";

import SocialIcons from "../Socialicons";

const Footer: React.FC = () => {
  return (
    <>
      <div className="relative sm:flex sm:items-center sm:justify-center flex-col pt-16 py-12 bg-black">
        {/* <h1
          className="h-fit w-fit max-w-full absolute m-auto top-0 left-0 right-0 bottom-0 text-center text-border-thick text-[24vw] md:text-[11vw] opacity-10 text-white
          "
          style={{
            fontFamily: "Sulphur Point",
            fontWeight: "600",
          }}
        >
          Kushagra Goyal
        </h1> */}

        <SocialIcons sizeh="10" sizew="10" />
        <span
          className="text-md
         text-white sm:text-center dark:text-white py-4"
          style={{
            fontFamily: "Jost",
            fontWeight: "600",
          }}
        >
          © 2023 Made with ❤️ by{" "}
          <a
            href="https://kushagra-goyal-14.github.io/"
            target="_blank"
            className="hover:underline
          text-violet-600
            dark:text-violet-400
            
          "
          >
            Kushagra
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
