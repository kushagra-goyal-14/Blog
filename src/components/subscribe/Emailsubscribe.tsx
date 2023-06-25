"use client";

const Emailsubscribe = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 pb-6">
        <h1
          className="text-4xl font-bold text-center text-white"
          style={{
            fontFamily: "Jost",
            fontWeight: "bold",
          }}
        >
          Subscribe to our newsletter
        </h1>
      </div>

      <div
        className="relative flex
      flex-row
        max-w-md
        mx-auto
        mt-10
        mb-10
      "
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <div className=" inset-y-0 right-0 flex items-center pr-3 ">
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 w-64
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          "
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
            placeholder="Enter your email"
          />
          <div className=" px-2 inset-y-0 right-0 flex items-center pr-3 ">
            <a
              className="px-3 max-w-max py-3 rounded-lg text-sm relative rounded group font-medium text-white font-medium inline-block w-28"
              href="#"
              style={{
                cursor: "pointer",
              }}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
                className="relative"
              >
                Subscribe
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emailsubscribe;
