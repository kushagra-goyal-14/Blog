import Image from "next/image";
import { useRouter } from "next/navigation";

interface Featured2Props {
  heading2: string;
  description2: string;
  image2: string;
  date2: string;
  readTime2: string;
  btn2Link: string;
}
const Featured2: React.FC<Featured2Props> = ({
  heading2,
  description2,
  image2,
  date2,
  readTime2,
  btn2Link,
}) => {
  const router = useRouter();
  return (
    <div
      className=" bg-black border border-black
      border-r-1
      rounded-3xl
      max-md:w-full
        max-md:rounded-3xl
        max-md:px-0
        max-md:py-0
     md:max-w-xs 
        md:px-0
        md:py-0
        md: max-w-full
    "
    >
      <a
        style={{
          cursor: "pointer",
        }}
      >
        <Image
          src={`/images/${image2 || "default"}.jpg`}
          width={400}
          height="240"
          className="object-cover w-full max-2xl:h-96 h-128 rounded-3xl relative"
          onClick={() => router.push(btn2Link)}
          alt=""
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
            cursor: "pointer",
          }}
          onClick={() => router.push(btn2Link)}
        >
          <h5
            className=" relative text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            style={{
              cursor: "pointer",
              fontFamily: "Jost",
              fontWeight: "600",
            }}
          >
            {heading2}
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
            {date2}
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
            className="text-sm text-gray-700 dark:text-gray-400 px-1.5"
          >
            {image2 ? "•" : ""}
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
            className="text-sm text-gray-700 dark:text-gray-400"
          >
            {readTime2}
          </p>
        </div>
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: "bold",
          }}
          className=" font-normal text-gray-700 dark:text-gray-400"
        >
          {description2?.length > 100
            ? description2?.substring(0, 100) + "..."
            : description2}
        </p>
      </div>
    </div>
  );
};

export default Featured2;
