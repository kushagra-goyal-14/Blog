"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";

const MyComponent = React.lazy(() => import("./Featured2"));
const FallbackComponent = () => <div>Oops! Something went wrong.</div>;
interface FeaturedProps {
  heading1: string;
  description1: string;
  image1: string;
  date1: string;
  readTime1: string;
  btn1Link: string;
  heading2: string;
  description2: string;
  image2: string;
  date2: string;
  readTime2: string;
  btn2Link: string;
}
const Featured: React.FC<FeaturedProps> = ({
  heading1,
  description1,
  image1,
  date1,
  readTime1,
  btn1Link,
  heading2,
  description2,
  image2,
  date2,
  readTime2,
  btn2Link,
}) => {
  const router = useRouter();
  //   md:flex md:flex-row

  //       md:items-start md:justify-center
  //       md:gap-5
  //     md:w-full
  //     md:px-44
  //     md:pt-20
  //     md:pb-16
  return (
    <div
      className="md:flex md:flex-row
     
      md:items-start md:justify-center 
      md:gap-5
    md:w-full
    md:px-44
    md:pt-20
    md:pb-16
    max-md:flex
      max-md:flex-col
        max-md:items-center
        max-md:justify-center
        max-md: px-0
        max-md: pt-0
        max-md: pb-16
        max-md: w-full
        max-md: gap-5
    
    "
    >
      <div
        className=" bg-black  
        max-md:w-full
        max-md:rounded-3xl
        max-md:px-0
        max-md:py-5
        md: max-w-full
        md: w-2/3

    
    "
      >
        <a
          style={{
            cursor: "pointer",
          }}
        >
          <Image
            src={`/images/${image1}.jpg`}
            width="600"
            height="300"
            className="object-cover w-full h-80 rounded-3xl relative"
            alt=""
            onClick={() => router.push(btn1Link)}
          />
        </a>
        <div
          className="py-8 gap-5 px-1 flex justify-center flex-col
      bg-black
      rounded-b-3xl
      
      "
        >
          <a
            style={{
              cursor: "pointer ",
            }}
            onClick={() => router.push(btn1Link)}
          >
            <h5
              className=" text-2xl relative font-bold tracking-tight text-gray-900 dark:text-white "
              style={{
                cursor: "pointer",
                fontFamily: "Jost",
                fontWeight: "600",
              }}
            >
              {heading1}
            </h5>
          </a>
          <div className="flex justify-start items-center">
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "bold",
              }}
              className="text-sm text-gray-700 dark:text-gray-400"
            >
              {date1}
            </p>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "bold",
              }}
              className="text-sm text-gray-700 dark:text-gray-400 px-1.5"
            >
              •
            </p>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "bold",
              }}
              className="text-sm text-gray-700 dark:text-gray-400"
            >
              {readTime1}
            </p>
          </div>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
            className=" font-normal text-gray-700 dark:text-gray-400"
          >
            {description1.length > 100
              ? description1.substring(0, 100) + "..."
              : description1}
          </p>
        </div>
      </div>
      <Suspense fallback={<FallbackComponent />}>
        <MyComponent
          heading2={heading2}
          description2={description2}
          image2={image2}
          date2={date2}
          readTime2={readTime2}
          btn2Link={btn2Link}
        />
      </Suspense>
    </div>
  );
};

export default Featured;
