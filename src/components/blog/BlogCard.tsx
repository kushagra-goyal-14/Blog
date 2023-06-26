"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  heading: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  btnLink: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
  heading,
  description,
  image,
  date,
  readTime,
  btnLink,
}) => {
  const router = useRouter();
  return (
    <div
      className=" bg-black border border-200
      border-black
      basis-80
      border-r-1
      hover:border-violet-500
      rounded-3xl
      transform transition duration-500 hover:scale-110

      
    "
    >
      <a
        onClick={() => router.push(btnLink)}
        style={{
          cursor: "pointer",
        }}
      >
        <Image
          src={`/images/${image}.jpg`}
          width={400}
          height="240"
          className="object-cover w-full h-64 rounded-t-3xl"
          alt={image}
        />
      </a>
      <div
        className="p-8 gap-5 flex justify-center flex-col
      bg-black
      rounded-b-3xl
      "
      >
        <a
          onClick={() => router.push(btnLink)}
          style={{
            cursor: "pointer",
          }}
        >
          <h5
            className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            style={{
              fontWeight: "800",
            }}
          >
            {heading}
          </h5>
        </a>
        {/* readTime & Date */}
        <div className="flex justify-start items-center">
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
            className="text-sm text-gray-700 dark:text-gray-400"
          >
            {date}
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
            {readTime}
          </p>
        </div>
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
          }}
          className=" font-normal text-gray-700 dark:text-gray-400"
        >
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
        <a
          onClick={() => router.push(btnLink)}
          className="px-3 max-w-max py-2 rounded-lg text-sm relative rounded group font-medium text-white font-medium inline-block"
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
            Read more
          </span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
